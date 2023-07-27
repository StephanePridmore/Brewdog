export const createTestBeers = () => [
  {
    id: 90,
    name: '#Mashtag 2015',
    tagline: 'US Hopped Black Barley Wine.',
    first_brewed: '05/2015',
    description:
      'Democratically voted on by you and the BrewDog beer community. A wonderfully burnt toast malt backbone, loaded with American Hops for floral, citrus flavours and warm boozy vanilla and toasted oak.',
    image_url: 'https://images.punkapi.com/v2/90.png',
    abv: 10,
    ibu: 85,
    target_fg: 1020,
    target_og: 1098,
    ebc: 130,
    srm: 65,
    ph: 4.4,
    attenuation_level: 79.6,
    volume: {
      value: 20,
      unit: 'litres',
    },
    boil_volume: {
      value: 25,
      unit: 'litres',
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius',
          },
          duration: 75,
        },
      ],
      fermentation: {
        temp: {
          value: 21,
          unit: 'celsius',
        },
      },
      twist: 'Oak Chips: 38.5g at FV, Vanilla Pods at FV',
    },
    ingredients: {
      malt: [
        {
          name: 'Pale Ale',
          amount: {
            value: 6.35,
            unit: 'kilograms',
          },
        },
        {
          name: 'Munich',
          amount: {
            value: 0.77,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.96,
            unit: 'kilograms',
          },
        },
        {
          name: 'Special W',
          amount: {
            value: 0.29,
            unit: 'kilograms',
          },
        },
        {
          name: 'Carafa Special Malt Type 1',
          amount: {
            value: 0.38,
            unit: 'kilograms',
          },
        },
        {
          name: 'Carafa Special Malt Type 3',
          amount: {
            value: 0.19,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Nugget',
          amount: {
            value: 19,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Columbus',
          amount: {
            value: 38.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Centennial',
          amount: {
            value: 19,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 19,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Centennial',
          amount: {
            value: 19,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 19,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Willamette',
          amount: {
            value: 19,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Centennial',
          amount: {
            value: 38.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 38.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Willamette',
          amount: {
            value: 38.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1272 - American Ale II™',
    },
    food_pairing: [
      'Charcuterie platter (featuring Italian salami)',
      'Blue cheese wedge salad',
      'Rich dark chocolate volcano cake',
    ],
    brewers_tips:
      'Steep the oak chips and vanilla in separate bags in the cold conditioning phase. Taste every 2 - 3 days and as soon as profile is desirable they can be removed easily.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 92,
    name: 'AB:09',
    tagline: 'Cranachan Imperial Stout.',
    first_brewed: '11/2010',
    description:
      'This Cranachan Imperial Stout was inspired by the famous Scottish dessert, and brewed with a mountain of dark malts, loads of oats, Scottish heather honey and local raspberries. The beer was then transferred to oak casks to mature for 6 months.',
    image_url: 'https://images.punkapi.com/v2/92.png',
    abv: 11.6,
    ibu: 77,
    target_fg: 1022,
    target_og: 1110,
    ebc: 265,
    srm: 132.5,
    ph: 5.2,
    attenuation_level: 80,
    volume: {
      value: 20,
      unit: 'litres',
    },
    boil_volume: {
      value: 25,
      unit: 'litres',
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius',
          },
          duration: 90,
        },
      ],
      fermentation: {
        temp: {
          value: 19,
          unit: 'celsius',
        },
      },
      twist: 'Lactose: 125g, Scottish Heather Honey: 125g, Raspberries: 187.5g',
    },
    ingredients: {
      malt: [
        {
          name: 'Maris Otter Extra Pale',
          amount: {
            value: 10,
            unit: 'kilograms',
          },
        },
        {
          name: 'Carafa Special Malt Type 1',
          amount: {
            value: 1.88,
            unit: 'kilograms',
          },
        },
        {
          name: 'Flaked Oats',
          amount: {
            value: 1.88,
            unit: 'kilograms',
          },
        },
        {
          name: 'Crystal 150',
          amount: {
            value: 0.94,
            unit: 'kilograms',
          },
        },
        {
          name: 'Dark Crystal 350-400',
          amount: {
            value: 0.94,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Fuggles',
          amount: {
            value: 125,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Fuggles',
          amount: {
            value: 37.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Champagne',
    },
    food_pairing: [
      'Aged cheddar with honey and raspberry chutney',
      'Rich beef stew with winter vegetables and a dash of honey',
      'Scottish raspberry cranachan parfait',
    ],
    brewers_tips:
      'Lactose - or milk sugar - is un-fermentable. It adds a creamy mouthfeel to the beer. Experiment by using different types of honey for altered flavour profiles.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 94,
    name: 'Everday Anarchy',
    tagline: 'White Wine Barrel-Aged Imperial Red Saison.',
    first_brewed: '06/2013',
    description:
      'This French white wine barrel aged Imperial Saison has a plethora of intertwining flavours. Huge aromas of peach, syrup, tangerine, sherry, toffee and raisin, followed by a dynamic bracing acidity.',
    image_url: 'https://images.punkapi.com/v2/94.png',
    abv: 10.5,
    ibu: 45,
    target_fg: 1005,
    target_og: 1081,
    ebc: 15,
    srm: 7.5,
    ph: 4.4,
    attenuation_level: 93.8,
    volume: {
      value: 20,
      unit: 'litres',
    },
    boil_volume: {
      value: 25,
      unit: 'litres',
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius',
          },
          duration: 75,
        },
      ],
      fermentation: {
        temp: {
          value: 23,
          unit: 'celsius',
        },
      },
      twist:
        'Coriander seeds: 12.5g at End (WP), Orange: 25g at End (WP), Lemon: 25g at End (WP), Honey: 125g at End (WP), Pink Peppercorns: 3.5g at End (WP)',
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 6.13,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.38,
            unit: 'kilograms',
          },
        },
        {
          name: 'Wheat',
          amount: {
            value: 0.25,
            unit: 'kilograms',
          },
        },
        {
          name: 'Rye',
          amount: {
            value: 0.25,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Motueka',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Saaz',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Bobek',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Saaz',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Bobek',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 3711 - French Saison™',
    },
    food_pairing: [
      'Spiced carrot and coriander soup',
      'Spicy chilli king prawns',
      'Orange zest tart',
    ],
    brewers_tips:
      'The honey addition will help to dry out the beer, as the saison yeast will continue to ferment long after most ale yeast.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 96,
    name: 'Lumberjack Stout',
    tagline: 'Blueberry Bacon Stout.',
    first_brewed: '12/2013',
    description:
      'Lumberjack Stout is an intense beast that took its inspriation from what an actual bona-fide lumberjack might have for breakfast. Flavours of molasses, chocolate, smoke, berry, coffee and more, with a low bitterness, leaning this beer firmly towards the malty side.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    abv: 15.2,
    ibu: 20,
    target_fg: 1020,
    target_og: 1110,
    ebc: 158,
    srm: 79,
    ph: 4.4,
    attenuation_level: 82,
    volume: {
      value: 20,
      unit: 'litres',
    },
    boil_volume: {
      value: 25,
      unit: 'litres',
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius',
          },
          duration: 105,
        },
      ],
      fermentation: {
        temp: {
          value: 21,
          unit: 'celsius',
        },
      },
      twist:
        'Blueberries, maple syrup and coffee, then aged in ex Grain whisky casks. Maple Syrup: 50g at end. Blueberries: 100g at middle.',
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 10.63,
            unit: 'kilograms',
          },
        },
        {
          name: 'Carafa Special Malt Type 3',
          amount: {
            value: 1.25,
            unit: 'kilograms',
          },
        },
        {
          name: 'Flaked Oats',
          amount: {
            value: 2.19,
            unit: 'kilograms',
          },
        },
        {
          name: 'Smoked Malt',
          amount: {
            value: 0.63,
            unit: 'kilograms',
          },
        },
        {
          name: 'Crystal',
          amount: {
            value: 1.25,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Galena',
          amount: {
            value: 36,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Willamette',
          amount: {
            value: 37.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 1272 - American Ale II™',
    },
    food_pairing: [
      'Maple syrup drizzled chocolate chip pancakes',
      'Fried bacon with crispy honeycomb bits',
      'Coffee cake',
    ],
    brewers_tips: 'Adding extra smoked malt will amp up the bacon character.',
    contributed_by: 'Ali Skinner <AliSkinner>',
  },
  {
    id: 97,
    name: "Bowman's Beard - B-Sides",
    tagline: 'English Barley Wine.',
    first_brewed: '03/2015',
    description:
      "Ice-distilled double barley wine brewed by Chris from Stone Brewing Co. (see Sunmaid Stout) and BrewDog's own brewers. As robust, resinous and badass as its eponymic beard.",
    image_url: 'https://images.punkapi.com/v2/keg.png',
    abv: 18.3,
    ibu: 50,
    target_fg: 1011,
    target_og: 1067,
    ebc: 15,
    srm: 8,
    ph: 5.3,
    attenuation_level: 84,
    volume: {
      value: 20,
      unit: 'litres',
    },
    boil_volume: {
      value: 25,
      unit: 'litres',
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius',
          },
          duration: 90,
        },
      ],
      fermentation: {
        temp: {
          value: 19,
          unit: 'celsius',
        },
      },
      twist: 'Ice-distilled after fermentation to get to 18.3%',
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 4.5,
            unit: 'kilograms',
          },
        },
        {
          name: 'Rye',
          amount: {
            value: 0.5,
            unit: 'kilograms',
          },
        },
        {
          name: 'CaraAroma',
          amount: {
            value: 0.04,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramunich',
          amount: {
            value: 0.1,
            unit: 'kilograms',
          },
        },
        {
          name: 'Brown',
          amount: {
            value: 0.25,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.13,
            unit: 'kilograms',
          },
        },
        {
          name: 'Crystal',
          amount: {
            value: 0.07,
            unit: 'kilograms',
          },
        },
        {
          name: 'Munich',
          amount: {
            value: 0.11,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Motueka',
          amount: {
            value: 10,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'First Gold',
          amount: {
            value: 10,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Galena',
          amount: {
            value: 10,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Motueka',
          amount: {
            value: 5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'First Gold',
          amount: {
            value: 5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Galena',
          amount: {
            value: 10,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™ & Wyeast 1272 - American Ale II™',
    },
    food_pairing: ['Celery and stilton soup', 'Salted caramel soufflé'],
    brewers_tips:
      'Ferment first with the American ale strain and after a week add the American Ale II to really push up the ABV. Use a starter to get the yeast raring and ready to go before the second addition.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 99,
    name: 'Hello My Name Is Päivi',
    tagline: 'Sea Buckthorn Double IPA.',
    first_brewed: '05/2014',
    description:
      'Brewed with sea buckthorn, a tart and bitter berry found on the Finnish coastline. Bright, vibrant aromas of tangerine, mandarin and peach, with zesty hits of lime, envelop the nutty, caramel malt backbone. The intense fruitiness gives a jammy quality to the nose. On the palate is a warm biscuity sweetness, with tropical fruits in a supporting role to a huge grapefruit and orange bitterness.',
    image_url: 'https://images.punkapi.com/v2/99.png',
    abv: 8.3,
    ibu: 70,
    target_fg: 1013,
    target_og: 1076,
    ebc: 30,
    srm: 15,
    ph: 4.4,
    attenuation_level: 82.9,
    volume: {
      value: 20,
      unit: 'litres',
    },
    boil_volume: {
      value: 25,
      unit: 'litres',
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius',
          },
          duration: 75,
        },
      ],
      fermentation: {
        temp: {
          value: 21,
          unit: 'celsius',
        },
      },
      twist: 'Sea Buckthorn Puree: 375g at end, EXP 366: 37.5g at dry hop',
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 6.13,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.88,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Challenger',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Bravo',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Comet',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'EXP 366',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Centennial',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Citra',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Comet',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Centennial',
          amount: {
            value: 62.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 62.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Citra',
          amount: {
            value: 62.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1272 - American Ale II™',
    },
    food_pairing: [
      'Korvapuusti (cinnamon and cardamom buns)',
      'Spicy orange chicken marmalade served with potato bread',
      'Sea buckthorn cheesecake',
    ],
    brewers_tips:
      'Sea buckthorn characteristics can vary from its country or origin. Taste the berries before addition to determine the best usage.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 102,
    name: 'Peach Therapy',
    tagline: 'Tart Belgian Tripple.',
    first_brewed: '06/2015',
    description:
      '9% abv sour tripel, infused with peach and apricot in collaboration with some of our favourite beer writers Adrian Tierney-Jones, Matt Curtis and Jonny and Brad from The Craft Beer Channel.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    abv: 9,
    ibu: 30,
    target_fg: 1000,
    target_og: 1071,
    ebc: 12,
    srm: 6,
    ph: 3.6,
    attenuation_level: 87,
    volume: {
      value: 20,
      unit: 'litres',
    },
    boil_volume: {
      value: 25,
      unit: 'litres',
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 60,
            unit: 'celsius',
          },
          duration: 10,
        },
        {
          temp: {
            value: 65,
            unit: 'celsius',
          },
          duration: 30,
        },
        {
          temp: {
            value: 72,
            unit: 'celsius',
          },
          duration: 10,
        },
        {
          temp: {
            value: 78,
            unit: 'celsius',
          },
          duration: 5,
        },
      ],
      fermentation: {
        temp: {
          value: 20,
          unit: 'celsius',
        },
      },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 14.5,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Mandarina Bavaria',
          amount: {
            value: 7.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Strisselspalt',
          amount: {
            value: 7.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Mandarina Bavaria',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Strisselspalt',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 3522 - Belgian Ardennes™',
    },
    food_pairing: [
      'Summer salad with pickled veg',
      'Sticky barbecue spare ribs',
      'Blueberry and almond tart',
    ],
    brewers_tips:
      '20% of the original volume of wort was brewed again, kettle soured and added during fermentation to give a tart finish to the beer.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 103,
    name: 'Clown King',
    tagline: 'US Style Barley Wine.',
    first_brewed: '12/2013',
    description:
      'A heavy hitting combination of rich malt flavours and relentless, bitter hops. Aromas of caramel and toasted marshmallow, with raisin and dried fruit, alongside a spicy undercurrent of resin. With toasty malt and sweet dark fruit flavours, and a smooth, chewy mouthfeel, you’ll be lulled into a false sense of security, before the intense pine-sap resin draws out a huge bitter finish.',
    image_url: 'https://images.punkapi.com/v2/103.png',
    abv: 12,
    ibu: 85,
    target_fg: 1020,
    target_og: 1130,
    ebc: 24,
    srm: 12,
    ph: 4.4,
    attenuation_level: 102.3,
    volume: {
      value: 20,
      unit: 'litres',
    },
    boil_volume: {
      value: 25,
      unit: 'litres',
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius',
          },
          duration: 90,
        },
      ],
      fermentation: {
        temp: {
          value: 21,
          unit: 'celsius',
        },
      },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 9.5,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.5,
            unit: 'kilograms',
          },
        },
        {
          name: 'Crystal 150',
          amount: {
            value: 0.13,
            unit: 'kilograms',
          },
        },
        {
          name: 'Brown',
          amount: {
            value: 0.25,
            unit: 'kilograms',
          },
        },
        {
          name: 'Munich',
          amount: {
            value: 0.88,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Magnum',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 18.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Mosaic',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Ahtanum',
          amount: {
            value: 18.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Ahtanum',
          amount: {
            value: 18.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Mosaic',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Mosaic',
          amount: {
            value: 62.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Ahtanum',
          amount: {
            value: 62.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 62.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1272 - American Ale II™',
    },
    food_pairing: [
      'Aged Stilton',
      'Flaky pastry beef pie and sweet potato mash',
      'Chocolate pecan praline cake',
    ],
    brewers_tips:
      'Leave this beer to chill in the cellar for a few months to round off the flavour profile.',
    contributed_by: 'Ali Skinner <AliSkinner>',
  },
  {
    id: 105,
    name: 'Hello My Name Is Beastie',
    tagline: 'Double IPA Brewed with Brambles.',
    first_brewed: '08/2012',
    description:
      'A Scottish take on Hello My Name is Ingrid with added brambles. Caramel malt provides sweetness to balance the tart berry character, which loses sweetness during fermentation.',
    image_url: 'https://images.punkapi.com/v2/105.png',
    abv: 8.2,
    ibu: 42,
    target_fg: 1013,
    target_og: 1078,
    ebc: 90,
    srm: 45,
    ph: 4.4,
    attenuation_level: 83.3,
    volume: {
      value: 20,
      unit: 'litres',
    },
    boil_volume: {
      value: 25,
      unit: 'litres',
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 64,
            unit: 'celsius',
          },
          duration: 90,
        },
      ],
      fermentation: {
        temp: {
          value: 21,
          unit: 'celsius',
        },
      },
      twist: '500g bramble addition in the FV',
    },
    ingredients: {
      malt: [
        {
          name: 'Maris Otter Extra Pale',
          amount: {
            value: 6.86,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.93,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Columbus',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Centennial',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Columbus',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Centennial',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Nelson Sauvin',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Bramling Cross/ First Gold',
          amount: {
            value: 37.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Columbus',
          amount: {
            value: 71.43,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Centennial',
          amount: {
            value: 71.43,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Nelson Sauvin',
          amount: {
            value: 71.43,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1272 - American Ale II™',
    },
    food_pairing: [
      'Honey glazed ham with pineapple',
      'Spicy wings with blue cheese sauce',
      'Blackberry pie with vanilla ice cream',
    ],
    brewers_tips:
      'For easy addition, freeze the berries and then allow to defrost. The process will turn the berries to mush.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 109,
    name: 'Cocoa Psycho',
    tagline: 'Russian Imperial Stout. Rich. Decadent. Mocha.',
    first_brewed: '11/2012',
    description:
      'Vanilla pods and toasted oak chips add a rounded character to this massive Russian Imperial Stout, brewed with a hefty malt bill, cacao nibs and coffee beans. Dark malts combine with Cascade to add a punchy bitterness, strong enough to offset the big chocolate sweetness.',
    image_url: 'https://images.punkapi.com/v2/109.png',
    abv: 10,
    ibu: 85,
    target_fg: 1012,
    target_og: 1098,
    ebc: 30,
    srm: 15.25,
    ph: 4.4,
    attenuation_level: 70,
    volume: {
      value: 20,
      unit: 'litres',
    },
    boil_volume: {
      value: 25,
      unit: 'litres',
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius',
          },
          duration: 75,
        },
      ],
      fermentation: {
        temp: {
          value: 21,
          unit: 'celsius',
        },
      },
      twist:
        'Coffee Beans: 25g at end, Cocoa Nibs: 25g at end, Cocoa Nibs: 25g at conditioning, Coffee Beans: 25g at conditioning, Oak Chips: 15g at conditioning',
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 6.88,
            unit: 'kilograms',
          },
        },
        {
          name: 'Wheat',
          amount: {
            value: 1,
            unit: 'kilograms',
          },
        },
        {
          name: 'Dark Crystal',
          amount: {
            value: 0.13,
            unit: 'kilograms',
          },
        },
        {
          name: 'Black Malt',
          amount: {
            value: 1.25,
            unit: 'kilograms',
          },
        },
        {
          name: 'Roasted Barley',
          amount: {
            value: 1.5,
            unit: 'kilograms',
          },
        },
        {
          name: 'Weyermann Smoked',
          amount: {
            value: 0.5,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Cascade',
          amount: {
            value: 75,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Cascade',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 1272 - American Ale II™',
    },
    food_pairing: [
      'Smokey sweet pulled brisket',
      'Espresso crusted venison with a dark cherry jus',
      'Affogato with vanilla ice cream',
    ],
    brewers_tips:
      'Put coffee beans and cocoa nibs in a cheese cloth and dip in wort like a tea bag. Do multiple small additions for short lengths of time – the longer you leave them in the more heavy oils will be extracted.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
];
