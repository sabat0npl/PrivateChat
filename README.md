<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://github.com/sabat0npl/privatechat">
    <img src="https://user-images.githubusercontent.com/62220159/128108980-897fe941-a5ab-476c-8251-ceceeefeb19b.png" alt="Logo" width="600">
  </a>
  <p align="center">
    Just another chat app for mobile devices built with React Native.
  </p>
</p>

<br>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#design">Design</a></li>
    <li><a href="#get-started">Get Started</a></li>
    <li><a href="#final-reflections">Final Reflections</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<br>

<!-- ABOUT THE PROJECT -->
## About The Project

### Objective:

- Build a chat app for mobile devices using React Native that provides users with a minimalistic chat interface and the possibility to share images and their location.

### User Stories:

- As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my friends and family.
- As a user, I want to be able to send messages to my friends and family members to exchange the latest news.
- As a user, I want to send images to my friends to show them what I’m currently doing.
- As a user, I want to share my location with my friends to show them where I am.
- As a user, I want to be able to read my messages offline so I can reread conversations at any time.
- As a user with a visual impairment, I want to use a chat app that is compatible with a screen reader so that I can engage with a chat interface.

### Key Features:

- A page where users can enter their name and choose a background color for the chat screen before joining the chat.
- A page displaying the conversation, as well as an input field and submit button.
- The chat must provide users with two additional communication features: sending images and location data.
- Data gets stored online and offline.

<!-- BUILT WITH -->
## Built With

- [Android Studio](https://developer.android.com/)
- [Expo](https://expo.io/)
- [Firebase](https://firebase.google.com/)
- [Gifted Chat](https://github.com/FaridSafi/react-native-gifted-chat)
- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/)
- [React Native](https://reactnative.dev/)
- [Visual Studio Code](https://code.visualstudio.com/)

### Dependencies

- async-storage
- expo
- firebase
- netinfo
- react
- react-native
- react-native-async-storage
- react-native-gifted-chat
- react-native-maps
- react-navigation

### Dev Dependencies

- babel

<br>

<!-- GET STARTED -->
## Get Started

### Setting up

To develop and test native apps with [React Native](https://reactnative.dev/), Facebook recommends using [Expo](https://docs.expo.io/get-started/installation/).

Expo is an open-source platform for making universal native apps that run on Android, iOS, and the web. There are two tools that you need to develop apps with Expo: a command line app called [Expo CLI](https://docs.expo.io/workflow/expo-cli/) to initialize and serve your project and a mobile client app called [Expo Go](https://docs.expo.io/guides/sharing-preview-releases/#expo-go) to open it on iOS and Android. To install Expo CLI on your computer, you need to have previously installed [Node.js](https://nodejs.org/) (LTS release).

```
npm install --global expo-cli
```

If you want to test the app on a mobile device, you must also install the Expo Go application on the mobile device.

- [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) (Android Lollipop and greater)
- [OS App Store](https://itunes.com/apps/exponent) (iOS 11 and greater)

### Dependencies installation

Install all dependencies listed in package.json in the local node_modules folder with the following npm command:

```
npm install
```

### Configuration

Once you have the project on your computer, and you have installed Expo CLI and all the dependencies, you can start using (and modifying) the project.

In order to use the cloud storage, you need to have a [Firebase](https://firebase.google.com/) account and create a new project for the app. Once inside the new project created, you must enable authentication with at least the anonymous option activated, so that users can use the app. To do this, you must go to the "Authentication" option in the Firebase main menu.

To save the messages sent by users, you must create a collection in Cloud Firestore. To do this, you must go to the "Firestore Database" option in the Firebase main menu.

Finally, you must go to the project configuration, and in the "General" tab you will find the SDK Configuration. You must copy the configuration code of your Firebase service into the "Chat" component of the app. The configuration code in both Firebase and the app looks like this:

```
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
```

### Run it

To run the app, you can use the following commands:

```
expo start
```
```
npm start
```

Expo will start automatically and will give you several options to run, including the option to launch the app in a virtualized operating system that you have open at that moment (for example, with [Android Studio](https://developer.android.com/)).

And that's it! Happy coding/hacking! 🤓

<br>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<br>

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

This project was done as part of [CareerFoundry's Full-Stack Web Development Program](https://careerfoundry.com/en/courses/become-a-web-developer/) (Project 5 - React Native Mobile Chat App).
