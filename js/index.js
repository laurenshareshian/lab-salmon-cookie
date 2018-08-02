'use strict';

(function(module){
    // this function allows updating the data
    let addStore = module.addStore;

    // this function initializes the form so we can give a callback function for when a submit happens
    let initStoreForm = module.initStoreForm;

    // this function allows us to signal to child components they need to update cuz data changed
    let updateStoreList = module.updateStoreList;

    //initialize the form so we can orchestrate needed actions and changes
    initStoreForm(function onStoreAdded(store) {
        addStore(store);
        updateStoreList();
    });

})(window.module = window.module || {});