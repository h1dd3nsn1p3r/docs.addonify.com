# docs.addonify.com

This is the official documentation site for [Addonify products](https://docs.addonify.com/). Here you will find all the necessary information to get started with Addonify products along with the developer documentation. 

## Installation

Use the package manager [npm](https://www.npmjs.com/) or pnpm to install the dependencies. Once you are in the root directory of the project, run the following command:

```bash
npm install or pnpm install
```

Once the dependencies are installed, you can run the following command to start the development server:

```bash
npm run dev or pnpm run dev
```

### How to write documentation?

This documentation app is powered by React JS, Next JS and Nextra. You can write documentation in markdown format. The markdown files are located in the `pages` directory. [Nextra](https://nextra.site/docs) also includes some build-in components that you can use to enhance the documentation.

### Branches

We mainly use two branches for development and deployment. The `production` branch is used for deployment and the `editorial` branch is used for development. Whenever you want to make changes to the documentation, create a new branch from the `editorial` branch and create a pull request to merge the changes to the `editorial` branch. Once the changes are reviewed, they will be merged to the `production` branch and deployed to the live site.

### Deployment

The documentation is deployed to Cloudflare pages using the wrangler action by Github action under the hood. The deployment is automated and whenever changes are merged to the `production` branch, the site is automatically deployed to the production environment. 

Hence, you don't need to worry about the deployment process. Just focus on writing the documentation and creating pull requests.



