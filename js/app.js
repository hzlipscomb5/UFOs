// import the data from data.js
const tableData = data;

//We need to tell Javascript what type of element the data will be displayed in. 
//Since we know it will be in a table we will reference the tbody html tag using D3
// D3 is a javascript library that produces sophisticated and highly dynamic graphics in an HTML webpage. 
//D3 is often used to create dashboards or a collection of visual data such as graphs and maps)

//Reference the HTML table using d3 (this tells d3 to look for <tbody> tags in the HTML)
var tbody = d3.select("tbody");

// Begin building a function that builds our table

function buildTable(data) {
  // First, Clear existing data from the table
  tbody.html("");
  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}

   // tbody.html(""); This clears the table by turning it into an empty string(Begins a fresh table for each request for filters and such)
  //  let row = tbody.append("tr"); finds tbody in the html and adds a table row with "tr"
  // Object.values(dataRow).forEach((val) =>{} will begin to loop thru each field in dataRow. These fields will become table data and be wrapped in <td> tags when appended to the html table
  // We're already working with an array of objects, where each object is a UFO sighting. By starting our line of code with Object.values, we're telling JavaScript to reference one object from the array of UFO sightings. By adding (dataRow) as the argument, we are saying that we want the values to go into the dataRow. We've added forEach((val) to specify that we want one object per row.
  // Let's think of it this way: we're telling our code put each sighting onto its own row of data. The val argument represents each item in the object, such as the location, shape, or duration.
  // let cell = row.append("td") and rhe next row append each value of the object to a cell in the table

