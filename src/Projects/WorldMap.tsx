import React, { useEffect, useRef, useState } from "react";
import {
  geoPath,
  geoMercator,
  max,
  mouse,
  scaleLinear,
  select
} from "d3";
import "d3-selection-multi";
import useResizeObserver from '../Hooks/useResizeObserver';
import M from 'materialize-css';
import './WorldMap/Style.scss';

export default () => {
  
  const
  
  handleMap = (map, ref, selector, height, width) => {
    
    const
    
    svg = select(ref),
    projection = geoMercator()
      .fitSize([width - 10, height], selector.feature || map)
      .precision(10),
    
    pathGen = geoPath().projection(projection);
    
    svg
      .selectAll(".country")
      .data(map.features)
      .join("path")
      .attrs({
        class : "country"
      })
      .on("click", function(selected) {
        setSelector(
          selector => ({
            ...selector,
            feature : selected === selector.feature
              ? null
              : selected
          })
        );
        event.current = "click";
        select(this).attrs({
          id : "selected"
        });
      })
      .on("mousemove", selected => {
        
        event.current = "hover";
        
        svg
          .selectAll(".legend")
          .remove();
        
        svg
          .selectAll(".legend")
          .data([true])
          .join(() => handleLegend(ref, selected))
          .styles({
            transform : () => {
              const [x, y] = mouse(ref);
              return `translate(${x}px, ${y}px)`;
            }
          });
      })
      .on("mouseleave", () => {
        
        const cleanup = () => {
          svg.selectAll(".legend").remove();
          svg.selectAll("#selected").attr("id", null);
        }
        if (event.current === "click" && selector.feature) {
          setTimeout(cleanup, 4000);
        }
        else {
          cleanup();
        }
      })
      .transition()
      .duration(1000)
      .attrs({
        d : pathGen,
        fill : strategies[selector.strategy]
      });
    
    return () => svg.interrupt()
  },

  handleLegend = (ref, selected) => {
    select(ref)
    .append("g")
    .attrs({
      class : "legend"
    })
    .styles({
      transform : () => {
        const [x, y] = mouse(ref);
        return `translate(${x}px, ${y}px)`;
      }
    })
    .call(parent => {
      [
        {
          format : n => n,
          key : "name"
        },
        {
          format : n => n,
          key : "economy"
        },
        {
          format : n => n,
          key : "income_grp"
        },
        {
          format : n => "Pop : " + (n / 1000000).toFixed(2) + " M",
          key : "pop_est"
        },
        {
          format : n => "GDP : $" + (n / 1000).toFixed(2) + " B",
          key : "gdp_md_est"
        },
        {
          format : n => "GDPpc : $" + n.toFixed(2),
          key : "gdppc"
        }
      ].map((entry, index) => {
        
        const appendText = () => parent
          .append('text')
          .text(entry.format(selected.properties[entry.key]))
          .attrs({
            "pointer-events" : "none",
            x : 8,
            y : index * 16 + 16
          });
        
        appendText()
          .attrs({
            stroke : "white",
            "stroke-width" : 2
          });
        appendText();
        
        return null;
      });
    });
  },
  
  colorScale = (maxProp, colors) => scaleLinear()
    .domain([0, maxProp])
    .range(colors),
  
  strategies = {
    
    handleDevLevel : feature => colorScale(7, ["blue", "#eee"])
      (feature.properties.economy[0]),

    handleGDP : feature => colorScale(maxGDPRef.current, ["#eed", "gold"])
      (feature.properties.gdp_md_est),
    
    handleGDPpc : feature => colorScale(maxGDPpcRef.current, ["#efe", "green"])
      (feature.properties.gdppc),
    
    handleIncomeGroup : feature => colorScale(5, ["orange", "#eed"])
      (feature.properties.income_grp[0]),
    
    handlePop : feature => colorScale(maxPopRef.current, ["#fee", "red"])
      (feature.properties.pop_est),
    
    handleVisited : feature => feature.properties.name === "New Zealand"
      ? "none"
      : visited.includes(feature.properties.name)
        ? "violet"
        : "#eee"
  },
  
  visited = [
    "Belgium",
    "Cambodia",
    "Czech Rep.",
    "Cook Islands",
    "Denmark",
    "France",
    "Fiji",
    "Germany",
    "India",
    "Ireland",
    "Italy",
    "Iceland",
    "Lao PDR",
    "Myanmar",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Norway",
    "Samoa",
    "Singapore",
    "Spain",
    "Sweden",
    "Thailand",
    "United Kingdom",
    "Vietnam"
  ],
  
  event = useRef(),
  maxGDPRef = useRef(),
  maxGDPpcRef = useRef(),
  maxPopRef = useRef(),
  selectRef = useRef(),
  [map, setMap] = useState(),
  [selector, setSelector] = useState({ strategy : "handleVisited" });
  
  useEffect(() => {
    fetch("/Projects/custom.geo.json")
      .then(response => response.json())
      .then(
        result => {
          setMap(result);
          
          maxGDPRef.current = max(
            result.features,
            feature => feature.properties.gdp_md_est
          );
          
          maxGDPpcRef.current = max(
            result.features,
            feature => feature.properties.gdppc = feature
              .properties.gdp_md_est < 0
                ? 0
                : 1000000
                  * feature.properties.gdp_md_est
                  / feature.properties.pop_est
          );
          
          maxPopRef.current = max(
            result.features,
            feature => feature.properties.pop_est
          );
        },
        console.warn
      );
  }, []);
  
  useEffect(() => {
    M.FormSelect.init(selectRef.current, {});
  }, []);
  
  return (
    <section className="accent-bottom panel" id="WorldMap">
      <h2>World Map</h2>
      <Chart data={map} handler={handleMap} selector={selector} />
      <div className="input-field">
        <select
        className="browser-default btn center-content"
        onChange={event => {
          
          const { target : { value }} = event;
          
          setSelector(
            selector => ({
              ...selector,
              strategy : value
            })
          );
        }}
        ref={selectRef}>
          <option value="handleVisited">countries visited</option>
          <option value="handlePop">estimated population</option>
          <option value="handleGDP">estimated GDP</option>
          <option value="handleGDPpc">estimated GDP per capita</option>
          <option value="handleDevLevel">development level</option>
          <option value="handleIncomeGroup">income group</option>
        </select>
      </div>
    </section>
  );
}

const Chart = ({ data, handler, selector }) => {
//todo probably
  const
  
  svgRef = useRef<SVGSVGElement>(null),
  { height, width } = useResizeObserver(svgRef.current);
  
  useEffect(() => {
    if (handler && data && height && width) {
      return handler(data, svgRef.current, selector, height, width)
    }
  }, [data, handler, selector, height, width]);

  return (
    <svg
    ref={svgRef}
    style={{
      height : 480,
      marginTop : 20
    }}>
    </svg>
  );
};