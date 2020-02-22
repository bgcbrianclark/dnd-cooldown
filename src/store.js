import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase, copy this from the cloud console
// Or use mine :)
var config = {
  apiKey: "AIzaSyCLIPAAuqqpa4vwki5U069Fl1xUw07CgVs",
  authDomain: "dnd-cooldown.firebaseapp.com",
  databaseURL: "https://dnd-cooldown.firebaseio.com",
  projectId: "dnd-cooldown",
  storageBucket: "dnd-cooldown.appspot.com",
  messagingSenderId: "471297275674",
  appId: "1:471297275674:web:aae80da3416004cc9b9ea3"
};
firebase.initializeApp(config);

// The shared state object that any vue component can get access to.
export const store = {
  charsList: null,
  writeChar: (abilities, characterName, playerName) => charsCollection.add({
    createdOn: new Date(),
    abilities,
    characterName,
    playerName
  })
};

const charsCollection = firebase.firestore().collection('characters');

// onSnapshot is executed every time the data
// in the underlying firestore collection changes
// It will get passed an array of references to
// the documents that match your query
charsCollection
  .onSnapshot((charactersRef) => {
    const characters = [];
    charactersRef.forEach((doc) => {
      const character = doc.data();
      character.id = doc.id;
      characters.push(character);
    });
    store.charsList = characters;
  });
