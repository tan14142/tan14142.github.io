import React, { useEffect, useRef, useState } from 'react';
import { axisBottom, max, min, scaleLinear, scaleTime, select } from 'd3';
import M from 'materialize-css';
import 'd3-selection-multi';

const BreakingBadAPI = () => {
  
  const selectRef = useRef(),
        [episodes, setEpisodes] = useState([]),
        [characters, setCharacters] = useState([]),
        [highlight, setHighlight] = useState();
  
  useBreakingBadAPI(
    'episodes?series',
    episodes => {
      let reduced = {};
      
      for (const key in episodes) {
        for (const character in episodes[key].characters) {
          if (episodes[key].characters[character].length
          && ![
            'fly',
            'Erhmantraut',
            'White White'
            ].some(substring => episodes[key].characters[character]
              .includes(substring)
            )
          ) {
            reduced[episodes[key].characters[character]] = null;
          }
        }
      }
      
      let characters = [];
      
      for (const character in reduced) {
        characters.push(character);
      }
      
      characters.sort();
      
      setCharacters(characters);
      setEpisodes(episodes);
    }
  );
  useEffect(() => {
    M.FormSelect.init(selectRef.current, {});
  }, []);
  
  return (
    <section className="panel center">
      <h2>Breaking Bad Timeline</h2>
      <Timeline episodes={episodes} highlight={highlight} />
      <div className="input-field">
        <select
        className="browser-default btn center-content"
        defaultValue="0"
        value={highlight}
        onChange={e => setHighlight(e.target.value)}
        ref={selectRef}>
          <option disabled value="0">Choose your character</option>
          {characters.map(character => (
          <option key={character} value={character}>{character}</option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default BreakingBadAPI;

const Timeline = ({ episodes, highlight }) => {
  
  const svgRef = useRef();
  
  useEffect(() => {
    
    const height = svgRef.current.clientHeight,
          width = svgRef.current.clientWidth,
    
          maxDate = max(episodes, episode => getDate(episode.air_date)),
          minDate = min(episodes, episode => getDate(episode.air_date)),

          xScale = scaleTime()
            .domain([minDate, maxDate])
            .range([0, width]),
          yScale = scaleLinear()
            .domain([max(episodes, episode => episode.characters.length), 0])
            .range([0 , height]),
          
          xAxis = axisBottom(xScale),
          
          svg = select(svgRef.current);
          
    svg
      .selectAll('.xAxis')
      .call(xAxis)
      .styles({
        transform : `translateY(${height}px)`
      });
    
    svg
      .selectAll('.episode')
      .data(episodes)
      .join('line')
      .attrs({
        class : 'episode',
        x1 : episode => xScale(getDate(episode.air_date)),
        x2 : episode => xScale(getDate(episode.air_date)),
        y1 : height,
        y2 : height
      })
      .transition()
      .attrs({
        stroke : episode => {
          return episode.characters.includes(highlight)
          ? 'blue'
          : 'black'
        },
        y2 : episode => yScale(episode.characters.length)
      });

    return () => svg.interrupt();

  }, [episodes, highlight]);
  
  return (
    <svg
    ref={svgRef}
    style={{
      borderRight: '2rem solid transparent',
      borderTop: '1rem solid transparent',
      overflow : 'visible'
    }}>
      <g className="xAxis" />
    </svg>
  );
}

const getDate = date => {
  date = date.split('-');
  return new Date(date[2], date[0] - 1, date[1]);
};

const useBreakingBadAPI = (query, callback) => {
  
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  
  useEffect(() => {
    
    const controller = new AbortController(),
          signal = controller.signal;

    fetch(
      'https://www.breakingbadapi.com/api/' + query + '=Breaking+Bad',
      {signal})
      .then(response => response.ok && response.json())
      .then(savedCallback.current)
      .catch(e => {
        if (e.name === 'AbortError') {
          console.log('Fetch was aborted');
        } else {
          console.warn(e);
        }
      });
    
    return () => controller.abort();
  }, [query]);
};