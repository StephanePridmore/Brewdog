import {
  checkGridCellValue,
  checkThatAllBeersHaveAbvGreaterThan,
  expandBeerGridRow,
  filterByAbv,
} from '../api/beers.context';
import {
  beersPageTitle,
  beersGridTitle,
  beerGridDetailCard,
  beerGridDetailCardTitle,
  beerGridDetailCardQuantity,
  beerGridDetailCardProcedure,
  beerGridDetailCardAttribute,
} from '../api/beers.elements';
import {
  checkElementText,
  clickGridPagination,
  navigateToBrewdog,
  scrollToElement,
} from '../api/common.context';

describe('beers page spec', () => {
  it('should display beers in grid', () => {
    navigateToBrewdog();

    scrollToElement(beersPageTitle);
    checkElementText(beersPageTitle, `Brewdog's beers`);
    checkElementText(beersGridTitle, 'Catalogue');

    checkGridCellValue(0, 1, 'Buzz');
    checkGridCellValue(0, 2, 'A Real Bitter Experience.');
    checkGridCellValue(0, 3, '09/2007');
    checkGridCellValue(0, 4, '4.5');

    checkGridCellValue(1, 1, 'Trashy Blonde');
    checkGridCellValue(1, 2, `You Know You Shouldn't`);
    checkGridCellValue(1, 3, '04/2008');
    checkGridCellValue(1, 4, '4.1');

    expandBeerGridRow(1);

    scrollToElement(beerGridDetailCard);
    checkElementText(
      beerGridDetailCard,
      'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.',
    );
    checkElementText(beerGridDetailCardTitle, 'Maris Otter Extra Pale');
    checkElementText(beerGridDetailCardQuantity, '3.25 kilograms');
    checkElementText(beerGridDetailCardTitle, 'Caramalt');
    checkElementText(beerGridDetailCardQuantity, '0.2 kilograms');
    checkElementText(beerGridDetailCardTitle, 'Munich');
    checkElementText(beerGridDetailCardQuantity, '0.4 kilograms');

    checkElementText(beerGridDetailCardTitle, 'Amarillo');
    checkElementText(beerGridDetailCardAttribute, 'bitter');
    checkElementText(beerGridDetailCardQuantity, '13.8 grams');
    checkElementText(beerGridDetailCardProcedure, 'Added at the start');
    checkElementText(beerGridDetailCardTitle, 'Simcoe');
    checkElementText(beerGridDetailCardAttribute, 'bitter');
    checkElementText(beerGridDetailCardQuantity, '13.8 grams');
    checkElementText(beerGridDetailCardProcedure, 'Added at the start');
    checkElementText(beerGridDetailCardTitle, 'Amarillo');
    checkElementText(beerGridDetailCardAttribute, 'flavour');
    checkElementText(beerGridDetailCardQuantity, '26.3 grams');
    checkElementText(beerGridDetailCardProcedure, 'Added at the end');
    checkElementText(beerGridDetailCardTitle, 'Motueka');
    checkElementText(beerGridDetailCardAttribute, 'flavour');
    checkElementText(beerGridDetailCardQuantity, '18.8 grams');
    checkElementText(beerGridDetailCardProcedure, 'Added at the end');

    checkGridCellValue(3, 1, 'Berliner Weisse With Yuzu - B-Sides');
    checkGridCellValue(3, 3, '11/2015');
    checkGridCellValue(3, 4, '4.2');

    clickGridPagination(2);

    checkGridCellValue(0, 1, 'Misspent Youth');
    checkGridCellValue(0, 3, '04/2013');
    checkGridCellValue(0, 4, '7.3');
  });

  it('should filter beers with abv < 8', () => {
    navigateToBrewdog();

    scrollToElement(beersPageTitle);
    checkGridCellValue(0, 1, 'Buzz');
    checkGridCellValue(0, 2, 'A Real Bitter Experience.');
    checkGridCellValue(0, 3, '09/2007');
    checkGridCellValue(0, 4, '4.5');

    filterByAbv();

    checkGridCellValue(0, 1, 'AB:12');
    checkGridCellValue(0, 2, 'Imperial Black Belgian Ale.');
    checkGridCellValue(0, 3, '07/2012');
    checkGridCellValue(0, 4, '11.2');

    checkGridCellValue(1, 1, 'AB:07');
    checkGridCellValue(1, 2, 'Whisky Cask-Aged Scotch Ale.');
    checkGridCellValue(1, 3, '03/2010');
    checkGridCellValue(1, 4, '12.5');

    checkThatAllBeersHaveAbvGreaterThan(8);

    clickGridPagination(2);

    checkThatAllBeersHaveAbvGreaterThan(8);
  });
});
