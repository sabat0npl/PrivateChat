import React, { useState, useEffect } from "react";
import { StyleSheet, View, LogBox } from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import * as firebase from "firebase";
import "firebase/firestore";

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

LogBox.ignoreLogs(["Setting a timer for a long period of time", "undefined"]);

const Chat = (props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: `${props.route.params.backColor}`,
    },
  });

  const [messages, setMessages] = useState([]);
  const [uid, setuid] = useState("");

  const onCollectionUpdate = (querySnapshot) => {
    const messages = [];
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      messages.push({
        _id: data._id,
        text: data.text,
        createdAt: data.createdAt.toDate(),
        user: data.user,
      });
      setMessages(messages);
    });
  };

  const onSend = (messages) => {
    setMessages((previousState) => GiftedChat.append(previousState, messages));

    messages.map((data) => {
      referenceChatMessages.add({
        _id: data._id,
        text: data.text,
        createdAt: new Date(),
        user: data.user,
      });
    });
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{ right: { backgroundColor: "#000" } }}
      />
    );
  };

  // Get collection to firebase
  const referenceChatMessages = firebase.firestore().collection("messages");

  useEffect(() => {
    const authUnsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
      setuid(user.uid);
      setMessages([]);
    });
    const unsubscribe = referenceChatMessages
      .orderBy("createdAt", "desc")
      .onSnapshot(onCollectionUpdate);

    // component will unmount
    return () => {
      authUnsubscribe();
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        onSend={onSend}
        user={{
          _id: `${uid}`,
          name: `${props.route.params.name}`,
          avatar: "https://placeimg.com/140/140/any",
        }}
      />
    </View>
  );
};

export default Chat;
