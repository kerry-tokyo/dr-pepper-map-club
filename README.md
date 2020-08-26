![Logo](src/assets/images/logo.svg)

## Dr Pepper Map Club (To Be Developed)

A web app that checks vending machines equipped with Dr Pepper.

## Start

### 1. Create Firebase folder

Create a firebase folder under `src` and add `index.ts`.

```
  /
  └── src
    └── firebase
        └── index.ts
```

Then enter the API key as shown below.

`src/firebase/index.ts`

```tsx
import firebase from "firebase/app";
import "firebase/auth";

export const firebaseConfig = {
  apiKey: "********",
  authDomain: "********",
  databaseURL: "********",
  projectId: "********",
  storageBucket: "********",
  messagingSenderId: "********",
  appId: "********",
  measurementId: "********",
};

firebase.initializeApp(firebaseConfig);

let auth;

if (typeof window !== "undefined") {
  auth = firebase.auth();
}

export { auth, firebase };
```

### 2. Firebase Setup

```shell
npm install firebase-functions@latest firebase-admin@latest --save

npm install -g firebase-tools

firebase login
```

### 3. Develop & Build

```shell
npm install

gatsby develop
```
