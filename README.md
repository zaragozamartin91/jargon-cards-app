# jargon-cards-app

App for expanding one's vocabulary and learn new words using quick language cue cards

Main app is accessible from https://zaragozamartin91.github.io/jargon-cards-app/

## Navigate source code

`src/` holds the app's source code.

`docs/` contains the bundled sources

## Debugging & smoke testing

Uncomment the line `<script src="http://localhost:8097"></script>` in the docs/* HTML files

Launch react devtools by running `npm run react-devtools`

Launch the app locally by running `npm run serve-dev` or by running `npm run serve`

## Bundling and releasing

Generate bundled sources by running
* `npm run build-dev` for development
* `npm run build-prod` for production

The `docs/bundle.js` file is generated.

Frontend entrypoint is `docs/index.html` which in turn relies on  `docs/bundle.js` for running App logic.

Run `npm run build-prod` before pushing a new branch.

## Start firebase emulator

Run `npm run firebase-emulators` to start the Firebase emulator

The emulated services are hosted in `http://127.0.0.1:4000`

Data is imported and exported from/to the firebase-saved-data dir

**NOTE: It seems like npm run serve-dev is no longer compiling components correctly...**
Maybe it has to do with the split webpack configuration.
The issue could be solved with this: https://stackoverflow.com/questions/31844343/how-to-use-webpack-dev-server-multiple-entries-point 

## Localhost vs Network host

Accessing the app locally holds different behaviors depending on the endpoint or host from which it is accessed:
- localhost: Firebase emulator resources are consumed
- network address (eg. 192.168.68.109): Firebase app "jargon-cards.firebaseapp.com" is consumed

## Firebase access restriction

Access to firebase resources can be restricted or limited from the google developers console.

From stack overflow: https://stackoverflow.com/questions/35418143/how-to-restrict-firebase-data-modification

* Visit https://console.developers.google.com/apis
* Go to your firebase project
* Go to credentials
* Under API keys, select the Browser key associated with your firebase project (should have the same key as the API key you use to initialize your firebase app.)
* Under "Accept requests from these HTTP referrers (web sites), simply add the URL of your app.

## Dictionaries and freedict

Dictionaries can be downloaded from https://freedict.org/downloads/

Dictionaries are encoded into [TEI format](https://cdrh.unl.edu/articles/basicguide/TEI) (Xml format)

The TEI file was parsed using [xml-js](https://www.npmjs.com/package/xml-js).

The scprit for parsing the TEI file can be found in `src/poc/read_xml.js`.
