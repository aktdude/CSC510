const importCwd = require('import-cwd');
const { Given, When, Then } = importCwd('@cucumber/cucumber');
const { browser, $, element, by } = require('protractor');
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

Given(/^The app is up and running$/, async () => {
  await browser.get('http://localhost:4200/');
  await expect(browser.getTitle()).to.eventually.equal('Online Classroom');
});

Given(/^I see user buttons on the app's home page$/, async () => {
  expect(element(by.id('adminButton')).isPresent()).to.eventually.equal(true);
  expect(element(by.id('teacherButton')).isPresent()).to.eventually.equal(true);
  expect(element(by.id('studentButton')).isPresent()).to.eventually.equal(true);
});

When(/^I click the Student button$/, async () => {
  await element(by.id('studentButton')).click();
});

When(/^I click the Teacher button$/, async () => {
  await element(by.id('teacherButton')).click();
});

Then(/^I see the Student dashboard$/, async () => {
  expect(element(by.name('app-dashboard-student')).isPresent());
});

Then(/^I see the Teacher dashboard$/, async () => {
  expect(element(by.name('app-dashboard-teacher')).isPresent());
});

Given(/^I see a button titled 'Enroll in a class'$/, async () => {
  expect(element(by.id('add')).isPresent());
});

Given(/^I see a button titled 'Drop a class'$/, async () => {
  expect(element(by.id('drop')).isPresent());
});

When(/^I click the 'Enroll in a Class' button$/, async () => {
  await element(by.id('add')).click();
});

When(/^I click Details button of the first class$/, async () => {
  await element(by.id('class-details-0')).click();
});

When(/^I click the 'Drop a Class' button$/, async () => {
  await element(by.id('drop')).click();
});

Then(/^I can see a list of available classes to enroll to$/, async () => {
  await expect(element.all(by.repeater('res of results')).isPresent());
});

Then(/^I can see a list of enrolled classes$/, async () => {
  await expect(element.all(by.repeater('res of available')).isPresent());
});

Then(/^I see the class's details and a 'Add Student' button$/, async () => {
  await expect(element.all(by.id('close')).isPresent());
  await expect(element.all(by.id('addStudent')).isPresent());
});

When(/^I select the class "([^"]*)" using the check box$/, async (class_name) => {
  await element(by.id(class_name)).click();
});

When(/^I click the 'Enroll Selected Courses\?' button$/, async () => {
  await element(by.id('confirm-enrollment')).click();
});

When(/^I click the 'Drop Selected Courses\?' button$/, async () => {
  await element(by.id('confirm-drop-class')).click();
});

Then(/^I see an enrollment confirmation message 'Successfully Enrolled in Courses!'$/, async () => {
  await expect(element(by.id('enrollment-success')).isPresent());
});

Then('I see a class drop confirmation message {string}', async (message) => {
  await expect(element(by.id('drop-confirmation-message')).isPresent());
});

When(/^I click the Admin button$/, async () => {
  await element(by.id('adminButton')).click();
});

Then(/^I see the Admin dashboard$/, async () => {
  expect(element(by.name('app-dashboard-admin')).isPresent());
});

Given(/^I see a button 'Add Course'$/, async () => {
  expect(element(by.id('course')).isPresent());
});

When(/^I click the 'Add Course' button$/, async () => {
  await element(by.id('course')).click();
});

When(/^I click the 'Add Student' button$/, async () => {
  await element(by.id('addStudent')).click();
});

Then(/^I see the 'Add Course' form$/, async () => {
  await expect(element(by.id('add-course-form')).isPresent());
});

Then(/^I see a pane with list of students$/, async () => {
  await expect(element(by.id('add-student-form')).isPresent());
});

Then(/^I select the first student in the list$/, async () => {
    await element.all(by.id('student-row-1')).click();
});

When('I click the \'Add Selected to Class?\' button', async () => {
    await element.all(by.id('add-student-button')).click();
});

Then(/^I see a 'Student Successfully Added!' confirmation message$/, async () => {
    await expect(element.all(by.id('add-student-confirmation-message')).isPresent());
});

When('I try to add a new class with course name as {string}, professor ID as {int}, max seats as {int}, course description as {string}, teaching method as {string}, course credits as {int}, course term as {string}, course department as {string}, days of the week as {string}, class times as {string}',
  async (course_name, professor_id, max_seats, description, teaching_method, credits, course_term, department, days_of_the_week, class_times) => {
    await $('input[name=\'course_name\']').sendKeys(course_name);
    await $('input[name=\'professor_id\']').sendKeys(professor_id);
    await $('input[name=\'max_seats\']').sendKeys(max_seats);
    await $('textarea[name=\'description\']').sendKeys(description);
    await $('select[name=\'teaching_method\']').sendKeys(teaching_method);
    await $('select[name=\'credits\']').sendKeys(credits);
    await $('select[name=\'course_term\']').sendKeys(course_term);
    await $('input[name=\'department\']').sendKeys(department);
    await $('select[name=\'days_of_the_week\']').sendKeys(days_of_the_week);
    await $('select[name=\'class_times\']').sendKeys(class_times);

    await element(by.id('add-course-button')).click();
  });

Then(/^I see a confirmation message 'Successfully Added Course!'$/, async () => {
  await expect(element.all(by.id('success-confirmation-message')).isPresent());
});

Then(/^I select 'abcde' student'$/, async () => {
  await expect(element.all(by.id('success-confirmation-message')).isPresent());
});

When('I try to add a new class with course name as {string}, professor ID as {int}, max seats as {int}, course description as {string}, teaching method as {string}, course credits as {int}, course term as {string}, course department as {string}, days of the week as {string}',
  async (course_name, professor_id, max_seats, description, teaching_method, credits, course_term, department, days_of_the_week) => {
    await $('input[name=\'course_name\']').sendKeys(course_name);
    await $('input[name=\'professor_id\']').sendKeys(professor_id);
    await $('input[name=\'max_seats\']').sendKeys(max_seats);
    await $('textarea[name=\'description\']').sendKeys(description);
    await $('select[name=\'teaching_method\']').sendKeys(teaching_method);
    await $('select[name=\'credits\']').sendKeys(credits);
    await $('select[name=\'course_term\']').sendKeys(course_term);
    await $('input[name=\'department\']').sendKeys(department);
    await $('select[name=\'days_of_the_week\']').sendKeys(days_of_the_week);
    // Do not send keys to the select-class-times dropdown
    await element(by.id('add-course-button')).click();
  });

Then('I see a \'Please fill out this field\' message', async () => {
  await expect(element.all(by.id('class_times')).getAttribute('required'));
});