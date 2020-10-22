import React, { useEffect, useRef, useState } from 'react';
import { axisBottom, axisLeft, curveCardinal, line, scaleBand, scaleLinear, select } from 'd3';
import 'd3-selection-multi';
import './ReactD3/Style.scss';

export default () => {
  
  const
  [data1, setData1] = useState([1, 2, 4, 8, 12, 16, 20, 24]),
  [data2, setData2] = useState(data1),
  [data3, setData3] = useState(data1),
  margin = 20,
  svg1 = useRef(),
  svg2 = useRef(),
  svg3 = useRef();
  
  useEffect(() => {
    
    const
    svg = select(svg1.current),
    padding = 10,
    max = Math.max(...data1) + padding;
          
    let offsetX = 20;
    
    const drawCircle = strat => strat
      .attr('r', value => value)
      .attr('cx', value => {
        offsetX += value * 2 + padding;
        return offsetX - value; 
      })
      .attr('cy', max);
    
    svg.attrs({
      height : max * 2,
      margin : margin,
      width : 300
    });

    svg
      .selectAll('circle')
      .data(data1)
      .join(
        enter => drawCircle(
          enter
          .append('circle')
          .attr('fill', 'white')
          .attr('stroke', 'black')
        ),
        update => drawCircle(
          update
          .transition()
          .duration(500)
        )
      );
    
    return () => svg.interrupt();
  }, [data1]);
  
  useEffect(() => {
    
    const 
    max = Math.max(...data2),
    beautified = beautifyMax(max),
    svg = select(svg2.current),
    padding = 20,
    xUnit = 50,
    yUnit = 4,
          
    xScale = scaleLinear()
      .domain([0, data2.length - 1])
      .range([padding, (data2.length - 1) * xUnit + padding])
    ,
    yScale = scaleLinear()
      .domain([0, beautified])
      .range([beautified * yUnit + padding, padding])
    ,
    xAxis = axisBottom(xScale).ticks(data2.length),
    yAxis = axisLeft(yScale).ticks(+max.toString()[0] + 1),
    
    drawPath = strat => strat
      .attr('d', line()
        .x((value, index) => xScale(index))
        .y(yScale)
        .curve(curveCardinal)
      );

    svg
      .select('.xAxis')
      .call(xAxis)
      .style('transform', `translateY(${ yScale(0) }px)`);

    svg
      .select('.yAxis')
      .call(yAxis)
      .style('transform', `translateX(${ padding }px)`);
    
    svg
      .attrs({
        height : yScale(0) + padding,
        margin : margin,
        width : xScale(data2.length - 1) + padding
      })
      .selectAll('.path')
      .data([data2])
      .join(
        enter => drawPath(
          enter
          .append('path')
          .attrs({
            class : 'path',
            fill : 'none',
            stroke : 'blue'
          })
        ),
        update => drawPath(
          update
          .transition()
          .duration(500)
        )
      );
    
    return () => svg.interrupt();
  }, [data2]);
  
  useEffect(() => {
    
    const
    max = Math.max(...data3),
    beautified = beautifyMax(max),
    svg = select(svg3.current),
    padding = 20,
    xUnit = 50,
    yUnit = 4,
    
    colorScale = scaleLinear()
      .domain([4, 12, 20])
      .range(['green', 'orange', 'red'])
      .clamp(true),
    
    xScale = scaleBand()
      .domain(data3.map((value, index) => index))
      .range([padding, (data3.length - 1) * xUnit + padding])
      .padding(.5)
    ,
    yScale = scaleLinear()
      .domain([0, beautified])
      .range([beautified * yUnit + padding, padding])
    ,
    xAxis = axisBottom(xScale).ticks(data3.length),
    yAxis = axisLeft(yScale).ticks(+max.toString()[0] + 1),

    drawRect = strat => strat
      .attrs({
        fill : colorScale,
        height : value => value * yUnit,
        x : (value, index) => xScale(index),
        y : yScale
      });
    
    svg
      .select('.xAxis')
      .call(xAxis)
      .style('transform', `translateY(${ yScale(0) }px)`);

    svg
      .select('.yAxis')
      .call(yAxis)
      .style('transform', `translateX(${ padding }px)`);
    
    svg
      .attrs({
        height : yScale(0) + padding,
        margin : margin,
        width : (data3.length - 1) * xUnit + padding * 2
      })
      .selectAll('.bar')
      .data(data3)
      .join(
        enter => drawRect(
          enter
          .append('rect')
          .attrs({
            class : 'bar',
            width : xScale.bandwidth()
          })
        ),
        update => drawRect(
          update
          .transition()
          .duration(500)
        )
      )
      .on('mouseenter', (value, index) => {
        svg
          .selectAll('.tooltip')
          .data([value])
          .join(enter => enter
            .append('text')
            .attrs({
              class : 'tooltip',
              'font-size' : 12,
              'text-anchor' : 'middle',
              x : xScale(index) + xScale.bandwidth() / 2,
              y : yScale(value)
            })
          )
          .transition()
          .attrs({
            opacity : .8,
            y : yScale(value) - 4
          })
          .text(value)
      })
      .on('mouseleave', () => svg
        .selectAll('.tooltip')
        .remove()
      );
    
    return () => svg.interrupt();
  }, [data3]);

  function beautifyMax(max) {
    
    let
    maxArr = max.toString().split(''),
    ceil = ++maxArr[0];

    maxArr.fill(0);
    maxArr[0] = ceil;
    return +maxArr.join('');
  }

  function shuffle(array) {
    
    let
    currentIndex = array.length,
    randomIndex,
    temporaryValue,
    tempArr = array.slice();
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = tempArr[currentIndex];
      tempArr[currentIndex] = tempArr[randomIndex];
      tempArr[randomIndex] = temporaryValue;
    }
    return tempArr;
  }

  return (
    <>
      <section className="accent-bottom center-content panel">
        <h2>Circles</h2>
        <svg
        className="width100"
        ref={svg1} />
        <button
        className="btn ReactD3-el waves-effect"
        onClick={() => setData1(shuffle(data1))}>
          shuffle
        </button>
      </section>
      <section className="accent-bottom center-content panel">
        <h2>Line Chart</h2>
        <svg
        className="width100"
        ref={svg2}
        style={{
          borderRight: "2rem solid transparent",
        }}>
          <g className="xAxis" />
          <g className="yAxis" />
        </svg>
        <button
        className="btn ReactD3-el waves-effect"
        onClick={() => setData2(shuffle(data2))}>
          shuffle
        </button>
      </section>
      <section className="accent-bottom center-content panel">
        <h2>Bar Chart</h2>
        <svg
        className="width100"
        ref={svg3}
        style={{
          borderRight: "2rem solid transparent",
        }}>
          <g className="xAxis" />
          <g className="yAxis" />
        </svg>
        <button
        className="btn ReactD3-el waves-effect"
        onClick={() => setData3(shuffle(data3))}>
          shuffle
        </button>
      </section>
    </>
  );
};