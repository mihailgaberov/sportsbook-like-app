# Addison Global Sportsbook

A React single page application (SPA) built with the following technologies:
- React with TypeScript (`create-react-app my-app --scripts-version=react-scripts-ts`)
- xState
- Jest/Enzyme/Sinon

### Screenshots
![screenshot](https://github.com/mihailgaberov/addisonglobal-fe-tech-test/blob/master/screenshots/with-empty-opened-betslip.png)
![screenshot](https://github.com/mihailgaberov/addisonglobal-fe-tech-test/blob/master/screenshots/with-closed-betslip.png)
![screenshot](https://github.com/mihailgaberov/addisonglobal-fe-tech-test/blob/master/screenshots/selection-events-view.png)
![screenshot](https://github.com/mihailgaberov/addisonglobal-fe-tech-test/blob/master/screenshots/added-selections-betslip.png)

## Application features:
- Events View
  1. Displays all sport events which have at least 1 market available
  2. Allows the user to add selections to betslip
  3. Allows the user to remove selections from betslip
  4. Highlights/unhighlights the selection buttons
- Betslip
    1. Lists added selections
    2. Allows removing selections with 'remove' button.
    3. Can be closed and opened again with 'x' and 'Open Betslip buttons
    4. Has connection with Events View - when selection is removed from here, it's unhighlighted in the Events View
 
### Demo
:star: [https://compassionate-almeida-e8027a.netlify.com/](https://compassionate-almeida-e8027a.netlify.com/) :star:

### Running The App locally

To run the app, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed.
2. Install [yarn](https://yarnpkg.com/lang/en/).
3. From the project folder, execute the following commands:

To install dependencies:
```shell
  yarn install
```
To run the client app:

```shell
  yarn start
```
To run the tests:

```shell
  yarn test
```
Browse to [http://localhost:3000](http://localhost:3000) and see the running app. 
 


### Resources
- https://www.typescriptlang.org/docs/handbook/decorators.html
- http://www.typescriptlang.org/
- http://www.typescriptlang.org/docs/handbook/compiler-options.html
- http://www.typescriptlang.org/docs/handbook/tsconfig-json.html
- https://github.com/Microsoft/TypeScript-React-Starter
- https://jonbellah.com/articles/intro-state-machines/
- https://musing-rosalind-2ce8e7.netlify.com
- http://gameprogrammingpatterns.com/state.html

MIT License

Copyright (c) 2019 Mihail Gaberov

