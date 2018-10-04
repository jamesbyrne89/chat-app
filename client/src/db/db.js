import firebase from 'firebase';
import firestore from 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCtTnsuMeXC5-Hpx3CMyjL2Sxjja8HIlQM',
  authDomain: 'chat-app-df1fe.firebaseapp.com',
  databaseURL: 'https://chat-app-df1fe.firebaseio.com',
  projectId: 'chat-app-df1fe',
  storageBucket: 'chat-app-df1fe.appspot.com',
  messagingSenderId: '658202631385'
};

firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

export default db;
