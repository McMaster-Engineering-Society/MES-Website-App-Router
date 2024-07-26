## Getting Started

### Pre-requisites

The following are required to be installed on your system:

- [Node.js](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/downloads)
- [VSCode](https://code.visualstudio.com/download)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

_Note: Ensure that you select "Add to PATH" when installing Git, Node.js, if prompted_

### VSCode Extensions

The following extensions are required for the linting commit check:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Install the following extensions for a better development experience:

- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Babel JavaScript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel)
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)

### Installation

1. Clone the repository
2. Install pnpm

```bash
npm install -g pnpm
```

3. Install dependencies

```bash
pnpm install
```

4. Create a .env.local from the .env.example, and fill neccessary variables

5. Run the development server

```bash
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Branch and Commit Message Convention

**Branch**

Ensure that all your branches are named according to the following convention:

- `feature/<feature-name>` for new features
- `bugfix/<bug-name>` for bug fixes
- `improvement/<improvement-name>` for improvements
- `chore/<chore-name>` for chores

Ensure that the name of your branch is descriptive of the feature/bug/improvement/chore that you are working on, and is written in `kebab-case`.

Examples:

- `feature/add-login-page`
- `bugfix/fix-login-page`
- `improvement/update-login-page`
- `chore/update-readme`

**Commit Message**

This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages. Ensure that all your commit messages are written according to the following convention:

```
<type>: <description>
```

Where `type` is one of the following:

- `feat` for new features
- `fix` for bug fixes

Examples:

- `feat: add confirm password field`
- `fix: submit button not working`

### Development

#### Folder Structure

The following is the folder structure of the project:

```bash
.
├── .github
├── .husky
├── .vscode
├── node_modules
├── public
├── src
│   ├── __tests__
│   ├── components
│   ├── constants
│   ├── lib
│   ├── pages
│   ├── styles
```

The most important folders are:

- `node_modules` contains all the dependencies of the project. This folder is automatically generated when you run `yarn install`, and should not be manually edited.
- `public` contains all the static assets of the project. This includes images, fonts, etc.
- `src` contains all the source code of the project
  - `components` contains all the components of the project. These include any component that is used more than once in the project.
  - `constants` contains all the constants of the project
  - `lib` contains all the utility functions of the project
  - `pages` contains all the pages of the project. This is where you will be developing most of the website. Each file in this folder represents a sub-directory page in the website. For example, `bookings.tsx` would link to [https://www.macengsociety.ca/bookings](https://www.macengsociety.ca/bookings)
  - `styles` contains all the styles of the project

## Developer Notes

- `override.css` is to override library css classes
- NextUI is a great start for components

### Updating Council Member Information

Council member information is stored in the `src/constant/council/` directory, with each group of council members stored in each respectively named file.

Council members are formatted as follows:

````js
{
  firstName: 'John',
  lastName: 'Doe',
  position: 'AVP Academic Resources',
  program: 'Software & iBiomed Eng',## Getting Started

### Pre-requisites

The following are required to be installed on your system:

- [Node.js](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/downloads)
- [Chocolatey](https://chocolatey.org/install) (_This can be installed through the Node.js Installer_)
- [Yarn](https://yarnpkg.com/getting-started/install)
- [VScode](https://code.visualstudio.com/download)

_Note: Ensure that you select "Add to PATH" when installing Git, Node.js, and Yarn, if prompted_

### VScode Extensions

The following extensions are required for the linting commit check:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Install the following extensions for a better development experience:

- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Babel JavaScript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel)
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)

### Installation

1. Clone the repository

2. Install dependencies

```bash
yarn install
````

3. Run the development server

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Branch and Commit Message Convention

**Branch**

Ensure that all your branches are named according to the following convention:

- `feature/<feature-name>` for new features
- `bugfix/<bug-name>` for bug fixes
- `improvement/<improvement-name>` for improvements
- `chore/<chore-name>` for chores

Ensure that the name of your branch is descriptive of the feature/bug/improvement/chore that you are working on, and is written in `kebab-case`.

Examples:

- `feature/add-login-page`
- `bugfix/fix-login-page`
- `improvement/update-login-page`
- `chore/update-readme`

**Commit Message**

This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages. Ensure that all your commit messages are written according to the following convention:

```
<type>: <description>
```

Where `type` is one of the following:

- `feat` for new features
- `fix` for bug fixes

Examples:

- `feat: add confirm password field`
- `fix: submit button not working`

### Development

#### Folder Structure

The following is the folder structure of the project:

```bash
.
├── .github
├── .husky
├── .vscode
├── node_modules
├── public
├── src
│   ├── __tests__
│   ├── components
│   ├── constants
│   ├── lib
│   ├── pages
│   ├── styles
```

The most important folders are:

