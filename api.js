import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
    apiKey: "AIzaSyBTrwzOXPGAeSfYe_wU916sZXCqZ2p5zyI",
    authDomain: "scrimba-van-life.firebaseapp.com",
    projectId: "scrimba-van-life",
    storageBucket: "scrimba-van-life.appspot.com",
    messagingSenderId: "623620173691",
    appId: "1:623620173691:web:f1b5ef5d0ba5318a9b17de"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}