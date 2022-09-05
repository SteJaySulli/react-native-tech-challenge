# React Tech Challenge

## Background Questions

**Question 1**: 
Please explain what is wrong with this code and what the observed behaviour might be in a component that included it:
```javascript
this.setState({count: this.state.count + 1});
```

**Answer 1**: 
Because `this.setState()` could be called asynchronously, the contents of `this.state.count` may not be the up-to-date value that is expected, meaning that the count may not be updated correctly. This could lead to a bug where the count would occasionally fail to be incremented, and this may not be obvious to the end user making for a hard bug to track down. The correct solution to this issue is to use a function argument to `setState` which passes the state and props in as arguments, ensuring that the contents is reliable for the execution flow.

**Question 2**: 
Can you please explain how redux works, assuming you were talking to a non-technical audience.

**Answer 2**: 
Redux manages data which an application needs to function. It works by ensuring data is centralised (held together in one place), and ensuring that any changes to that data are done in a uniform and reliable way. This has the effect of making sure that the data the app relies on is always in a state that is ready to be used, and because operations using that data are done in a uniform way, it reduces the chances for error along the way.

## Developer Notes

* I have opted to use Expo rather than raw React Native for this project. 
  * This is more familiar to me and makes it quicker and easier to get results in the limited time I have available.
  * I do not own or have access to any Apple devices. Without using Expo I would not be sure that my application would be able to target iOS
  * Due to time constraints, I have used Expo's scaffolding to base this project upon
* While my installation instructions are "from scratch", they do assume that suitable development environments are already installed - this means:
  * For iOS, you are working on an Apple device and this has Xcode installed and correctly configured
  * For Android, you have Android Studio installed and correctly configured
  * In both cases you already have Node & NPM installed
* I am using Node version 16. I believe this should work with any node version from 14 onwards, but I cannot guarantee it.
* I am unable to use simulators, I have used a real Android device for development.
  * This is because the Android simulator requires libvirt to run, and this conflicts with my day-to-day development virtual machine which is hosted in VirtualBox.
  * I am unable to run an iOS simulator as this requires an Apple device. Again, I do not own or have access to an iPhone or iPad.
* I had a number of problems finding a suitable chart library that would work for React Native and Expo
  * Chart.js seems to only be for React, not React native
  * I settled on react-native-chart-kit
  * I could not find a way to colour the lines differently
* I have spent just over 4 hours on this project from start to finish

## Data seeding

I have written a seeder, `make-data.mjs`. This creates the `data.json` file. 

I have included the `data.json` file so you should not need to run the seeder, but have included the file so that you can see how it works.

If you wish to re-seed the data, simply run `node ./make-data.mjs` from this directory.

## Installation

* Open a terminal and `cd` to this directory
* Install the required software by running `npm install`

## Running using a real device and the Expo Go app

* Install the latest Expo Go app on your device via the appropriate app store for your device
* Run `npx expo start -c`
* A QR code will be displayed in the console; you may need to scroll up in order to get the whole QR code into view
* On iOS:
  * Open the camera and point it at the QR code displayed in the console.
  * When the QR code is recognised, tap the link to open Expo Go and start the app
* On Android:
  * Open the expo go app and click "Scan QR Code"
  * Point the camera at the QR code displayed in the console

## Running on an iOS simulator

* Ensure Xcode is correctly installed
* Type `npx expo run:ios` to start the app in a simulator

## Running on an Android emulator

* Ensure Android Studio is correctly installed
* Type `npx expo run:android` to start the app in a simulator

## Running the metro server interactively

* If you type `npx expo start -c` the metro server will be started
* You can launch the app on an Android or iOS device by pressing the appropriate key as shown in the console

