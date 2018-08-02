'use strict';
(function(module) {
    //initial stores info
    let stores = [
        { location: 'Pike Place', min_cust: 10, max_cust: 40, avg_cookies: 10.2, key: 'Pike Place' },
        { location: 'SeaTac', min_cust: 1, max_cust: 3, avg_cookies: 6.5, key: 'SeaTac' },
        { location: 'Seattle Center', min_cust: 50, max_cust: 100, avg_cookies: 1.4, key: 'Seattle Center' },
        { location: 'Capitol Hill', min_cust: 40, max_cust: 80, avg_cookies: 2.3, key: 'Capitol Hill' },
        { location: 'Alki', min_cust: 5, max_cust: 25, avg_cookies: 3.5, key: 'Alki' }
    ];
    // loop through each store and create an hourly list of randomly generated cookies sold each hour
    // put this list into a property called hours
    for(let j = 0; j < stores.length; j++){
        stores[j] = createHourlyInfo(stores[j]);
    }

    //add a new store to the list of stores
    function addStore(store) {
        stores.push(store);
        console.log('added store', store);
    }

    //make the stores object and the addStore function accessible to other functions
    module.stores = stores;
    module.addStore = addStore;

}(window.module = window.module || {}));

//get a random number (inclusive)
function getRandInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// give a store a property called hours with randomly generated cookies sold each hour
function createHourlyInfo(store){
    let people = 0;
    let cookies = 0;
    store['hours'] = [];
    for(let i = 0; i < 14; i++){
        people = getRandInteger(store.min_cust, store.max_cust);
        cookies = people * store.avg_cookies;
        store['hours'].push(Math.round(cookies));
    }
    return store;
}