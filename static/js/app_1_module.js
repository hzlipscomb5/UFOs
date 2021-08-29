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


// Start our click function

function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);


// d3.select("#datetime"), we're telling D3 to look for the #datetime id in the HTML tags. We haven't created our HTML yet, but we know that the date value will be nested within tags that have an id of "datetime."
// Here's a variable we haven't seen in a while: tableData. This is the original data as imported from our data.js file. By setting the filteredData variable to our raw data, we're basically using it as a blank slate. The function we're working on right now will be run each time the filter button is clicked on the website. If no date has been entered as a filter, then all of the data will be returned instead.
// // pseudocode practice
// if (a date is entered) {
//   Filter the default data to show only the date entered
// };
// We just created the filteredData variable. What are we doing with it in this line: filteredData = filteredData.filter(row => row.datetime === date);? applying a filter method that will match the datetime value to the filtered date value.
//then we run the build table function on filtered data 

// just under the function is the code for the click itself. Our selector string contains the id for another HTML tag. (We'll assign a unique id to a button element in the HTML called "filter-btn".) This time it'll be included in the button tags we create for our filter button. By adding this, we're linking our code directly to the filter button. Also, by adding .on("click", handleClick);, we're telling D3 to execute our handleClick() function when the button with an id of filter-btn is clicked.