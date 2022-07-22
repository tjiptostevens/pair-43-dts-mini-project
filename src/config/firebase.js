// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALQqEo0kxrLKeZmM1Xw2omBngFGmQ5MTo",
    authDomain: "pair-43-dts-mini-project-dts.firebaseapp.com",
    projectId: "pair-43-dts-mini-project-dts",
    storageBucket: "pair-43-dts-mini-project-dts.appspot.com",
    messagingSenderId: "814958293279",
    appId: "1:814958293279:web:df77ccfb1b4c29c269402a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerEmailPassword = async(email, password) => {
    try {
        // alert(email + ' and ' + password)
        console.log("register");
        const user = await createUserWithEmailAndPassword(auth, email, password);
        // alert (await createUserWithEmailAndPassword(auth, email, password))
        console.log("User : " + user.user);
    } catch (error) {
        console.log("error code : " + error.code);
        console.log("error messages : " + error.message);
        return error;
    }
};

const loginemailPassword = async(email, password) => {
    try {
        const userLogin = await signInWithEmailAndPassword(auth, email, password);
        // alert(await signInWithEmailAndPassword(auth, email, password))
        // alert("User : " + userLogin.user)
        console.log("User : " + userLogin.email);
    } catch (error) {
        console.log("error code : " + error.code);
        console.log("error messages : " + error.message);
        return error;
    }
};

const forgotPassword = async(email) => {
    try {
        await sendPasswordResetEmail(auth, email);
    } catch (error) {
        console.log(error);
        return error;
    }
};

const logout = async() => {
    try {
        await signOut(auth);
    } catch (error) {
        console.log(error);
        return error;
    }
};

export {
    auth,
    registerEmailPassword,
    loginemailPassword,
    forgotPassword,
    logout,
};