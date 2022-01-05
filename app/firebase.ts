import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCeJm-YeG1iNKixt0ssChOszdDI-3QzcXY",
    authDomain: "bankapp-d4d06.firebaseapp.com",
    projectId: "bankapp-d4d06",
    storageBucket: "bankapp-d4d06.appspot.com",
    messagingSenderId: "148407126991",
    appId: "1: 148407126991: web: 7685ef58be72f0a497a0ba",
    MeasureId: "G-8TV1KHJ9RN"
}

initializeApp(firebaseConfig)

export const auth = getAuth()

export const register = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password)

export const login = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password)

export const logout = () => signOut(auth)

export const db = getFirestore()
