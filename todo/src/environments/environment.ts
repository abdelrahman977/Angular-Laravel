// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyAWi5ti3bP5MfjQZYaQo2xECrMH2P8kT4U",
    authDomain: "todo-16172.firebaseapp.com",
    databaseURL: "https://todo-16172.firebaseio.com",
    projectId: "todo-16172",
    storageBucket: "todo-16172.appspot.com",
    messagingSenderId: "659738361804"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
