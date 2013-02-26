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

//
// Nasty globals used by drawSubwayWaits() and drawTimeseries()
//
var time_scale,
    percent_scale;

function get_timeseries_data(d, i) {
    var id = "Line_" + d.Id;
    var ts = d3.select("#" + id);

    if (ts.empty()) {
        draw_timeseries(d.SubwayLineWaits, id);
    } else {
        ts.remove();
    }
}

function draw_timeseries(data, id) {

    var line = d3.svg.line()
        .x(function (d) {
            return time_scale(d.Time)
        })
        .y(function (d) {
            return percent_scale(d.LatePercent)
        })
        .interpolate("linear");

    var g = d3.select('#chart')
        .append('g')
        .attr('id', id)
        .attr('class', 'timeseries ' + id)

    g.append('path')
        .attr('d', line(data))

    g.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
            .attr("cx", function (d) { return time_scale(d.Time) })
            .attr("cy", function (d) { return percent_scale(d.LatePercent) })
            .attr("r", 0);

    var enter_duration = 2000;

    g.selectAll('circle')
        .transition()
        .delay(function (d, i) {
            return i / data.length * enter_duration;
        })
        .attr('r', 5);

    g.selectAll("circle")
        .on("mouseover", function (d) {
            d3.select(this)
                .transition()
                .attr("r", 9);
        })
        .on("mouseout", function (d) {
            d3.select(this)
                .transition()
                .attr("r", 5);
        });

    g.selectAll("circle")
        .on("mouseover.tooltip", function (d) {
            d3.select("text." + "Line" + d.Id).remove()
            d3.select("#chart")
                .append("text")
                .text(d.LatePercent + "%")
                .attr('x', time_scale(d.Time) + 10)
                .attr('y', percent_scale(d.LatePercent) - 10)
                .attr('class', "Line" + d.Id)
        })
        .on("mouseout.tooltip", function (d) {
            d3.select("text." + "Line" + d.Id)
                .transition()
                .duration(500)
                .style("opacity", 0)
                .attr("transform", "translate(10, -10)")
                .remove()
        })
}

function drawSubwayWaits(data) {
    "use strict";

    var container_dimensions = { width: 900, height: 400 },
        margins = { top: 10, right: 20, bottom: 30, left: 60 },
        chart_dimensions = {
            width: container_dimensions.width - margins.left - margins.right,
            height: container_dimensions.height - margins.top - margins.bottom
        };

    time_scale = d3.time.scale()
        .range([0, chart_dimensions.width])
        .domain([1230789600000, 1301634000000]);

    percent_scale = d3.scale.linear()
        .range([chart_dimensions.height, 0])
        .domain([65, 90]);

    var time_axis = d3.svg.axis()
        .scale(time_scale);

    var count_axis = d3.svg.axis()
        .scale(percent_scale)
        .orient("left");

    var g = d3.select("#timeseries")
        .append("svg")
            .attr("width", container_dimensions.width)
            .attr("height", container_dimensions.height)
        .append("g")
            .attr("transform", "translate(" + margins.left + "," + margins.top + ")")
            .attr("id", "chart");

    g.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + chart_dimensions.height + ")")
        .call(time_axis);

    g.append("g")
        .attr("class", "y axis")
        .call(count_axis);

    d3.select('.y.axis')
        .append('text')
        .text('percent on time')
        .attr('transform', "rotate (-270, 0, 0)")
        .attr('x', 100)
        .attr('y', 50);

    var key_items = d3.select("#key")
        .selectAll("div")
        .data(data)
        .enter()
        .append("div")
            .attr("class", "key_line")
            .attr("id", function (d) { return d.Id + "_key" }); 

    key_items.append("div")
        .attr("id", function (d) { return "key_square_" + d.Id }) 
        .attr("class", function (d) { return "key_square " + d.Id } );
        
    key_items.append("div")
        .attr("class","key_label")
        .text(function (d) { return d.Name });

    d3.selectAll(".key_line")
        .on("click", get_timeseries_data);
}