'use strict';

(function(module) {

    var fruits = [{
        name: 'orange',
        color: 'orange',
    }, {
        name: 'apple',
        color: 'red',
    }, {
        name: 'cherry',
        color: 'red',
    }, {
        name: 'banana',
        color: 'yellow',
    }, {
        name: 'mango',
        color: 'orange',
    }];

    // for(var i = 0; i < fruits.length; i++) {
    //     fruits[i].someProperty = 'prop';
    // }

    module.fruits = fruits;

})(window.module = window.module || {});