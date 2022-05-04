
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { ref, onUnmounted } from "vue"

const config = {
    apiKey: "AIzaSyB5Ues8UdO3dCdWJdLy_VvmiERAEEtFizI",
    authDomain: "final-89e71.firebaseapp.com",
    projectId: "final-89e71",
    storageBucket: "final-89e71.appspot.com",
    messagingSenderId: "883249245879",
    appId: "1:883249245879:web:f17a27b170cd801a14e732",
    measurementId: "G-W1DX5FBEBC"
  };

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const accidentCollection = db.collection('accidents');

export const createAccident = accident => {
    return accidentCollection.add(accident)
}

export const getAccident = async id => {
    const accident = await accidentCollection.doc(id).get() 
    return accident.exist ? accident.data() : null
}

export const updateAccident = (id, accident) => {
    return accidentCollection.doc(id).update(accident)
}

export const deleteAccident = id => {
    return accidentCollection.doc(id).delete()
}

export const useLoadAccidents = () => {
    const accidents = ref([])
    const close = accidentCollection.onSnapshot(snapshot => {
        accidents.value = snapshot.doc.map(doc => ({ id: doc.id, ...doc.data()}))
    })
    onUnmounted(close)
    return accidents
}

