'use strict';
(function(module) {
    var stores = {
        'Pike Place': { location: 'Pike Place', min_cust: 10, max_cust: 40, avg_cookies: 10 },
        'SeaTac': { location: 'SeaTac', min_cust: 1, max_cust: 5, avg_cookies: 6 },
        'Seattle Center': { location: 'Seattle Center', min_cust: 50, max_cust: 100, avg_cookies: 1 },
        'Capitol Hill': { location: 'Capitol Hill', min_cust: 40, max_cust: 80, avg_cookies: 2 },
        'Alki': { location: 'Alki', min_cust: 5, max_cust: 25, avg_cookies: 3 }
    };
    // loop through each store
    var locations = Object.keys(stores);
    for(var j = 0; j < locations.length; j++){
        var people = 0;
        var cookies = 0;
        stores[locations[j]]['hours'] = [];
        // add hourly data for that location
        for(var i = 0; i < 14; i++){
            people = getRandInteger(stores[locations[j]].min_cust, stores[locations[j]].max_cust);
            cookies = people * stores[locations[j]].avg_cookies;
            stores[locations[j]]['hours'].push(cookies);
        }
    }
    module.stores = stores;

    function getRandInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}(window.module = window.module || {}));