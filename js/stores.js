'use strict';
(function(module) {
    let stores = [
        { location: 'Pike Place', min_cust: 10, max_cust: 40, avg_cookies: 10.2, key: 'Pike Place' },
        { location: 'SeaTac', min_cust: 1, max_cust: 3, avg_cookies: 6.5, key: 'SeaTac' },
        { location: 'Seattle Center', min_cust: 50, max_cust: 100, avg_cookies: 1.4, key: 'Seattle Center' },
        { location: 'Capitol Hill', min_cust: 40, max_cust: 80, avg_cookies: 2.3, key: 'Capitol Hill' },
        { location: 'Alki', min_cust: 5, max_cust: 25, avg_cookies: 3.5, key: 'Alki' }
    ];
    // loop through each store
    for(let j = 0; j < stores.length; j++){
        let people = 0;
        let cookies = 0;
        stores[j]['hours'] = [];
        // add hourly data for that location
        for(let i = 0; i < 14; i++){
            people = getRandInteger(stores[j].min_cust, stores[j].max_cust);
            cookies = people * stores[j].avg_cookies;
            stores[j]['hours'].push(Math.round(cookies));
        }
    }

    function addStore(store) {
        stores.push(store);
        console.log('added store', store);
    }

    module.stores = stores;
    module.addStore = addStore;

}(window.module = window.module || {}));

function getRandInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}