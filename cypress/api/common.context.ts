import { gridPager } from './common.elements';

export const navigateToBrewdog = (): void => {
  cy.visit('/');
};

export const clickElement = (elementName: string): void => {
  cy.get(elementName).click();
};

export const checkElementText = (elementName: string, expectedValue: string): void => {
  cy.get(elementName).contains(expectedValue);
};

export const clickGridPagination = (pageNumber: number): void => {
  cy.get(gridPager).contains(pageNumber).click();
};
