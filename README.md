## Portfolio
My personal portfolio web page
## About the project
This project consists on a web page running in the **React** framework, the components are built using the **typescript** language, the deployment is automated using **Github Actions**, once a commit is made to the main branch or another branch is merged onto it, the project is built and deployed on **Github Pages**.
 
The result can be seen in:
[https://pablorius.github.io/Portfolio/](https://pablorius.github.io/Portfolio/)

### Contents
The main page features an introduction of myself with: 
- A link to my contact email.
- A button to download my resume.
- A series of icons that redirect the user to my social accounts.
- A carousel coded from scratch showcasing some of my public prjects using the github api to gather a list of my public projects.
- A content drawer to access the rest of the pages.

The projects page contains a grid view of my public projects using the same method as the main page to gather them.
- In this page the user can click on any of the projects to visualize a deeper description of it, this is done, again, using the github api to retrieve the content of the project's readme.md, decode it, convert it to a readable format, and insert it into a html component.

## Available Scripts

In the project directory, you can:
### Run the project
The dependencies must be installed first, to do so:
```bash
npm install
```
The dependencies form the included package.json will be installed, once it's done you can run the applcation with:
```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000/Portfolio](http://localhost:3000/Portfolio) to view it in your preferred browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Build the project 
```bash
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Tech stack used
<div style="display: flex; flex-direction:row; column-gap: 10px">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" height="50px" width="50px" />
    <img src="https://static-00.iconduck.com/assets.00/typescript-icon-icon-1024x1024-vh3pfez8.png" height="50px" width="50px" />
    <img src="https://me-dutour-mathieu.gallerycdn.vsassets.io/extensions/me-dutour-mathieu/vscode-github-actions/3.0.1/1596182639279/Microsoft.VisualStudio.Services.Icons.Default" height="50px" width="50px" />
</div>