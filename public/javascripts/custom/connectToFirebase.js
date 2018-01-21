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

    function addMsgListener(database) {
        let newMsgBox;
        firebase.database().ref('messages/').on('child_added', function(snapshot, prevChildKey) {
            var newMsg = snapshot.val();
            if (newMsg.isUser) {
                newMsgBox = $("<li class='my-msg'><div class='sender-name'>Me</div>"
                            + "<div class='my-msg-box msg-box'>" + newMsg.message + "</div></li>");
            } else {
                newMsgBox = $("<li class='your-msg'><div class='sender-name'>" + newMsg.name + "</div>"
                            + "<div class='your-msg-box msg-box'>" + newMsg.message + "</div></li>");
            }

            newMsgBox.appendTo($('#msg-area'));
            $('.inner-text-wrap').stop().animate({
                scrollTop: $('.inner-text-wrap')[0].scrollHeight
              }, 800);
            
          });
    }

    window.connectToFirebase = connectToFirebase;
    window.addMsgListener = addMsgListener;
})();
    
    