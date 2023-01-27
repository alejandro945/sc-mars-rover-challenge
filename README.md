# Southern Code Frontend Challenge 🚀

This repository is intended to build an application that will consume the NASA API, where image data has been collected by NASA's Curiosity, Opportunity and Spirit rovers on Mars.

## Requirements

1. Connects to the NASA API (https://api.nasa.gov/).
2. Obtains photos from the 'Mars Rover' endpoint.
3. Allows the user to see the photos of each rover (Curiosity, Opportunity and Spirit).
4. The photos list should be paginated showing a max of 25 photos per page (dynamic loading similar to facebook/instagram will be nice, but not required).
5. Allows the user to filter the rover photos by camera.
6. By default it shows the latest photos for current day.
7. Allows the user to search for photos based on 'Earth Day' date (2020-09-22).
8. Allows the user to search for photos based on the 'Sol' date (2890).
9. Test stage
10. Let the user store search parameters as favorites or bookmarks that can be recalled in the future (Local storage is accepted, any serverless way of storing data is also accepted).

## Development tools

For the construction of our project we will use the following tools that will optimize the development of the product, also we will provide some quality attributes that satisfy the tool.

- NextJS **next**: Is an open source React front-end development web framework created by Vercel that enables functionality such as server-side rendering and static website generation for React-based web applications. Some of the reasons why we decided to use it in the project is automatic code division that provides smart enough to load only the Javascript and CSS needed for a given page. (Efficiency and performance)

- Eslint **eslint-config-next eslint**: Is a static code analysis tool for identifying problematic patterns found in JavaScript code covers both code quality and coding style issues (Reliability and Maintainability)

- Axios and SWR **axios swr**: SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data (Reactive Principle). Also axios is a simple promise based HTTP client for the browser (Security and Efficiency).

- Typescript **typescript**: Programming language that it's a superset of JavaScript, essentially adding static types and class-based objects. (Robustness and Testability)

- Chakra **@chakra-ui/react @emotion/react @emotion/styled framer-motion**: Is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications. (Usability and agility)

- Playwright **@playwright/test**: To determine whether the flow of an application from start to finish proceeds as expected. Also, End-to-end testing helps you test your app’s user experience by simulating real-world scenarios (Testability).

## Getting started

After cloning the repository we must install project dependencies declared in our ``package.json`` file. You can use your favorite node package manager.

### Installation

``` bash
$ npm install
```

### Running the app

```bash
# development
$ npm run dev

# build app
$ npm run build

# linting
$ npm run lint

# testing
$ npm run test

# production mode
$ npm run start
```

## Folder Structure

```bash
ttt-auth-microservice
  |- node_modules
  |- public
  |- src
     |- components
        |- common
        |- layout
     |- constants
     |- consumers
     |- hooks
     |- interfaces
     |- pages
     |- storage
     |- types
  |- test
  .eslintrc.json
  .gitignore
  next.config.js
  package.json
  tsconfig.json
  README.md
```

## Design Principle

Our goal is to design simple, composable components that cater to real-life UI design problems.

- Composition: Break down components into smaller parts with minimal props to keep complexity low, and compose them together. This will ensure that the styles and functionality are flexible and extensible.

- Accessibility: When creating a component, keep accessibility top of mind. This includes keyboard navigation, focus management, color contrast, voice over, and the correct aria-* attributes.

## Exploring the API endpoint

According to the API docs already provided by NASA, you can get all Perseverance's latest photos from this URL:

```bash
https://api.nasa.gov/mars-photos/api/v1/rovers/
```



## Application Flow Diagram

