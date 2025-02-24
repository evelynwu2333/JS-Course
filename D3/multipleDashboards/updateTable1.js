// updateTable1.js

// Build Table1: Daily data table for selected venue.
function updateTable1(venue, data) {
    // Group by Day.
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
        let ratio = projected === 0 ? 0 : (actual / projected).toFixed(2);
        return { day: day, actual: actual, projected: projected, ratio: ratio };
      });
    
    dailyData.sort((a, b) => a.day.localeCompare(b.day));
    
    let container = d3.select("#table1");
    container.selectAll("*").remove();
    container.append("h3").text("Daily Data for " + venue.toUpperCase());
    
    let table = container.append("table");
    let thead = table.append("thead");
    let tbody = table.append("tbody");
    
    let columns = ["Day", "Actual", "Projected", "Ratio"];
    
    thead.append("tr")
      .selectAll("th")
      .data(columns)
      .enter()
      .append("th")
      .text(d => d);
    
    let rows = tbody.selectAll("tr")
      .data(dailyData)
      .enter()
      .append("tr");
    
    rows.selectAll("td")
      .data(d => [d.day, d.actual, d.projected, d.ratio])
      .enter()
      .append("td")
      .text(d => d);
  }
  