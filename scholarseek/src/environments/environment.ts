// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiScholarseek: 'http://scholarseek.atspace.cc/db_connect.php',
  apiUrl: 'https://newsapi.org/v2',
  apiKey: '1f30838ed44f4be2a061c82ee4cd1a8d',
  firebase: {
    apiKey: "AIzaSyBuoN3-VKaGWRa8dUPCccPeD9z7tzQytu0",
    authDomain: "scholarseek-dd1.firebaseapp.com",
    databaseURL: "https://scholarseek-dd1.firebaseio.com",
    projectId: "scholarseek-dd1",
    storageBucket: "scholarseek-dd1.appspot.com",
    messagingSenderId: "81944562574"
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
