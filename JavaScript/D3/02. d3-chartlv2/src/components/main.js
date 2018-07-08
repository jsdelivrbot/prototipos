import React, { Component } from 'react';

class D3 extends Component {
  componentDidMount(){
    this.chart();
  }

  chart(){
    let d3 = window.d3;
    let margin = { 
      "left": 100, 
      "right": 10, 
      "top": 10, 
      "bottom": 150 
    };

    let width = 600 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    let group = d3.select("#chart-area")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", `translate(${ margin.left }, ${ margin.top })`);

    // X Label
    group.append("text")
        // .attr("class", "x axis-label")
        .attr("x", width / 2)
        .attr("y", height + 140)
        .attr("font-size", "20px")
        .attr("text-anchor", "middle")
        .text("The world's tallest buildings");

    // Y Label
    group.append("text")
        // .attr("class", "y axis-label")
        .attr("x", - (height / 2))
        .attr("y", -60)
        .attr("font-size", "20px")
        .attr("text-anchor", "middle")
        .attr("transform", "rotate(-90)")
        .text("Height (meter)");

    d3.json("https://s3.us-east-2.amazonaws.com/test-621/data/buildings.json").then(function(data){

        for(let building of data) {
          building.height = parseInt(building.height);
        }

        var x = d3.scaleBand()
            .domain(data.map(building => building.name))
            .range([0, width])
            .paddingInner(0.3)
            .paddingOuter(0.3);

        var y = d3.scaleLinear()
            .domain([0, d3.max(data, building => building.height)])
            .range([height, 0]);

        var xAxisCall = d3.axisBottom(x);
        group.append("g")
            .attr("class", "x axis")
            .attr("transform", `translate(0, ${ height })`)
            .call(xAxisCall)
        .selectAll("text")
            .attr("y", "10")
            .attr("x", "-5")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(-40)");

        var yAxisCall = d3.axisLeft(y)
            .ticks(3)
            .tickFormat(d => d + " m");
        group.append("g")
            .attr("class", "y-axis")
            .call(yAxisCall);

        var rects = group.selectAll("rect")
            .data(data)
        
        rects.enter()
            .append("rect")
                .attr("y", d => y(d.height))
                .attr("x", d => x(d.name))
                .attr("width", x.bandwidth)
                .attr("height", d => height - y(d.height))
                .attr("fill", "grey");

    })
  }
    render() {
      return (
        <div className="container">
          <div className="row">
            <div id="chart-area"></div>
          </div>
        </div>
      );
    }
  }
  
  export default D3;