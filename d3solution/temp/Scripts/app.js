/// <reference path="d3.v3.js" />

function drawServiceStatus(data) {
    "use strict";

    d3.select("body")
        .append("ul")
        .selectAll("li")
        .data(data)
        .enter()
        .append("li")
            .text(function (d) { return d.Name + ": " + d.Status; });

    d3.selectAll("li")
        .style("font-weight", function (d) {
            if (d.Status == "GOOD SERVICE") {
                return "normal";
            } else {
                return "bold";
            }
        });
}

function drawDailyPlazaTraffic(data) {
    "use strict";

    d3.select("body")
        .append("div").attr("class", "chart")
        .selectAll(".bar")
        .data(data)
        .enter()
        .append("div")
            .attr("class", "bar")
            .style("width", function (d) { return d.Count / 100 + "px" })
            .text(function (d) { return Math.round(d.Count) });
}

function drawDailyPlazaTrafficRedux(data) {
    "use strict";

    d3.select("body")
        .append("div").attr("class", "chart")
        .selectAll("div.line")
        .data(data)
        .enter()
        .append("div")
            .attr("class", "line");

    d3.selectAll("div.line")
        .append("div").attr("class", "label")
        .text(function (d) { return d.Name });

    d3.selectAll("div.line")
        .append("div").attr("class", "bar")
        .style("width", function (d) { return d.Count / 100 + "px" })
        .text(function (d) { return Math.round(d.Count) });
}

function drawBusCollisions(data) {
    "use strict";

    var margin = 50,
        width = 700,
        height = 300;

    d3.select("body")
        .append("svg")
            .attr("width", width)
            .attr("height", height)
        .selectAll("circle")
        .data(data)
        .enter()
        .append("circle");

    var x_extent = d3.extent(data, function (d) {
        return d.CollisionWithInjury
    });

    var x_scale = d3.scale.linear()
        .range([margin, width - margin])
        .domain(x_extent);

    var y_extent = d3.extent(data, function (d) {
        return d.DistanceBetweenFailures
    });

    var y_scale = d3.scale.linear()
        .range([height-margin, margin])
        .domain(y_extent);

    d3.selectAll("circle")
        .attr("cx", function (d) { return x_scale(d.CollisionWithInjury) })
        .attr("cy", function (d) { return y_scale(d.DistanceBetweenFailures) });

    d3.selectAll("circle")
        .attr("r", 5);

    var x_axis = d3.svg.axis().scale(x_scale);

    d3.select("svg")
        .append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + (height - margin) + ")")
        .call(x_axis);

    var y_axis = d3.svg.axis().scale(y_scale).orient("left");

    d3.select("svg")
      .append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + margin + ", 0 )")
      .call(y_axis);

    d3.select(".x.axis")
        .append("text")
            .text("collisions with injury (per million miles)")
            .attr("x", (width / 2) - margin)
            .attr("y", margin / 1.5);

    d3.select(".y.axis")
        .append("text")
        .text("mean distance between failure (miles)")
        .attr("transform", "rotate (-90, -43, 0) translate(-280)");
}

function drawStationTurnstiles(data) {
    "use strict";

    var margin = 50,
    width = 700 - margin,
    height = 300 - margin;

    var count_extent = d3.extent(
        data[0].TurnstileTraffics.concat(data[1].TurnstileTraffics),
        function (d) { return d.Count }
    );

    var time_extent = d3.extent(
        data[0].TurnstileTraffics.concat(data[1].TurnstileTraffics),
        function (d) { return d.Time }
    );

    var count_scale = d3.scale.linear()
        .domain(count_extent)
        .range([height, margin]);

    var time_scale = d3.time.scale()
        .domain(time_extent)
        .range([margin, width]);

    var time_axis = d3.svg.axis()
        .scale(time_scale);

    var count_axis = d3.svg.axis()
        .scale(count_scale)
        .orient("left");

    var line = d3.svg.line()
       .x(function (d) { return time_scale(d.Time) })
       .y(function (d) { return count_scale(d.Count) })
       .interpolate("linear");

    d3.select("body")
      .append("svg")
        .attr("class", "chart")
        .attr("width", width + margin)
        .attr("height", height + margin);
    
    d3.select('svg')
      .append('path')
        .attr('d', line(data[0].TurnstileTraffics))
        .attr('class', 'times_square')

    d3.select('svg')
      .append('path')
        .attr('d', line(data[1].TurnstileTraffics))
        .attr('class', 'grand_central')

    d3.select("svg")
        .selectAll("circle.times_square")
        //.data(data.times_square)
        .data(data[0].TurnstileTraffics)
        .enter()
        .append("circle")
            .attr("class", "times_square");

    d3.select("svg")
        .selectAll("circle.grand_central")
        //.data(data.grand_central)
        .data(data[1].TurnstileTraffics)
        .enter()
        .append("circle")
            .attr("class", "grand_central");

    d3.selectAll("circle")
        .attr("cy", function (d) { return count_scale(d.Count); })
        .attr("cx", function (d) { return time_scale(d.Time); })
        .attr("r", 3);

    d3.select("svg")
        .append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
        .call(time_axis);

    d3.select("svg")
        .append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + margin + ",0)")
        .call(count_axis);

    d3.select('.y.axis')
        .append('text')
        .text('mean number of turnstile revolutions')
        .attr('transform', "rotate (90, " + -margin + ", 0)")
        .attr('x', 20)
        .attr('y', 0)

    d3.select('.x.axis')
      .append('text')
        .text('time')
        .attr('x', function () { return (width / 1.6) - margin })
        .attr('y', margin / 1.5)
}