# Cordova-react-redux
A simple react redux starter kit for cordova

## Installation
`npm install`

## Get started
Build add your cordova platforms as follows:

### Android
`cordova platform add android --save`

### IOS
`cordova platform add ios --save`

## Install pre-requisites for building
To build and run apps, you need to install SDKs for each platform you wish to target. Alternatively, if you are using browser for development you can use browser platform which does not require any platform SDKs.

To check if you satisfy requirements for building the platform:
```shell
$ cordova requirements
Requirements check results for android:
Java JDK: installed .
Android SDK: installed
Android target: installed android-19,android-21,android-22,android-23,Google Inc.:Google APIs:19,Google Inc.:Google APIs (x86 System Image):19,Google Inc.:Google APIs:23
Gradle: installed

Requirements check results for ios:
Apple OS X: not installed
Cordova tooling for iOS requires Apple OS X
Error: Some of requirements check failed
```



## Starting the dev environment
Once thats done you can start the app in development mode as follows:

`npm start`
Then navigate open your browser at `http://localhost:9000`


## Build this application

Run the following to compile your assets into the `/www` folder
```shell
$ npm run build
```


Run the following command to build the project for all platforms:

```shell
$ cordova build
You can optionally limit the scope of each build to specific platforms - 'ios' in this case:

$ cordova build ios
```


### Test the App
Run a command such as the following to rebuild the app and view it within a specific platform's emulator:

```shell
$ cordova emulate android
```
