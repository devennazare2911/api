import firebase from 'firebase';
import {
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    MESSAGE_SENDER_ID,
    APP_ID
} from 'firebase';
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: 'AIzaSyDwj5YIsDvM0K7uvF2U3wsmDDmJHjs2TGI',
    authDomain: 'digitalcrew-46031.firebaseapp.com',
    databaseURL: 'https://digitalcrew-46031.firebaseio.com',
    projectId: 'digitalcrew-46031',
    storageBucket: 'digitalcrew-46031.appspot.com',
    messagingSenderId: '348394507262',
    appId: '1:348394507262:web:f45b7de9af24222f200eaf',
}

let Firebase = firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()

// avoid deprecated warnings
db.settings({
})

export default Firebase