// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyB88gw0e00gxkfk_UkuaBGzg3sVEn1K-e8',
    authDomain: 'software-educativo.firebaseapp.com',
    databaseURL: 'https://software-educativo.firebaseio.com',
    projectId: 'software-educativo',
    storageBucket: 'software-educativo.appspot.com',
    messagingSenderId: '736211121093'
  }
};
