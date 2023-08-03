[![Node.js CI](https://github.ncsu.edu/Online-Classroom-SE510/CSC510-SE-Project/actions/workflows/node.js.yml/badge.svg)](https://github.ncsu.edu/Online-Classroom-SE510/CSC510-SE-Project/actions/workflows/node.js.yml)
![Branches](coverage/badge-branches.svg)
![Functions](coverage/badge-functions.svg)
![Lines](coverage/badge-lines.svg)
![Statements](coverage/badge-statements.svg)

# CSC510 SE Project: Online Classroom
This is Software Engineering at the graduate level. There are pictures below showing the application and beneath that is installation information.

## Team

* **Indira Pimpalkhare** - ipimpal@ncsu.edu
* **Alex Taylor** - aktaylo4@ncsu.edu
* **Jeffrey Zeng** - jzeng4@ncsu.edu
* **Aishwarya Majumdar** - amajumd4@ncsu.edu
* **Vinay Vobbilichetty** - vvobbil@ncsu.edu

## About

Online Classroom is an application developed using Software As a Service to organize a classroom environment. 

In this application, there are three roles: Admin, Teacher, and Student. 
- For an Admin, the main function that we will be implementing is the ability to create a course. 
- For a Teacher, the main functionality that we will implement is the ability to add a student to their class.
- For the Student role, the main functions are the ability able to enroll in classes. Students may also drop classes and add posts to assignments. 

This project is developed using the following tool:
- This project utilizes a NodeJS backend utilizing an Express framework.
- The frontend of the Project is developed using HTML, CSS, and TypeScript through the Angular front end.

### Admin Home Screen:
![Admin Home Screen](https://github.com/alex-taylor458/CSC510-SoftwareEngineering/assets/40243091/2a517466-a32a-40d8-bdbc-3d47143b6401)

### Teacher Home Screen:
![Teacher Home Screen](https://github.com/alex-taylor458/CSC510-SoftwareEngineering/assets/40243091/e13c85b2-f904-4711-aa61-e779361fa5c6)

### Student Home Screen:
![Student Home Screen](https://github.com/alex-taylor458/CSC510-SoftwareEngineering/assets/40243091/4fc9178f-1f59-47b0-a6ff-33dc15abb259)

### Class Details Page:
![Class Details](https://github.com/alex-taylor458/CSC510-SoftwareEngineering/assets/40243091/e50efc09-e86b-4818-a72d-e6c26f76f5d4)

### Add Student to Class:
![Add Student to Class](https://github.com/alex-taylor458/CSC510-SoftwareEngineering/assets/40243091/0ef1862f-fe30-47da-8dc8-5436471859ae)

### Create Course:
![Create Course](https://github.com/alex-taylor458/CSC510-SoftwareEngineering/assets/40243091/683a9405-f0a0-44d8-931c-1809bd0ed72f)

## Installation
Make sure that you have NodeJS installed on your computer. To install, please go to:
https://nodejs.org/en/download

To set up the project, please run the following commands upon pulling from the GitHub repository:
```bash
npm install
# Installs needed dependencies

node models/database.js
# Intializes the sample dataset

```
All the assets for this project use the latest versions.

## Deployment
#### To run this application, two servers need to be run simultaneously - Angular (front-end) and Node + Express (back-end)

``` bash
npm start
# Runs the Node + Express server on localhost:8080
```

``` bash
npm run ng
# Runs the Angular server on localhost:4200
```

## Testing
To run the backend testing suite, run the following commands:

``` bash
npm run test:badges
# Runs the test frameworks inside __test__/ and generates badges
```

```bash
npm run test:ng_ui
# Runs UI tests within Angular Specs
```

```bash
npm run test:backend
# Runs Backened tests with jest
```

To run the frontend testing suite, please run the following commands:

Run the application as normal:
``` bash
npm start
# Runs the Node + Express server on localhost:8080
```

``` bash
npm run ng
# Runs the Angular server on localhost:4200
```

```bash
cd test-acceptance
# Goes to the testing directory
```
While in the `test-acceptance` directory:
```bash
npm install
# Installs needed test dependencies
```
```bash
npm run webdriver-update
npm run webdriver-start
````
You should see:

    INFO [SeleniumServer.boot] - Selenium Server is up and running on port 4444
```bash
npm test
````

