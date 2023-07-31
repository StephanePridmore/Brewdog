# Getting Started with Brewdog's App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Brewdog's App uses the api of https://www.punkapi.com/documentation/v2 to load beers and display them in the main page.

The second page displays a list of billable members with the circular dependencies than was found in the members list.

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test-ci`

Launches the test runner only once. Used by CI/CD pipelines

### `npm run lint`

Launches the linter and analyze the project with eslint and prettier. It is possible to configure VsCode to format when saving changes to a file by using the extensions EsLint and Prettier. see: https://www.alphr.com/use-prettier-vs-code/

### `npm run e2e`

Launches the e2e tests that are located in cypress/ folder. It must be executed in conjunction with the
command `npm run start` in another terminal for the website to be tested by cypress.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run check`

Runs the command "npm run lint && npm run test-ci && npm run build" in sequence. Useful before pushing changes in order to check that everything is fine and ready for CI/CD pipelines.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
