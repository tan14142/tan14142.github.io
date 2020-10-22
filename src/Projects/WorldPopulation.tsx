import React, { useEffect, useRef, useState } from 'react';
import { axisBottom, scaleLinear, scaleBand, select } from 'd3';
import 'd3-selection-multi';
import useFetch from '../Hooks/useFetch';
import transformCSV from './WorldPopulation/transformCSV';

export default () => {
  
  const startYear = 1960,
        { data, ready } = useFetch(
          '/Projects/WorldPopulation.csv',
          transformCSV
        ),
        [year, setYear] = useState(startYear),
        [timer, setTimer] = useState();
  
  useTimer(() => {
    if (year < data.length - 1) {
      setYear(year + 1);
    }
    else {
      timer.setActive(false);
    }
  }, setTimer);

  return ready
    ? (
    <section className="accent-bottom panel center">
      <h2>World Population by Region</h2>
      <h4>and global urbanization since 1960</h4>
      <p>Rural | Urban</p>
      <RacingBars
      dataSlice={data[year]}
      wMax={getTotal(data[data.length - 1][data[year].length - 1])} />
      <form
      action="#"
      style={{ marginBottom: "1rem" }}>
        <p className="range-field">
          <input
          id="range"
          max={data.length - 1}
          min={startYear}
          onChange={e => {
            timer.setActive(false);
            setYear(+e.target.value);
          }}
          value={year}
          type="range" />
        </p>
        <label htmlFor="range" style={{
          position : 'relative',
          top : '-20px'
        }}>{year}</label>
        <br />
        <button
        className={!timer.active && year < data.length - 1 ? "btn waves-effect" : "hide"}
        onClick={e => {
          e.preventDefault();
          timer.interval(100);
        }}>
          run
        </button>
        <button
        className={year < data.length - 1 && timer.active ? "btn waves-effect" : "hide"}
        onClick={e => {
          e.preventDefault();
          timer.setActive(false);
        }}>
          pause
        </button>
        <button
        className={year === data.length - 1 ? "btn waves-effect" : "hide"}
        onClick={e => {
          e.preventDefault();
          setYear(startYear);
        }}>
          reset
        </button>
      </form>
    </section>
    )
    : null;
};

