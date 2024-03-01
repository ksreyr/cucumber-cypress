# cypress/e2e/duckduckgo.feature
Feature: duckduckgo
  Scenario: visiting the frontpage
    Given I visit unirvet.site
    When I Click at visit
    Then I should see a search bar