- `node_modules` contains all the dependencies of the project. This folder is automatically generated when you run `yarn install`, and should not be manually edited.
- `public` contains all the static assets of the project. This includes images, fonts, etc.
- `src` contains all the source code of the project
  - `components` contains all the components of the project. These include any component that is used more than once in the project.
  - `constants` contains all the constants of the project
  - `lib` contains all the utility functions of the project
  - `pages` contains all the pages of the project. This is where you will be developing most of the website. Each file in this folder represents a sub-directory page in the website. For example, `bookings.tsx` would link to [https://www.macengsociety.ca/bookings](https://www.macengsociety.ca/bookings)
  - `styles` contains all the styles of the project

## Developer Notes

- `override.css` is to override library css classes
- NextUI is a great start for components

### Updating Council Member Information

Council member information is stored in the `src/constant/council/` directory, with each group of council members stored in each respectively named file.

Council members are formatted as follows:

```js
{
  firstName: 'John',
  lastName: 'Doe',
  position: 'AVP Academic Resources',
  program: 'Software & iBiomed Eng',
  level: 2,
  email: 'avp.ar@macengsociety.ca',
  image: '/images/council/john-doe.jpeg',
  description: "Bio goes here",
},
```

However, appointed coordinators are formatted as follows:

```js
{
  name: 'John Doe',
  role: 'Mentorship Coordinator',
  image: '/images/council/john-doe.jpeg',
},
```

All images of council members are stored in the `public/images/council/` directory.

## Getting Started

### Pre-requisites

The following are required to be installed on your system:

- [Node.js](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/downloads)
- [Chocolatey](https://chocolatey.org/install) (_This can be installed through the Node.js Installer_)
- [Yarn](https://yarnpkg.com/getting-started/install)
- [VScode](https://code.visualstudio.com/download)

_Note: Ensure that you select "Add to PATH" when installing Git, Node.js, and Yarn, if prompted_

### VScode Extensions

The following extensions are required for the linting commit check:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Install the following extensions for a better development experience:

- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Babel JavaScript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel)
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)

### Installation

1. Clone the repository

2. Install dependencies

```bash
yarn install
```

3. Run the development server

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Branch and Commit Message Convention

**Branch**

Ensure that all your branches are named according to the following convention:

- `feature/<feature-name>` for new features
- `bugfix/<bug-name>` for bug fixes
- `improvement/<improvement-name>` for improvements
- `chore/<chore-name>` for chores

Ensure that the name of your branch is descriptive of the feature/bug/improvement/chore that you are working on, and is written in `kebab-case`.

Examples:

- `feature/add-login-page`
- `bugfix/fix-login-page`
- `improvement/update-login-page`
- `chore/update-readme`

**Commit Message**

This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages. Ensure that all your commit messages are written according to the following convention:

```
<type>: <description>
```

Where `type` is one of the following:

- `feat` for new features
- `fix` for bug fixes

Examples:

- `feat: add confirm password field`
- `fix: submit button not working`

### Development

#### Folder Structure

The following is the folder structure of the project:

```bash
.
├── .github
├── .husky
├── .vscode
├── node_modules
├── public
├── src
│   ├── __tests__
│   ├── components
│   ├── constants
│   ├── lib
│   ├── pages
│   ├── styles
```

The most important folders are:

- `node_modules` contains all the dependencies of the project. This folder is automatically generated when you run `yarn install`, and should not be manually edited.
- `public` contains all the static assets of the project. This includes images, fonts, etc.
- `src` contains all the source code of the project
  - `components` contains all the components of the project. These include any component that is used more than once in the project.
  - `constants` contains all the constants of the project
  - `lib` contains all the utility functions of the project
  - `pages` contains all the pages of the project. This is where you will be developing most of the website. Each file in this folder represents a sub-directory page in the website. For example, `bookings.tsx` would link to [https://www.macengsociety.ca/bookings](https://www.macengsociety.ca/bookings)
  - `styles` contains all the styles of the project

## Developer Notes

- `override.css` is to override library css classes
- NextUI is a great start for components

### Updating Council Member Information

Council member information is stored in the `src/constant/council/` directory, with each group of council members stored in each respectively named file.

Council members are formatted as follows:

```js
{
  firstName: 'John',
  lastName: 'Doe',
  position: 'AVP Academic Resources',
  program: 'Software & iBiomed Eng',
  level: 2,
  email: 'avp.ar@macengsociety.ca',
  image: '/images/council/john-doe.jpeg',
  description: "Bio goes here",
},
```

However, appointed coordinators are formatted as follows:

```js
{
  name: 'John Doe',
  role: 'Mentorship Coordinator',
  image: '/images/council/john-doe.jpeg',
},
```

All images of council members are stored in the `public/images/council/` directory.

level: 2,
email: 'avp.ar@macengsociety.ca',
image: '/images/council/john-doe.jpeg',
description: "Bio goes here",
},

````

However, appointed coordinators are formatted as follows:

```js
{
  name: 'John Doe',
  role: 'Mentorship Coordinator',
  image: '/images/council/john-doe.jpeg',
},
````

All images of council members are stored in the `public/images/council/` directory.
