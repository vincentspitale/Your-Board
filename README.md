## Contributors
This project was made by [Christopher Wu](https://github.com/Chris2W), [Kevin Cam](https://github.com/kev1n80), [Paul Chafetz](https://github.com/pjchafetz), and myself

## Inspiration
The COVID-19 pandemic and widespread isolation has taken its toll on millions of people, bringing with it loneliness and discontent. In these difficult times, we need a fast and easy way to bring people together, encourage support, and build a sense of community. With this goal in mind, we developed a Chrome extension, “Your Board.”

## What it does
"Your Board" is a chrome extension that replaces the New Tab page in the Chrome browser with a digital canvas where you can see messages and images from friends and family.

## How we built it
The technologies that we used are Chrome DevTools, React, and Tailwind Macro. We used Chrome’s DevTools in order to create a Chrome extension that can modify the New Tab page in the Chrome browser and turn it into a view of the user-selected Figma project, React for its ability to quickly create a scalable project and its functionalities such as reusable components, and Tailwind Macro a CSS library that promotes inline CSS styling in order to avoid creating unique class names for our styles.
React’s useState hook allowed us to keep track of various user data such as their Figma URL and their friends list which contains friend information such as their friend’s name and Figma URL. Finally, we leveraged a Storage object in order to save these aforementioned data locally. This allows users to exit the tab or browser and still have the data saved when they visit the New Tab page or their digital canvas again.

## Challenges we ran into
We had some trouble with Asynchronous calls, and React useState.
We wanted to save information in the local storage with the local state after updating it with useState; however, it is an asynchronous call that takes time to update. Thus, when it was time to execute the command to save the local state in the local storage, it would not save the most updated value. Also, when trying to modify our state that is of type array, we needed  to make a copy of it first before splicing it.

## Accomplishments that we're proud of
We’re proud of our advanced use of local storage to have a persistent interaction whenever a new tab is opened. We also managed to leverage the capabilities of Figma to create a new use case it wasn’t necessarily built to support.

## What we learned
We learned to utilize local storage for saving data after closing the browser, learned a new framework of CSS called Tailwind, and scaled our extension app via React.

## What's next for Your Board
In the future we could add the capability to have bookmarks and other relevant links appear in the new tab window alongside your friends list. 




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
