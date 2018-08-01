/* eslint-disable no-undef */

'use strict';

(function(event, module){
    var stores = module.stores;
    console.log(stores);
    populate_table(stores);
    let button = document.getElementById('add-store');
    button.addEventListener('submit', function(event){ add_store(module, event); });
})(event, window.module = window.module || {});

function populate_table(stores){
    // reference the table
    var table = document.getElementById('tbody');

    // reference the template
    var template = document.getElementById('store-template').content;

    // initialize hourly totals dict
    var hourly_totals_dict = {};
    for(var j = 0; j < 14; j++){
        hourly_totals_dict[j] = 0;
    }
    // loop through each store and create a row for it
    var locations = Object.keys(stores);
    var store;
    for(j = 0; j < locations.length; j++){
        store = locations[j];
        var dom = template.cloneNode(true);
        //add store location (column 0)
        var td = dom.querySelector('td');
        td.textContent = store;
        table.appendChild(td);
        var cookies;
        var store_total = 0;
        // add store hours (columns 1 through 13)
        for(var i = 0; i < stores[store]['hours'].length; i++)
        {
            dom = template.cloneNode(true);
            td = dom.querySelector('td');
            cookies = stores[store]['hours'][i];
            td.textContent = cookies;
            table.appendChild(td);
            store_total += cookies;
            hourly_totals_dict[i] += cookies;
        }
        // calculate store total and make it column 14
        dom = template.cloneNode(true);
        td = dom.querySelector('td');
        table.appendChild(td);
        td.textContent = store_total;
        table.appendChild(dom);
    }

    // fill in last row with hourly totals
    table = document.getElementById('tfoot');
    // reference the template
    template = document.getElementById('store-template').content;
    // create an entry for the title of the row (column 0)
    var all_store_total = 0;
    dom = template.cloneNode(true);
    td = dom.querySelector('td');
    td.textContent = 'Hourly Totals for All Locations';
    table.appendChild(td);
    // fill in hourly totals for columns 1-13
    for(i = 0; i < stores[store]['hours'].length; i++)
    {
        dom = template.cloneNode(true);
        td = dom.querySelector('td');
        cookies = hourly_totals_dict[i];
        td.textContent = cookies;
        all_store_total += cookies;
        table.appendChild(td);
    }
    // sum all of the hourly totals
    dom = template.cloneNode(true);
    td = dom.querySelector('td');
    table.appendChild(td);
    td.textContent = all_store_total;
    table.appendChild(dom);
}