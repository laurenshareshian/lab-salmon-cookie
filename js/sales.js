/* exported add */
// this is the way i originally did it (not marty's way)
'use strict';

var stores = {
    'Pike Place': { min_cust: 10, max_cust: 40, avg_cookies: 10 },
    'SeaTac': { min_cust: 1, max_cust: 5, avg_cookies: 6 },
    'Seattle Center': { min_cust: 50, max_cust: 100, avg_cookies: 1 },
    'Capitol Hill': { min_cust: 40, max_cust: 80, avg_cookies: 2 },
    'Alki': { min_cust: 5, max_cust: 25, avg_cookies: 3 },
};

// initialize hourly totals dict
var hourly_totals = {};
for(var j = 0; j < 14; j++){
    hourly_totals[j] = 0;
}

create_table();

function create_table(){
    var locations = Object.keys(stores);
    for(j = 0; j < locations.length; j++){
        var people = 0;
        var location_total = 0;
        var cookies = 0;
        var element = document.getElementById('table');
        // add row with name of location
        var tabledata = document.createElement('tr');
        var tablerow_node = document.createTextNode(locations[j]);
        tabledata.appendChild(tablerow_node);
        // add hourly data for that location
        for(var i = 0; i < 14; i++){
            people = getRandInteger(stores[locations[j]].min_cust, stores[locations[j]].max_cust);
            cookies = people * stores[locations[j]].avg_cookies;
            location_total += cookies;
            var inner_tabledata = document.createElement('td');
            var tabledata_node = document.createTextNode(cookies);
            inner_tabledata.appendChild(tabledata_node);
            tabledata.appendChild(inner_tabledata);

            hourly_totals[i] += cookies;
        }
        //sum the hourly data for that location
        var last_inner_tabledata = document.createElement('td');
        var last_tabledata_node = document.createTextNode(location_total);
        last_inner_tabledata.appendChild(last_tabledata_node);
        tabledata.appendChild(last_inner_tabledata);

        element.appendChild(tabledata);
    }
    //add row for hourly totals for all locations
    tabledata = document.createElement('tr');
    tablerow_node = document.createTextNode('Hourly Totals for All Locations');
    tabledata.appendChild(tablerow_node);
    //create hourly totals for each location
    var hourly_totals_total = 0;

    for(i = 0; i < 14; i++){
        inner_tabledata = document.createElement('td');
        tabledata_node = document.createTextNode(hourly_totals[i]);
        inner_tabledata.appendChild(tabledata_node);
        tabledata.appendChild(inner_tabledata);

        hourly_totals_total += hourly_totals[i];
    }
    //create an entry for the sum all of the hourly totals
    last_inner_tabledata = document.createElement('td');
    last_tabledata_node = document.createTextNode(hourly_totals_total);
    last_inner_tabledata.appendChild(last_tabledata_node);
    tabledata.appendChild(last_inner_tabledata);

    element.appendChild(tabledata);

}

function getRandInteger(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;
}

// function add(event){
//     event.preventDefault();
//     document.getElementById('table').innerHTML = '';
//     var location = document.getElementById('location').value;
//     var max_cust = document.getElementById('max').value;
//     var min_cust = document.getElementById('min').value;
//     var avg_cookies = document.getElementById('avg').value;

//     stores[location] = {};
//     stores[location]['max_cust'] = parseInt(max_cust);
//     stores[location]['min_cust'] = parseInt(min_cust);
//     stores[location]['avg_cookies'] = parseInt(avg_cookies);

//     for(var j = 0; j < 14; j++){
//         hourly_totals[j] = 0;
//     }
//     create_table();
// }
