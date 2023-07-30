import { abvSwitch, beersGridColumns, beersGridRows } from './beers.elements';
import { switchElement } from './common.elements';

export const checkGridRowValue = (
  rowIndex: number,
  elementName: string,
  expectedValue: string,
): void => {
  cy.get(beersGridRows)
    .eq(rowIndex)
    .then(() => cy.get(elementName).contains(expectedValue));
};

export const checkGridCellValue = (
  rowIndex: number,
  columnIndex: number,
  expectedValue: string,
): void => {
  cy.get(beersGridRows).eq(rowIndex).scrollIntoView();
  cy.get(beersGridRows).eq(rowIndex).find(beersGridColumns).eq(columnIndex).contains(expectedValue);
};

export const checkThatAllBeersHaveAbvGreaterThan = (expectedAbv: number): void => {
  cy.get(beersGridRows)
    .find('[aria-colindex="5"]')
    .should('have.length', 10)
    .each((element) => {
      const abvText = element.text().trim();
      const actualAbv = Number(abvText.replace(/\$/g, ''));
      expect(actualAbv).to.be.greaterThan(expectedAbv);
    });
};

export const filterByAbv = (): void => {
  cy.get(abvSwitch).find(switchElement).click();
};

export const expandBeerGridRow = (rowIndex: number): void => {
  cy.get(beersGridRows).eq(rowIndex).find(beersGridColumns).eq(0).click();
};
