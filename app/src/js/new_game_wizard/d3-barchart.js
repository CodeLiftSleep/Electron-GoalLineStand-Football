(function() {
    'use strict';
    angular
        .module('routerApp')
        .directive('barsChart', function($parse) {
            return {
                restrict: 'E',
                replace: false,
                scope: {
                    data: '=data'
                },
                link: function(scope, element, attrs) {

                  var margin = {top: 20, right: 20, bottom: 30, left: 40},
                      width = 200 - margin.left - margin.right,
                      height = 150 - margin.top - margin.bottom;

                    var svg = d3.select(element[0])
                        .append("svg")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                        .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                          // set the ranges
                      var x = d3.scaleBand()
                                .range([0, width])
                                .padding(0.1);
                      var y = d3.scaleLinear()
                                .range([height, 0]);

                      x.domain(scope.data.map(function(d) { return d.area; }));
                      y.domain([0, d3.max(scope.data, function(d) { return d.value; })]);


                      svg.append("g").attr("id","bar").selectAll(".bar")
                        .data(scope.data)
                      .enter().append("rect")
                        .attr("class", "bar")
                        .attr("x", function(d) { return x(d.area); })
                        .attr("width", x.bandwidth())
                        .attr("y", function(d) { return y(d.value); })
                        .attr("height", function(d) { return height - y(d.value); });

                        // add the x Axis
                      svg.append("g")
                          .attr("transform", "translate(0," + height + ")")
                          .call(d3.axisBottom(x));

                      // add the y Axis
                      svg.append("g")
                          .call(d3.axisLeft(y));

                      svg.select("#bar").selectAll("text")
                         .data(scope.data)
                         .enter()
                         .append('text')
                         .text(function(d) {return d.value;})
                         .attr("x", function(d, i) {
                              return i * (width / scope.data.length) + 15;
                         })
                         .attr("y", function(d) { return y(d.value) + 20 })
                         .attr("fill", "white")

                }
            };
        })
})();
