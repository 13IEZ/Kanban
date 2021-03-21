import firebase from 'firebase/app';
import 'firebase/database';

firebase.initializeApp({
	apiKey: 'AIzaSyArjndnyd4qx4nFfgDNDhNN9DfrXNflQZM',
	authDomain: 'igor-zakharov.firebaseapp.com',
	databaseURL: 'https://igor-zakharov-default-rtdb.firebaseio.com',
	projectId: 'igor-zakharov',
	storageBucket: 'igor-zakharov.appspot.com',
	messagingSenderId: '79613404887',
	appId: '1:79613404887:web:3b3da7dbd00dc8571db292'
});

const db = firebase.database();

export default db;