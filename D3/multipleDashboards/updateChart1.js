// updateChart1.js

// Update Chart1: Daily actual vs. projected values for selected venue.
function updateChart1(venue, data) {
    // Group data by Day.
    let dailyData = d3.groups(data, d => d.Day)
      .map(([day, records]) => {
        let actual, projected;
        if (venue === "total") {
          actual = d3.sum(records, d => d.actual);
          projected = d3.sum(records, d => d.projected);
        } else {
          let filtered = records.filter(d => d.venue === venue);
          actual = d3.sum(filtered, d => d.actual);
          projected = d3.sum(filtered, d => d.projected);
        }
        return { day: day, actual: actual, projected: projected };
      });
    
    // Sort days (assuming ISO date strings sort correctly).
    dailyData.sort((a, b) => a.day.localeCompare(b.day));
    
    // Build a dual-line chart in #chart1.
    let container = d3.select("#chart1");
    container.selectAll("*").remove();
    
    let margin = {top: 20, right: 30, bottom: 40, left: 50},
        width = 600 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;
    
    let svg = container.append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
    
    let x = d3.scaleBand()
        .domain(dailyData.map(d => d.day))
        .range([0, width])
        .padding(0.2);
    
    let y = d3.scaleLinear()
        .domain([0, d3.max(dailyData, d => Math.max(d.actual, d.projected))])
        .nice()
        .range([height, 0]);
    
    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));
    
    svg.append("g")
        .call(d3.axisLeft(y));
    
    // Define lines.
    let lineActual = d3.line()
        .x(d => x(d.day) + x.bandwidth()/2)
        .y(d => y(d.actual));
    
    let lineProjected = d3.line()
        .x(d => x(d.day) + x.bandwidth()/2)
        .y(d => y(d.projected));
    
    svg.append("path")
        .datum(dailyData)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 2)
        .attr("d", lineActual);
    
    svg.append("path")
        .datum(dailyData)
        .attr("fill", "none")
        .attr("stroke", "orange")
        .attr("stroke-width", 2)
        .attr("d", lineProjected);
    
    // Chart title.
    svg.append("text")
        .attr("x", width/2)
        .attr("y", -5)
        .attr("text-anchor", "middle")
        .text("Daily Actual vs. Projected (" + venue.toUpperCase() + ")");
  }
  