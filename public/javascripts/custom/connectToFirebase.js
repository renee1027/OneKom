(function(){

    function connectToFirebase() {
    	var config = {
	        apiKey: "AIzaSyDjDld7xC_8rFCfy0qvljr8XT8qUjNtyPk",
        	authDomain: "onekom-1001.firebaseapp.com",
        	databaseURL: "https://onekom-1001.firebaseio.com",
    	    projectId: "onekom-1001",
	        storageBucket: "onekom-1001.appspot.com",
        	messagingSenderId: "979475401171"
    	};
        firebase.initializeApp(config);
    
        return firebase.database();
    }

    window.connectToFirebase = connectToFirebase;
})();