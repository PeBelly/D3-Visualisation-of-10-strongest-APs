// Dimensions of canvas
var margin = {top: 100, right: 50, bottom: 100, left: 50},
    width = 1000 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// Format
var format = d3.format('d');

// Ranges of x-axis
var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], 0.1);

// Ranges of y-axis
var y = d3.scale.linear()
    .range([height, 0]);

// Define the x-axis
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

// Define the y-axis
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(format);

// d3.tip 
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-8, 0])
  .html(function(d) {
    return "SSID: <span>" + d.ssid + "</span>" + "<br/>" + "BSSID: <span>" + d.bssid + "</span>" + "<br/>"  + "RSSI: <span>" + d.rssi + "</span>" + "<br/>" + "CHANNEL: <span>" + d.channel + "</span>";
  })

// Adds the svg
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// d3.tip 
svg.call(tip);

// Get data from temp.tsv
d3.tsv("./tsv/temp.tsv", type, function(error, data) {
  
  // Scale the range of the data
  x.domain(data.map(function(d) { return d.zeit; }));
  y.domain([-40, d3.min(data, function(d) { return d.rssi; })]);

  // Add and define the x-axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
      .append("text")
      .attr("y", 18)
      .attr("dx", "940")
      .style("text-anchor", "end")
      .text("TIME");

  // Add and define the y-axis
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "end")
      .attr("y", -35)
      .attr("dy", "30")
      .style("text-anchor", "end")
      .text("RSSI");

  // Add and define the bars
  svg.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.zeit); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.rssi); })
      .attr("height", function(d) { return height - y(d.rssi); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)

});

function type(d) {
  d.rssi = +d.rssi;
  return d;
}