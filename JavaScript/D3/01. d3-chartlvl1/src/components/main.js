import React, { Component } from 'react';
// import d3 from 'd3';
class D3 extends Component {
  componentDidMount(){
    let d3 = window.d3;

    d3.csv("https://s3.us-east-2.amazonaws.com/test-621/data/ages.csv").then(function(data){
      
      for(let element of data) {
        element.age = parseInt(element.age);
      }
      
      let svg = d3.select('#chart-area').append('svg')
        .attr("width", 400)
        .attr("height", 400);

      let circles = svg.selectAll("circle")
        .data(data)

        circles.enter()
          .append("circle")
            .attr("cx", function(item, index){
              // console.log(`Item: ${item} and index: ${index}`)
              return (index * 50) + 25;
            })
            .attr("cy", 25)
            .attr("r", function(item, index) {
              return item.age * 2;
            })
            .attr("fill", function(item){
              if(item.name === 'Tony') {
                return "blue";
              }
              else {
                return "red";
              }
            })
    }).catch(function(error){
      console.log(error)
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