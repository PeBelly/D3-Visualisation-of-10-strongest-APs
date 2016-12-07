 d3.text("./tsv/temp.tsv", function(data) {
    var parsedTSV = d3.tsv.parseRows(data);

    var container = d3.select("body")
        .append("table")

        .selectAll("tr")
            .data(parsedTSV).enter()
            .append("tr")


        .selectAll("td")
            .data(function(d) { return d; }).enter()
            .append("td")
            .text(function(d) { return d; });

    });