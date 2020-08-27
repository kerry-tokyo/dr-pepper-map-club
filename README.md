![Logo](src/assets/images/logo.svg)

## Dr Pepper Map Club (To Be Developed)

A web app that checks vending machines equipped with Dr Pepper.

## Start

### 1. Create Firebase folder

```
  dr-pepper-map-club
  └── .env
```

After creating the .env file, enter the API key as shown below.

`.env`

```env
GATSBY_FIREBASE_API_KEY=AIzaSyDXHcJtXvy08mlIWjCoj0w5lyBom-nuUiI
GATSBY_FIREBASE_AUTH_DOMAIN=dr-pepper-map-club.firebaseapp.com
GATSBY_FIREBASE_DATABASE_URL=https://dr-pepper-map-club.firebaseio.com
GATSBY_FIREBASE_PROJECT_ID=dr-pepper-map-club
GATSBY_FIREBASE_STORAGE_BUCKET=dr-pepper-map-club.appspot.com
GATSBY_FIREBASE_MESSAGING_SENDER_ID=636506083949
GATSBY_FIREBASE_APP_ID=1:636506083949:web:b75f877d47627746be6564


```

### 2. Firebase Setup

```shell
npm install firebase-functions@latest firebase-admin@latest --save

npm install -g firebase-tools

firebase login
```

### 3. Google Map API

### 4. Develop & Build

```shell
npm install

gatsby build

gatsby develop
```
