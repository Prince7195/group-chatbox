Check live: https://prince7195.github.io/group-chatbox/

# SimpleAFBChatBox

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. If faced any compiling error use `ng serve --aot`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

# Issues Faced due to Angular Update to 5

1) Using the firebase and angularfire2, AngularFireDatabase, FirebaseListObservable should be imported from "angularfire2/database-deprecated" insted of "angularfire2/database".

2) Using the firebase and angularfire2, while importing AngularFireModule, AngularFireDatabaseModule, AngularFireAuthModule, from angularfire2 we have to import AngularFireDatabase from "angularfire2/database-deprecated" and give it in the providers in app.module.ts
