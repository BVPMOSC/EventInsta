import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCLVOTGQygZMjYc39bjOpPgMQwhVhyW4lo",
    authDomain: "music-box-1237a.firebaseapp.com",
    databaseURL: "https://music-box-1237a.firebaseio.com",
    projectId: "music-box-1237a",
    storageBucket: "music-box-1237a.appspot.com",
    messagingSenderId: "24629686597"
}

firebase.initializeApp(config)
export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth