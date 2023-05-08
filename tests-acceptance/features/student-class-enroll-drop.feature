Feature: As a student
  I want to enroll in a class
  So that I can attend that class

  Scenario: Going to a student dashboard
    Given The app is up and running
    Given I see user buttons on the app's home page
    When I click the Student button
    Then I see the Student dashboard

  Scenario: Getting the list of available classes
    Given I see a button titled 'Enroll in a class'
    When I click the 'Enroll in a Class' button
    Then I can see a list of available classes to enroll to

  Scenario: Enrolling in a class
    When I select the class "Computer Networks" using the check box
    When I click the 'Enroll Selected Courses?' button
    Then I see an enrollment confirmation message 'Successfully Enrolled in Courses!'

  Scenario: Getting the list of enrolled classes
    Given The app is up and running
    Given I see user buttons on the app's home page
    When I click the Student button
    Then I see the Student dashboard
    Given I see a button titled 'Drop a class'
    When I click the 'Drop a Class' button
    Then I can see a list of enrolled classes

  Scenario: Dropping an enrolled class
    When I select the class "Computer Networks" using the check box
    When I click the 'Drop Selected Courses?' button
    Then I see a class drop confirmation message 'Successfully Dropped the selected Courses!'