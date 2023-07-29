import {
  checkGridCellValue,
  checkGridRowValue,
  checkThatAllBeersHaveAbvGreaterThan,
  filterByAbv,
} from '../api/beers.context';
import { beersPageTitle, beersGridTitle, productName } from '../api/beers.elements';
import { checkElementText, clickGridPagination, navigateToBrewdog } from '../api/common.context';

describe('beers page spec', () => {
  it('should display beers in grid', () => {
    navigateToBrewdog();

    checkElementText(beersPageTitle, "Brewdog's beers");
    checkElementText(beersGridTitle, 'Catalogue');

    checkGridRowValue(0, productName, 'Buzz');
    checkGridCellValue(0, 1, '09/2007');
    checkGridCellValue(0, 2, '4.5');

    checkGridRowValue(1, productName, 'Trashy Blonde');
    checkGridCellValue(1, 1, '04/2008');
    checkGridCellValue(1, 2, '4.1');

    checkGridRowValue(2, productName, 'Berliner Weisse With Yuzu - B-Sides');
    checkGridCellValue(2, 1, '11/2015');
    checkGridCellValue(2, 2, '4.2');

    clickGridPagination(2);

    checkGridRowValue(0, productName, 'Misspent Youth');
    checkGridCellValue(0, 1, '04/2013');
    checkGridCellValue(0, 2, '7.3');
  });

  it('should filter beers with abv < 8', () => {
    navigateToBrewdog();

    checkGridRowValue(0, productName, 'Buzz');
    checkGridCellValue(0, 1, '09/2007');
    checkGridCellValue(0, 2, '4.5');

    filterByAbv();

    checkGridRowValue(0, productName, 'AB:12');
    checkGridCellValue(0, 1, '07/2012');
    checkGridCellValue(0, 2, '11.2');

    checkGridRowValue(1, productName, 'AB:07');
    checkGridCellValue(1, 1, '03/2010');
    checkGridCellValue(1, 2, '12.5');

    checkThatAllBeersHaveAbvGreaterThan(8);

    clickGridPagination(2);

    checkThatAllBeersHaveAbvGreaterThan(8);
  });
});
