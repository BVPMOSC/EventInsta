import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCY6ZkAsb-CTT2mEu-J4FeaeF90USDCU7k',
  authDomain: 'learning-5e04c.firebaseapp.com',
  databaseURL: 'https://learning-5e04c.firebaseio.com',
  projectId: 'learning-5e04c',
  storageBucket: 'learning-5e04c.appspot.com',
  messagingSenderId: '627769457667'
}

firebase.initializeApp(config)
export const ref = firebase.database().ref('/PWA')
export const eventref = firebase.database()
export const key = "AIzaSyAlZA1--4yRJfblYYYVMZNcP3522Z9SoL4"
export const firebaseAuth = firebase.auth
