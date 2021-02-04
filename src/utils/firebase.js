import 'firebase/firestore'
import firebase from 'firebase/app';
import 'firebase/auth';
const config = {
  apiKey: "AIzaSyB0eM3xz4I3PKon7y_7m4mqdHphYl8SRDk",
  authDomain: "test-app-9388d.firebaseapp.com",
  databaseURL: "https://test-app-9388d.firebaseio.com",
  projectId: "test-app-9388d",
  storageBucket: "test-app-9388d.appspot.com",
  messagingSenderId: "809386235051",
  appId: "1:809386235051:web:204008c971a43293a853ee",
  measurementId: "G-Y7Z0QH67N0"
}

firebase.initializeApp(config);

export default firebase;

// const auth = firebase.auth()
// const db = firebase.firestore()
// db.settings({ timestampsInSnapshots: true })

// export { auth, db }


