import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

 const firebaseConfig = {
    apiKey: "AIzaSyD0rdBwlpwBLbI70Kjvi2fUxlwVs7cyuts",
    authDomain: "portfolio-c21be.firebaseapp.com",
    projectId: "portfolio-c21be",
    storageBucket: "portfolio-c21be.firebasestorage.app",
    messagingSenderId: "344103062714",
    appId: "1:344103062714:web:58704c1e8e29e4bd960683"
  };

    const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);  

    export default app;