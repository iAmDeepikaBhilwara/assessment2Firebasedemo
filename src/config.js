import Firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCjDOPbgErg4Cta3HUBD31Lyp3e87iwpMA",
    authDomain: "fir-demo-b77f9.firebaseapp.com",
    databaseURL: "https://fir-demo-b77f9.firebaseio.com",
    projectId: "fir-demo-b77f9",
    storageBucket: "fir-demo-b77f9.appspot.com",
    messagingSenderId: "354963189610"
  };

  let app=Firebase.initializeApp(config);
  export const db=app.database();