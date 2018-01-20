(function(apigClient){

    function getVehicles(apigClient) {
        apigClient.vehiclesIdGet().then(function(vehicles){
            console.log(vehicles);
        });
    }

    window.getVehicles = getVehicles;
})();
    
    