const RacingBars = ({ dataSlice, wMax }) => {
  
  const svgRef = useRef();
  
  useEffect(() => {

    const height = 200,
          width = svgRef.current.clientWidth,
          
          aScale = scaleLinear()
            .domain([0, wMax / 3])
            .range([-.5, width]),
          
          xAxis = axisBottom(aScale)
            .tickFormat(x => x / 1000000 + 'M')
            .ticks(5),
          
          svg = select(svgRef.current);

    svg
      .transition()
      .duration(500)
      .styles({
        height : height + 'px',
        opacity : 1
      });
    
    svg
      .select('.xAxis')
      .call(xAxis)
      .styles({
        transform : `translateY(${ height - 2 }px)`
      });

    svg
      .selectAll('.xAxis > .domain, .xAxis > .tick:last-child')
      .remove();

    svg
      .selectAll('.tick > line')
      .styles({
        fill : 'red',
        opacity : 1 / 3,
        transform : `translateY(-${height - 10}px) scale(1, ${height / 6 - .5})`
      });

    return () => svg.interrupt();
  }, [wMax]);

  useEffect(() => {

    const height = 200,
          width = svgRef.current.clientWidth,
          regions = dataSlice.slice(0, dataSlice.length - 1),
          world = dataSlice[dataSlice.length - 1],
          
          xScale = scaleLinear()
            .domain([0, wMax / 3])
            .range([0, width]),
          
          yScale = scaleBand()
            .padding(1 / 3)
            .domain(new Array(regions.length)
              .fill(null)
              .map((value, index) => index)
            )
            .range([0, height]),
          
          wScale = scaleLinear()
            .domain([0, wMax])
            .range([height, yScale.bandwidth() / 2]),
          
          svg = select(svgRef.current);

    [
      '#66c2a5',
      '#fc8d62',
      '#8da0cb',
      '#e78ac3',
      '#a6d854',
      '#ffd92f',
      '#e5c494'
    ].map((color, index) => regions[index][Object.keys(regions[index])[0]].color = color)

    regions.sort((a, b) => getTotal(b) - getTotal(a));
    
    svg
      .selectAll('.region')
      .data(regions, region => Object.keys(region)[0])
      .join('rect')
      .attrs({
        class : 'region',
        fill : region => Object.values(region)[0].color,
        stroke : 'black',
        height : yScale.bandwidth(),
        x : 0
      })
      .transition()
      .duration(100)
      .attrs({
        width : region => xScale(getTotal(region)),
        y : (region, index) => yScale(index)
      });

    svg
      .selectAll('.regionRural')
      .data(regions, region => Object.keys(region)[0])
      .join('rect')
      .attrs({
        class : 'regionRural',
        fill : 'none',
        stroke : 'black',
        'stroke-opacity' : .25,
        height : yScale.bandwidth()
      })
      .transition()
      .duration(100)
      .attrs({
        width : .1,
        x : (region, index) => xScale(getTotal(region)) * Object.values(region)[0].Rural / 100,
        y : (region, index) => yScale(index)
      });
    
    svg
      .selectAll('.world')
      .data([world])
      .join('rect')
      .attrs({
        class : 'world',
        width : yScale.bandwidth() * 3,
        x : width - yScale.bandwidth() * 4
      })
      .transition()
      .duration(100)
      .attrs({
        height : entry => height - wScale(getTotal(entry)),
        y : entry => wScale(getTotal(entry))
      });
    
    svg
      .selectAll('.label')
      .data(regions, region => Object.keys(region)[0])
      .join('text')
      .text(region => Object.keys(region)[0])
      .attrs({
        class : 'label',
        'font-size' : 8,
        x : 0,
        y : (region, index) => yScale(index) - 2
      });
   
    svg
      .selectAll('.total')
      .data(regions, region => Object.keys(region)[0])
      .join('text')
      .text(region => parseInt(getTotal(region) / 1000000) + 'M')
      .attrs({
        class : 'total',
        'font-size' : 8,
        x : 4,
        y : (region, index) => yScale(index) + yScale.bandwidth() * 2 / 3
      });

    svg
      .selectAll('.worldLabel')
      .data([world])
      .join('text')
      .text('Total')
      .attrs({
        class : 'worldLabel',
        'font-size' : 8,
        x : width - yScale.bandwidth() * 3
      })
      .transition()
      .duration(100)
      .attrs({
        y : entry => wScale(getTotal(entry)) - 2
      });

    svg
      .selectAll('.worldTotal')
      .data([world])
      .join('text')
      .text(world => parseInt(getTotal(world) / 1000000) + 'M')
      .attrs({
        class : 'worldTotal',
        fill : 'white',
        'font-size' : 8,
        x : width - yScale.bandwidth() * 3.15
      })
      .transition()
      .duration(100)
      .attrs({
        y : entry => wScale(getTotal(entry)) + yScale.bandwidth() * 3 / 5
      });
    
    return () => svg.interrupt();
  }, [dataSlice, wMax]);
  
  return (
    <svg
    ref={svgRef}
    style={{
      borderBottom : '2px solid black',
      height : 0,
      marginTop : 20,
      opacity : 0,
      overflow : 'visible'
    }}>
      <g className="xAxis" />
    </svg>
  );
};

const getTotal = obj => +Object.values(obj)[0].Total;

const useTimer = (callback, setter) => {
  
  const callbackRef = useRef(),
        setterRef = useRef(),
        timerRef = useRef();

  const clear = () => {
    clearInterval(timerRef.current);
    clearTimeout(timerRef.current);
  };
  
  const tick = () => callbackRef.current();

  useEffect(() => {
    callbackRef.current = callback;
    setterRef.current = setter;
  }, [callback, setter]);

  useEffect(() => {
    
    const props = {
      active : false,
      setActive : bool => {
        props.active && !bool && clear();
        setterRef.current(state => ({ ...state, active : props.active = bool }));
      },
      interval : delay => {
        timerRef.current = setInterval(tick, delay);
        props.setActive(true);
      },
      timeout : delay => {
        timerRef.current = setTimeout(tick, delay);
        props.setActive(true);
      }
    };
    setterRef.current(props);
    
    return clear;
  }, []);
};