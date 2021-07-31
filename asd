const firebaseConfig = {
  apiKey: "AIzaSyDtXVzJ77K9TA1IKVQFO6Ht0OE8XbfFLJs",
  authDomain: "private-chat-68e85.firebaseapp.com",
  projectId: "private-chat-68e85",
  storageBucket: "private-chat-68e85.appspot.com",
  messagingSenderId: "346904394182",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
