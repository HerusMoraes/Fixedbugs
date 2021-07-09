import firebase from "firebase";
// Required for side-effects
import * as functions from "firebase/functions";

const landingSubscribe = firebase.functions().httpsCallable('landingSubscribe');
