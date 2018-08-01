/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

function add_store(module, event){
    event.preventDefault();
    var stores = module.stores;
    //clear table info
    var tbody = document.getElementById('tbody');
    tbody.innerText = '';
    var thead = document.getElementById('tfoot');
    thead.innerText = '';
    //get user input
    var location = document.getElementById('location').value;
    var max_cust = document.getElementById('max').value;
    var min_cust = document.getElementById('min').value;
    var avg_cookies = document.getElementById('avg').value;
    //add this user input to our stores dictionary
    stores[location] = {};
    stores[location]['location'] = location;
    stores[location]['max_cust'] = max_cust;
    stores[location]['min_cust'] = min_cust;
    stores[location]['avg_cookies'] = avg_cookies;
    // loop through each store
    var locations = Object.keys(stores);
    for(var j = 0; j < locations.length; j++){
        var people = 0;
        var cookies = 0;
        stores[locations[j]]['hours'] = [];
        // create hourly data for that location
        for(var i = 0; i < 14; i++){
            people = getRandInteger(stores[locations[j]].min_cust, stores[locations[j]].max_cust);
            cookies = people * stores[locations[j]].avg_cookies;
            stores[locations[j]]['hours'].push(cookies);
        }
    }
    populate_table(stores);
}
