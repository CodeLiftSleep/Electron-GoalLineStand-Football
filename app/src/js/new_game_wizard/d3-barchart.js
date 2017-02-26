(function() {
    'use strict';
    angular
        .module('routerApp')
        .directive('barsChart', function($parse) {
            return {
                restrict: 'E',
                replace: false,
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
                        height = 100;

                    var x = d3.scaleLinear().range([0, width]);
                    var y = d3.scaleBand().range([height, 0]);

                    var g = svg.append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                    var data = [{
                            "area": "Offense",
                            "value": 80
                        },
                        {
                            "area": "Defense",
                            "value": 98
                        },
                        {
                            "area": "Special",
                            "value": 79
                        }
                    ]


                    data.sort(function(a, b) {
                        return a.value - b.value;
                    });

                    x.domain([0, d3.max(data, function(d) {
                        return d.value;
                    })]);
                    y.domain(data.map(function(d) {
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

                    g.selectAll(".bar")
                        .data(data)
                        .enter().append("rect")
                        .attr("class", "bar")
                        .attr("x", 0)
                        .attr("height", y.bandwidth())
                        .attr("y", function(d) {
                            return y(d.area);
                        })
                        .attr("width", function(d) {
                            return x(d.value);
                        })

                }
            };
        })
})();
