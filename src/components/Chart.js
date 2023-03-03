import React,{useEffect, useRef, useState} from 'react'
import * as d3 from 'd3';
import {fetchTask} from '../api/FetchApi'
const Chart = () => {
    const [data,setData]=useState([10.34,23,5,12,28])
    console.log(data);
    useEffect(()=>{
    fetchTask().then(task=>setData(task))
    chartf();
    },[]);
    const svgRef=useRef()
    const chartf=()=>{
      // fetchTask().then(task=>setData(task));
       const width=300;
       const height=200;
       const svg=d3.select(svgRef.current).attr('width',width).attr('height',height)
       .style('overflow','visible')
       .style('margin-top','20px');
       const xScale=d3.scaleBand()
       .domain(data.map((val,i)=>i)).range([0,width])
       .padding(.5);

       const yScale=d3.scaleLinear()
       .domain([0,40]).range([height,0])
    
       const xAxis=d3.axisBottom(xScale)
       .ticks(data.length);
       const yAxis=d3.axisLeft(yScale)
       .ticks(5)
       svg.append('g').call(xAxis).attr('transform',`translate(0,${height})`);
       svg.append('g').call(yAxis);

       svg.selectAll('.bar').data(data).join('rect')
       .attr('x',(v,i)=>xScale(i))
       .attr('y',yScale).attr('width',xScale.bandwidth())
       .attr('height',val=>height-yScale(val))
    }
  return (
    <svg ref={svgRef} className='chart'>
      
    </svg>
  )
}

export default Chart
