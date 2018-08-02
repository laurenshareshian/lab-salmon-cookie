'use strict';

(function(module){
    // this function allows updating the data
    let addStore = module.addStore;

    // this function initializes the form so we can give a callback function for when a submit happens
    let initStoreForm = module.initStoreForm;

    // this function allows us to signal to child components that they need to update because data changed
    let updateStoreList = module.updateStoreList;
    let updateFooter = module.updateFooter;

    //initialize the form so we can orchestrate needed actions and changes
    initStoreForm(function onStoreAdded(store) {
        addStore(store);
        updateStoreList();
        updateFooter();
    });

})(window.module = window.module || {});