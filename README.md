[![Node.js CI](https://github.ncsu.edu/Online-Classroom-SE510/CSC510-SE-Project/actions/workflows/node.js.yml/badge.svg)](https://github.ncsu.edu/Online-Classroom-SE510/CSC510-SE-Project/actions/workflows/node.js.yml)
![Branches](coverage/badge-branches.svg)
![Functions](coverage/badge-functions.svg)
![Lines](coverage/badge-lines.svg)
![Statements](coverage/badge-statements.svg)

# CSC510 SE Project: Online Classroom

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

**FOR GRADING**: The scenarios for this project are based on this following PowerPoint: https://docs.google.com/presentation/d/1zmKTatbqiNn-THS4n9kvvlkrjHaVu_oTuYpLMYuJ_yw/edit?usp=sharing

**Documentation of Changes**:
1. Feature 1:
- Added additional fields for the Admin to fill out when creating a course. The new fields are Professor ID (instead of Professor name), Max number of seats, course description, teaching method, course credits, course term, and course time.
- There is no checkboxes for selecting Days of the Week, instead all of the information is through a drop down menu with preset Days of the Week.
- There are now preset times for start and end time of a class.

2. Feature 2:
- Credits are displayed as well when a Student is on the "Enroll a Class" page.

3. Feature 3:
- The "My Current Courses" tab is instead replaced with a "View Class Details" button.
- There is no "View Course Information" button, but a Tab that shows the course information and course roster.

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
## Angular Commands (For Developers)

Adding a new Angular component
```bash
ng generate component <component-name>
```
