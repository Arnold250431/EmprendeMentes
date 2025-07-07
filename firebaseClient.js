import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAAPv5Den67tl88VqFhkB3Jev_ijJSM78s",
  authDomain: "emprendementes-d025c.firebaseapp.com",
  projectId: "emprendementes-d025c",
  storageBucket: "emprendementes-d025c.appspot.com",
  messagingSenderId: "275020157088",
  appId: "1:275020157088:web:928658397fbbdd9b68f9c5",
  measurementId: "G-5ENV9NNKKN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };