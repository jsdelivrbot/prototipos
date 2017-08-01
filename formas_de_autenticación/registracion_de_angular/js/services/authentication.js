ever.factory("Authentication", ["$rootScope", "$location", "$firebaseObject", "$firebaseAuth", function($rootScope, $location, $firebaseObject, $firebaseAuth){
    var ref = firebase.database().ref();
    var auth = $firebaseAuth();
    var myObject;

//Detecting authentication into a service
    auth.$onAuthStateChanged(function(authUser){
        if(authUser){
            var userRef = ref.child("users").child(authUser.uid);
            var userObj = $firebaseObject(userRef);
            $rootScope.currentUser = userObj
        } else {
           $rootScope.currentUser = "";
        }
    })

//authentication, login, logout,  registering and saving to firebase database
    myObject = {
        login: function(user){
           auth.$signInWithEmailAndPassword(
               user.email,
               user.password
           ).then(function(user){
               $location.path("/success")
           })
        },

        logout: function(){
            return auth.$signOut();
        },

        requireAuth: function(){
            return auth.$requireSignIn()
        },

        register: function(user){
            auth.$createUserWithEmailAndPassword(user.email, user.password).then(function(regUser){
                var regRef = ref.child("users")
                .child(regUser.uid)
                .set({
                    date: firebase.database.ServerValue.TIMESTAMP,
                    regUser: regUser.uid,
                    firstname: user.firstName,
                    lastname: user.lastName,
                    email: user.email
                });
                myObject.login(user)
            })
        }
    }
    return  myObject;
}])