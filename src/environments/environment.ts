// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  firebase: {
    apiKey: 'AIzaSyCivTJgOQEpRhfoAcDOdFThaRE9aoYjbZs',
    authDomain: 'formula-2e51d.firebaseapp.com',
    databaseURL: 'https://formula-2e51d.firebaseio.com',
    projectId: 'formula-2e51d',
    storageBucket: 'formula-2e51d.appspot.com',
    messagingSenderId: '652017075015',
    appId: '1:652017075015:web:e9b54896553f0dbff00262',
    measurementId: 'G-K0NBX7LCXL'
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
