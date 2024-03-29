## Common Setup for both Browser and Node

1. Run `npm install` to install dependencies.
2. Edit `src/firebase_config.ts` to specify your `PROJECT_ID` and `API_KEY`.
   (not required if you only want to use the Firestore emulator).
3. Edit `src/run_the_test.ts` to run whatever code you want to run.

## Run in a Browser

1. Run `npm run build` to generate the compiled JavaScript.
2. Run `npm run serve` to start an HTTP server.
3. Open `http://localhost:9080/` in a web browser.
4. Click the "Run Test" button.

## Run in Node.js

1. Run `npm run run` to run the code in Node.

To connect to the Firestore emulator, specify `-e`,
for example `npm run run -- -e`

To enable Firestore debug logging, specify `-v`,
for example `npm run run -- -v`

As a convenience, run `npm run run:emulator` to launch an emulator,
run the test, then stop the emulator.

## Deploy to Firebase Hosting

1. Install the Firebase CLI (see link below for details).
2. Run `firebase init hosting` to configure the directory for hosting.
3. Run `npm run build` to compile the browser bundle.
4. Run `firebase deploy --only hosting` to deploy.

For more details, see https://firebase.google.com/docs/hosting/quickstart.

# Using your own v9 SDK:

```
git clone https://github.com/firebase/firebase-js-sdk
cd firebase-js-sdk
yarn
yarn build
cd packages/firestore
yarn build:debug
yarn pack  # this creates a tar file (e.g. firebase-firestore-v3.4.4.tgz)
cd ~/firestore-team/web
npm install firebase-firestore-v3.4.4.tgz
```

## Formatting Code

This repository uses "prettier" to format the code.
To run the code formatter, simply run

```
npm run prettier
```

## Firebase Imports

Note that importing the Firebase modules is done using the `firebase/firestore`
import, rather than the `@firebase/firestore` import. That is, the leading `@`
is omitted. This is the recommended best practice.

See go/firebase-js-sdk-module-resolution for details.
