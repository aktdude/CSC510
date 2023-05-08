Feature: As an admin
  I want to add a new course
  so that students can enroll to it

  Scenario: Add a new course that doesn't already exist
    Given The app is up and running
    Given I see user buttons on the app's home page
    When I click the Admin button
    Then I see the Admin dashboard
    Given I see a button 'Add Course'
    When I click the 'Add Course' button
    Then I see the 'Add Course' form
    When I try to add a new class with course name as 'My Class', professor ID as 6, max seats as 10, course description as 'My class description', teaching method as 'IP', course credits as 3, course term as 'Fall', course department as 'My department', days of the week as 'Mon & Wed', class times as '6:00-7:15 pm'
    And I click the 'Add Course' button
    Then I see a confirmation message 'Successfully Added Course!'

  Scenario: Add a new course with incomplete details
    Given The app is up and running
    Given I see user buttons on the app's home page
    When I click the Admin button
    Then I see the Admin dashboard
    Given I see a button 'Add Course'
    When I click the 'Add Course' button
    Then I see the 'Add Course' form
    When I try to add a new class with course name as 'My Class 2', professor ID as 6, max seats as 10, course description as 'My class description 2', teaching method as 'IP', course credits as 3, course term as 'Fall', course department as 'My department', days of the week as 'Mon & Wed'
    And I click the 'Add Course' button
    Then I see a 'Please fill out this field' message
