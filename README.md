<div align="center">
  <a href="https://github.com/nebuleia/nebulei-auth">
    <img src="assets/Nebulei-Auth.svg" alt="Logo" width="" height="200">
  </a>
</div>

# Nebulei AUTH

This repo contains the source code of the authentication for nebulei.com

## Getting started

### Prerequisites

1. Git
1. Node: any 12.x version starting with v12.0.0 or greater
1. Yarn v1: See [Yarn website for installation instructions](https://yarnpkg.com/lang/en/docs/install/)
1. A fork of the repo (for any contributions)
1. A clone of the [nebulei auth repo](https://github.com/nebulei/nebulei-auth) on your local machine

### Installation

1. `cd nebulei-auth` to go into the project root
1. `yarn install` to install the website's npm dependencies

### Running locally

1. `yarn start` to start the hot-reloading development server 
1. `open http://localhost:3000` to open the site in your favorite browser

## Contributing

### Guidelines

The documentation is divided into several sections with a different tone and purpose. If you plan to write more than a few sentences, you might find it helpful to get familiar with the [contributing guidelines](https://github.com/nebulei/nebulei-auth) for the appropriate sections.

### Create a branch

1. `git checkout main` from any folder in your local `reactjs.org` repository
1. `git pull origin main` to ensure you have the latest main code
1. `git checkout -b the-name-of-my-branch` (replacing `the-name-of-my-branch` with a suitable name) to create a branch

### Make the change

1. Save the files and check in the browser
  1. Changes to React components in `src` will hot-reload

### Push it

1. `git add -A && git commit -m "My message"` (replacing `My message` with a commit message, such as `Fix header logo on Android`) to stage and commit your changes
1. `git push my-fork-name the-name-of-my-branch`
1. Go to the [nebulei-auth repo](https://github.com/nebulei/nebulei-auth) and you should see recently pushed branches.
1. Follow GitHub's instructions.
1. If possible, include screenshots of visual changes. A preview build is triggered after your changes are pushed to GitHub.
