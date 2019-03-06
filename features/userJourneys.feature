Feature: User Journey's
  As a customer
  I want to register on YourLogo witha valid email address
  And I should be able to complete a new order

  @userJourneyB_1
  Scenario: Open the YourLogo website
    Given I Open the YourLogo website in browser
    When I Validate the page is navigated correctly
    Then I Close the browser
