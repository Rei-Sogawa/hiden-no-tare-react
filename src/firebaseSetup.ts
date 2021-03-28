import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBSkgnh-ebid5k_HMjreKb7OeYjGAKRcb4',
  authDomain: 'hiden-no-tare-react.firebaseapp.com',
  projectId: 'hiden-no-tare-react',
  storageBucket: 'hiden-no-tare-react.appspot.com',
  messagingSenderId: '114524773548',
  appId: '1:114524773548:web:48f8616a39e3b19b885309',
  measurementId: 'G-FP58TMDH1M',
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebase.firestore();
const usersRef = db.collection('users');

export { auth, usersRef };
