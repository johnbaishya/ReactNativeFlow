# React Native Flow

React Native Flow is a starter project for building React Native apps. It provides a solid foundation with a pre-configured folder structure, Redux for state management, authentication flow, navigation based on the authentication state, and REST API integration using Axios. This project helps you jump-start your React Native development by focusing on best practices for scalable app architecture, seamless authentication flow, and clean code structure.
## Features 
- **Folder Structure:** A scalable and organized folder structure for better maintainability. 
- **Redux Setup:** Pre-configured Redux for efficient state management. 
- **Authentication Flow:** A complete authentication flow for user login and registration.
- **Navigation:** Navigation setup based on authentication state (authenticated and unauthenticated users).
 
## Libraries Implemented

This project is built with a carefully selected set of libraries to enhance development efficiency and maintain a clean architecture. Below are the major libraries implemented:

- **[@react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/)**: ^2.1.0  
  For persisting small amounts of data locally, such as user authentication tokens.

- **[@react-navigation/native](https://reactnavigation.org/)**: ^7.0.14  
  For managing app navigation, including stack, tab, and drawer navigators.

- **[@react-navigation/native-stack](https://reactnavigation.org/docs/native-stack-navigator/)**: ^7.2.0  
  Provides an easy-to-use API for stack navigation.

- **[@reduxjs/toolkit](https://redux-toolkit.js.org/)**: ^2.5.0  
  Simplifies Redux setup with slices, middleware, and less boilerplate.

- **[axios](https://axios-http.com/)**: ^1.7.9  
  For making HTTP requests with centralized configuration and interceptors.

- **[react](https://react.dev/)**: 18.3.1  
  The core library for building user interfaces in React Native.

- **[react-native](https://reactnative.dev/)**: 0.76.6  
  The core framework for building native apps with React.

- **[react-native-modal](https://github.com/react-native-modal/react-native-modal)**: ^13.0.1  
  Provides customizable modal components for React Native.

- **[react-native-paper](https://callstack.github.io/react-native-paper/)**: ^5.12.5  
  A material design library for building visually appealing React Native apps.

- **[react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)**: ^5.0.0  
  Provides safe area handling for various devices.

- **[react-native-screens](https://github.com/software-mansion/react-native-screens)**: ^4.4.0  
  Optimizes screen rendering and improves performance in navigation.

- **[react-redux](https://react-redux.js.org/)**: ^9.2.0  
  Integrates Redux with React for efficient state management.

- **[redux](https://redux.js.org/)**: ^5.0.1  
  A predictable state container for JavaScript apps.



Each library is included with its specified version to ensure compatibility and stability within the project.

These libraries are pre-configured to streamline development while maintaining flexibility for scaling the app.


## Installation 
### Prerequisites Ensure you have the following installed: 
- **Node.js** (preferably the latest stable version) 
- **Android Studio** (for Android development) or **Xcode** (for iOS development) 
- For a complete guide on setting up your development environment, refer to the official [React Native Documentation](https://reactnative.dev/docs/environment-setup).
### Step 1: 
- Clone the Repository 

  - ``` git clone https://github.com/your-username/react-native-flow.git```
  - ``` cd react-native-flow ``` 
### Step 2: Install Dependencies 
- ``` npm install ``` 
### Step 3: 
Set Up Android or iOS Environment Follow the official React Native documentation to set up your Android or iOS development environment: - [Android Setup](https://reactnative.dev/docs/environment-setup#android-development-environment) - [iOS Setup](https://reactnative.dev/docs/environment-setup#ios-development-environment) 
### Step 4: Run the Project:
 -  **For android :**``` npx react-native run-android ``` 
 - **For iOS:** ``` npx react-native run-ios ``` 
## Folder Structure 
The folder structure is designed to keep the project modular and easy to scale. Here's a quick overview: 
- **/android**: Contains Java and Kotlin code, along with files specific to the Android platform for building and running the app.
- **/ios**: Contains Objective-C or Swift code, along with files specific to the iOS platform for building and running the app.
- **/src**  
  - **/Assets**: Contains images, fonts, and other static assets.  
  - **/Components**: Reusable UI components used across the app.  
  - **/Config**: Centralized configuration methods and settings for the app, such as                                                                      environment-specific configurations, app-wide preferences, and setup functions.  
  - **/Constants**: Global constants and enums used throughout the app.  
  - **/Controller**: Manages the business logic and workflows of the app.  
  - **/Hooks**: Custom React hooks for encapsulating reusable logic.  
  - **/Libs**: Wrappers or integrations for third-party libraries.  
  - **/redux**: Contains the Redux store and slices for state management, utilizing Redux Toolkit to streamline the process of defining state and handling actions.  
  - **/navigation**: Navigation setup, including stack and tab navigators.  
  - **/screens**: Individual screens or pages of the app.  
  - **/services**: Handles API calls, authentication, and backend interactions.  
  - **/Styles**: Shared and reusable styles for consistent design.  
  - **/Types**: TypeScript types, interfaces and Enums for static type checking and better code maintainability.  
  - **/utils**: Helper functions and utility methods to simplify common tasks.  
- **index.js**: The entry point for React Native's JavaScript code. This file is responsible for registering the main **App** component
- **App.tsx**: The main application component where the app's root component is defined.
- **package.json**: The configuration file that contains project metadata, dependencies, and scripts for running, building, and managing the app.


## Authentication Flow 
The app includes a simple authentication flow with: 
- **Login Screen**: User can log in with their credentials. 
- **Registration Screen**: New users can sign up. 
- **AuthConfig**: Tracks user authentication state. 
- **AuthService**: services to Authenticate and Unauthenticate the app
- **Authenticated Routes**: Screens that are only accessible after authentication. 

The authentication flow is also dependent on the response of REST API services (with user and token) , such as Login api, Register api etc. and is connected with Redux to manage the logged-in user state across the app. 

## Navigation 
Navigation is set up using **React Navigation**. It includes: 
- **Authenticated Stack**: A stack of screens that users can access after logging in. 
- **Unauthenticated Stack**: A stack of screens shown to users before they log in (e.g., login and registration). 

The navigation stack changes dynamically based on the authentication state. 
## Contributing 
If you'd like to contribute to the project, feel free to fork the repository and submit a pull request. Contributions are welcome! 
### Steps for contributing: 
1. Fork the repository 
2. Create a new branch (`git checkout -b feature-branch`) 
3. Make your changes 
4. Commit your changes (`git commit -am 'Add new feature'`) 
5. Push to the branch (`git push origin feature-branch`) 
6. Create a new pull request 
## License 
This project is licensed under the MIT License 
- see the [LICENSE](./LICENSE) file for details. 

Feel free to clone, contribute, or use this project!

