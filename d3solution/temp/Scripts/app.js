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

function drawSubwayWaits(data) {
    "use strict";
    //
    // First, we specify two sets of dimensions: the dimensions of the SVG container and then 
    // the dimensions of the chart itself. The point here is that we build the chart inside an 
    // SVG group with enough space around the edges of the group for the axis and axis labels to 
    // live in, avoiding annoying corrections later on in the script. Having set up the dimensions, 
    // we add an SVG element to the page, then a group element, which is translated right and down 
    // by the appropriate number of pixels.
    //
    // We have also assigned a selection to a variable for the first time. Each append returns the 
    // D3 selection of that element, so here we are assigning the selection of the g element to the 
    // chart variable. This avoids having to continually reselect the chart group to hang new 
    // elements from it.
    //
    var container_dimensions = { width: 900, height: 400 },
        margins = { top: 10, right: 20, bottom: 30, left: 60 },
        chart_dimensions = {
            width: container_dimensions.width - margins.left - margins.right,
            height: container_dimensions.height - margins.top - margins.bottom
        };

    var chart = d3.select("#timeseries")
        .append("svg")
            .attr("width", container_dimensions.width)
            .attr("height", container_dimensions.height)
        .append("g")
            .attr("transform", "translate(" + margins.left + "," + margins.top + ")")
            .attr("id", "chart");
    // 
    // Next, we need to set up scales and axes, which we do as usual. The one difference 
    // here is that we are manually setting the domains of the scales rather than using the 
    // extent of the data set. In this case we know the domains ahead of time, and want to 
    // frame all the different time series nicely:
    //
    var time_scale = d3.time.scale()
        .range([0, chart_dimensions.width])
        .domain([new Date(2008, 0, 1), new Date(2011, 3, 1)]);

    var percent_scale = d3.scale.linear()
        .range([chart_dimensions.height, 0])
        .domain([65, 90]);

    var time_axis = d3.svg.axis()
        .scale(time_scale);

    var count_axis = d3.svg.axis()
        .scale(percent_scale)
        .orient("left");

    chart.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + chart_dimensions.height + ")")
        .call(time_axis);

    chart.append("g")
        .attr("class", "y axis")
        .call(count_axis);

    d3.select(".y.axis")
        .append("text")
            .attr("text-anchor", "middle")
            .text("percent on time")
            .attr("transform", "rotate (-270, 0, 0)")
            .attr("x", container_dimensions.height / 2)
            .attr("y", 50);
    //
    // Next we need to build the key. For this we will use the summary JSON and iterate through 
    // in much the same way as we did for the bar chart in Chapter 2. Note that the draw function 
    // is called with this summary JSON file as its data variable. We first append the div.key_line 
    // tags and store the resulting selection in a variable:
    //
    var key_items = d3.select("#key")
        .selectAll("div")
        .data(data)
        .enter()
        .append("div")
            .attr("class", "key_line")
            .attr("id", function (d) { return d.Id }); 
    //
    // Note that each div has the same class but a unique ID. The key_items variable now stores 
    // the selection of all the elements of class .key_line with their associated data. Using this 
    // variable it becomes easy to hang the .key_square and .key_label elements from each key_line 
    // element:
    //
    key_items.append("div")
        .attr("id", function (d) { return "key_square_" + d.Id }) 
       .attr("class", "key_square");
        
    key_items.append("div")
        .attr("class","key_label")
        .text(function (d) { return d.Name }); 
}