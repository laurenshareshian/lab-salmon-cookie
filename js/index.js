/* exported add */
'use strict';

(function(module){
    var stores = module.stores;

    // reference the ul
    var ul = document.getElementById('tbody');

    // reference the template
    var template = document.getElementById('store-template').content;

    var locations = Object.keys(stores);
    var store;

    // initialize hourly totals dict
    var hourly_totals_dict = {};
    for(var j = 0; j < 14; j++){
        hourly_totals_dict[j] = 0;
    }
    // loop each store
    for(j = 0; j < locations.length; j++){
        store = locations[j];
        var dom = template.cloneNode(true);
        var td = dom.querySelector('td');
        td.textContent = store;
        ul.appendChild(td);
        var cookies;
        var hourly_totals = 0;
        // loop each hour
        for(var i = 0; i < stores[store]['hours'].length; i++)
        {
            dom = template.cloneNode(true);
            td = dom.querySelector('td');
            cookies = stores[store]['hours'][i];
            td.textContent = cookies;
            ul.appendChild(td);
            hourly_totals += cookies;
            hourly_totals_dict[i] += cookies;
        }
        // find store total
        dom = template.cloneNode(true);
        td = dom.querySelector('td');
        ul.appendChild(td);
        td.textContent = hourly_totals;
        ul.appendChild(dom);
        console.log(hourly_totals_dict);
    }

    // fill in last row

    ul = document.getElementById('tfoot');

    // reference the template
    template = document.getElementById('store-template').content;

    // loop each store

    dom = template.cloneNode(true);
    td = dom.querySelector('td');
    td.textContent = 'Hourly Totals for All Locations';
    ul.appendChild(td);
    for(i = 0; i < stores[store]['hours'].length; i++)
    {
        dom = template.cloneNode(true);
        td = dom.querySelector('td');
        td.textContent = hourly_totals_dict[i];
        ul.appendChild(td);
    }
    // find store total
    dom = template.cloneNode(true);
    td = dom.querySelector('td');
    ul.appendChild(td);
    td.textContent = hourly_totals;
    ul.appendChild(dom);
    console.log(hourly_totals_dict);
})(window.module = window.module || {});

function add(event, module){
    event.preventDefault();
    var stores = module.stores;
    document.getElementById('table').innerHTML = '';
    var location = document.getElementById('location').value;
    var max_cust = document.getElementById('max').value;
    var min_cust = document.getElementById('min').value;
    var avg_cookies = document.getElementById('avg').value;
    stores[location] = {};
    stores[location]['max_cust'] = parseInt(max_cust);
    stores[location]['min_cust'] = parseInt(min_cust);
    stores[location]['avg_cookies'] = parseInt(avg_cookies);
    console.log(stores);
}