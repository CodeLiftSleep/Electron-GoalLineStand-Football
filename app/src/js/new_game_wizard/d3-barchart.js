(function() {
    'use strict';
    angular
        .module('routerApp')
        .directive('barsChart', function($parse) {
            return {
                restrict: 'E',
                replace: false,
                scope:{
                    data: '=data'
                },
                link: function(scope, element, attrs) {
                    var svg = d3.select(element[0])
                        .append("svg")
                        .style("width", 200)
                        .style("height", 130),
                        margin = {
                            top: 20,
                            right: 20,
                            bottom: 30,
                            left: 80
                        },
                        width = 100,
                        height = 130;

                    var x = d3.scaleLinear().domain([0, 100]).range([0, 100]);
                    var y = d3.scaleBand().range([height, 0]);

                    var g = svg.append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                    scope.data.sort(function(a, b) {
                        return a.value - b.value;
                    });

                    x.domain([0, d3.max(scope.data, function(d) {
                        return d.value;
                    })]);

                    y.domain(scope.data.map(function(d) {
                        return d.area;
                    })).padding(0.1);

                    g.append("g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + height + ")")
                        .call(d3.axisBottom(x).ticks(5).tickFormat(function(d) {
                            return parseInt(d);
                        }).tickSizeInner([-height]));

                    g.append("g")
                        .attr("class", "y axis")
                        .call(d3.axisLeft(y));

                    var bar = g.selectAll(".bar")
                        .data(scope.data)
                        .enter();

                    bar.append("rect")
                      .attr("class", "bar")
                        .attr("x", 0)
                        .attr("height", y.bandwidth())
                        .attr("y", function(d) {
                            return y(d.area);
                        })
                        .attr("width", function(d) {
                            return x(d.value);
                        })
                    bar.append("text")
                      .attr("class", "label")
                      .attr("y", function(d) { return y(d.area)+20; })
                      .attr("x", function(d) {
                          return x(d.value) -15;
                      })
                      .text(function(d){  return d.value;})

                }
            };
        })
})();
