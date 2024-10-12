# Social-Network

This project is a robust, production-ready web application boilerplate. It is built with modern technologies like React, TypeScript, Webpack, and Storybook. It also includes a comprehensive testing setup with Jest and Loki, and it enforces code quality with ESLint and Stylelint.

## Table of Contents

- [Social-Network](#social-network)
  - [Table of Contents](#table-of-contents)
  - [Online Links](#online-links)
  - [Getting Started](#getting-started)
  - [Features](#features)
  - [Available Scripts](#available-scripts)
  - [Project architecture](#project-architecture)
  - [Working with Translations](#working-with-translations)
  - [Tests](#tests)
  - [Linting](#linting)
  - [Storybook](#storybook)
  - [Project Configuration](#project-configuration)
  - [CI Pipeline and Pre-commit Hooks](#ci-pipeline-and-pre-commit-hooks)
  - [Working with Data](#working-with-data)
  - [Entities](#entities)

## Online Links

Frontend - [https://enchanting-frangipane-99052e.netlify.app/](https://enchanting-frangipane-99052e.netlify.app/)\
Backend - [https://social-network-backend-phi.vercel.app/](https://social-network-backend-phi.vercel.app/)

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```sh
git clone git@github.com:DILLIR/social-network.git
npm install
npm run start:dev or npm run start:dev:vite
```

## Features

-   **React**: A JavaScript library for building user interfaces.
-   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
-   **Webpack**: A static module bundler for modern JavaScript applications.
-   **Storybook**: An open-source tool for developing UI components in isolation.
-   **Jest**: A delightful JavaScript Testing Framework with a focus on simplicity.
-   **Loki**: A visual regression testing tool for Storybook.
-   **ESLint**: A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
-   **Stylelint**: A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.

## Available Scripts

In the project directory, you can run:

-   `npm run start` - Starts the frontend project using webpack dev server
-   `npm run start:vite` - Starts the frontend project using Vite
-   `npm run start:dev` - Starts the frontend project with webpack dev server + backend
-   `npm run start:dev:vite` - Starts the frontend project with Vite + backend
-   `npm run start:dev:server` - Starts the backend server
-   `npm run build:prod` - Builds the project in production mode
-   `npm run build:dev` - Builds the project in development mode (not minified)
-   `npm run lint:ts` - Lints TypeScript files
-   `npm run lint:ts:fix` - Fixes TypeScript files using the linter
-   `npm run lint:scss` - Lints SCSS files using a style linter
-   `npm run lint:scss:fix` - Fixes SCSS files using a style linter
-   `npm run test:unit` - Runs unit tests with Jest
-   `npm run test:ui` - Runs screenshot tests with Loki
-   `npm run test:ui:ok` - Approves new screenshots
-   `npm run test:ui:ci` - Runs screenshot tests in CI
-   `npm run test:ui:report` - Generates a full report for screenshot tests
-   `npm run test:ui:json` - Generates a JSON report for screenshot tests
-   `npm run test:ui:html` - Generates an HTML report for screenshot tests
-   `npm run storybook` - Starts Storybook
-   `npm run storybook:build` - Builds the Storybook project
-   `npm run prepare` - Prepares pre-commit hooks
-   `npm run generate:slice` - Script for generating FSD slices

## Project architecture

The project is written in accordance with the Feature Sliced Design methodology.

Link to the documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

## Working with Translations

The project uses the i18next library for handling translations.  
Translation files are stored in `public/locales`.

For a better experience, we recommend installing the i18next plugin for WebStorm/VSCode.

i18next Documentation - [https://react.i18next.com/](https://react.i18next.com/)

## Tests

The project uses 4 types of tests:

1. Regular unit tests with Jest - `npm run test:unit`
2. Component tests with React Testing Library - `npm run test:unit`
3. Screenshot testing with Loki - `npm run test:ui`
4. End-to-end (e2e) testing with Cypress - `npm run test:e2e`

## Linting

The project uses ESLint for checking TypeScript code and Stylelint for checking style files.

Additionally, for strict control over the main architectural principles, a custom ESLint plugin, _eslint-plugin-fs-path-checker_, is used. This plugin includes 3 rules:

1. `path-checker` - Prohibits using absolute imports within the same module.
2. `layer-imports` - Ensures the correct use of layers according to the FSD methodology
   (e.g., widgets cannot be used in features and entities).
3. `public-api-import` - Allows importing from other modules only through their public API. Includes auto-fix.

Running Linters

-   `npm run lint:ts` - Lint TypeScript files
-   `npm run lint:ts:fix` - Fix TypeScript files using the linter
-   `npm run lint:scss` - Lint SCSS files using a style linter
-   `npm run lint:scss:fix` - Fix SCSS files using a style linter

## Storybook

In the project, story cases are written for each component.  
Server requests are mocked using `storybook-addon-mock`.

The file with story cases is created next to the component with the `.stories.tsx` extension.

You can start Storybook with the command:

-   `npm run storybook`

Example of a story case file:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text'
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR
};
```

## Project Configuration

For development, the project contains 2 configs:

1. Webpack - `./config/build`
2. Vite - `vite.config.ts`

Both build tools are adapted to the main features of the application.

All configurations are stored in `/config`:

-   `/config/babel` - Babel configuration
-   `/config/build` - Webpack configuration
-   `/config/jest` - Test environment configuration
-   `/config/storybook` - Storybook configuration

In the `scripts` folder, you will find various scripts for refactoring, simplifying code writing, generating reports, etc.

## CI Pipeline and Pre-commit Hooks

GitHub Actions configuration is located in `/.github/workflows`.  
The CI runs all types of tests, project and Storybook builds, and linting.

In the pre-commit hooks, the project is checked with linters. Configuration is located in `/.husky`.

## Working with Data

Data interaction is done using Redux Toolkit.  
Reusable entities should be normalized using `EntityAdapter` whenever possible.

Server requests are made using [RTK Query](/src/shared/api/rtkApi.ts).

For asynchronously loading reducers (to avoid pulling them into the main bundle), the [DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx) is used.

## Entities

-   [Article](/src/entities/Article)
-   [Comment](/src/entities/Comment)
-   [Counter](/src/entities/Counter)
-   [Country](/src/entities/Country)
-   [Currency](/src/entities/Currency)
-   [Notification](/src/entities/Notification)
-   [Profile](/src/entities/Profile)
-   [Rating](/src/entities/Rating)
-   [User](/src/entities/User)
