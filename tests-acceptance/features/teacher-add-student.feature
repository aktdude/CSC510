Feature: As a teacher
  I want to add a student to my class
  so that he can attend it

  Scenario: Add a student to my class
    Given The app is up and running
    Given I see user buttons on the app's home page
    When I click the Teacher button
    Then I see the Teacher dashboard
    When I click Details button of the first class
    Then I see the class's details and a 'Add Student' button
    When I click the 'Add Student' button
    Then I see a pane with list of students
    When I select the first student in the list
    When I click the 'Add Selected to Class?' button
    Then I see a 'Student Successfully Added!' confirmation message