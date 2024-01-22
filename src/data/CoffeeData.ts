const CoffeeData = [
  {
    id: 'C1',
    name: 'Strawberry Mojito',
    description:
      'A refreshing and fruity blend of strawberries and lemonade, perfect for a hot summer day.',
    imagelink_square: require('../assets/DrinkImage/Cold_Drinks/BlendedStrawberryLemonade.png'),
    imagelink_portrait: require('../assets/DrinkImage/Cold_Drinks/BlendedStrawberryLemonade.png'),
    ingredients: 'Strawberries, Lemonade, Ice',
    special_ingredient: 'Strawberries',
    prices: [
      {size: 'Tall', price: '2.99', currency: '$'},
      {size: 'Grande', price: '4.49', currency: '$'},
      {size: 'Venti', price: '5.99', currency: '$'},
    ],
    average_rating: 4.5,
    ratings_count: '3,567',
    favourite: false,
    type: 'Cold Drink',
    category: 'Drink',
    index: 1,
  },
  {
    id: 'C2',
    name: 'Dragon Refresher',
    description:
      'An icy blend featuring the exotic flavors of mango and dragonfruit, combined with the tartness of refreshing lemonade.',
    imagelink_square: require('../assets/DrinkImage/Cold_Drinks/FrozenMangoDragonfruitRefresherLemonade.png'),
    imagelink_portrait: require('../assets/DrinkImage/Cold_Drinks/FrozenMangoDragonfruitRefresherLemonade.png'),
    ingredients: 'Mango, Dragonfruit, Lemonade, Ice',
    special_ingredient: 'Blended to icy',
    prices: [
      {size: 'Tall', price: '3.49', currency: '$'},
      {size: 'Grande', price: '5.99', currency: '$'},
      {size: 'Venti', price: '7.99', currency: '$'},
    ],
    average_rating: 4.8,
    ratings_count: '4,231',
    favourite: false,
    type: 'Cold Drink',
    category: 'Drink',
    index: 2,
  },
  {
    id: 'C3',
    name: ' Passion Lemonade',
    description:
      'A tropical delight featuring the sweet and tangy flavors of pineapple and passionfruit, blended with zesty lemonade.',
    imagelink_square: require('../assets/DrinkImage/Cold_Drinks/FrozenPineapplePassionfruitRefresherLemonade.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Cold_Drinks/FrozenPineapplePassionfruitRefresherLemonade.png'), // Replace with actual image link
    ingredients: 'Pineapple, Passionfruit, Lemonade, Ice',
    special_ingredient: 'Pineapple',
    prices: [
      {size: 'Tall', price: '3.99', currency: '$'},
      {size: 'Grande', price: '6.49', currency: '$'},
      {size: 'Venti', price: '8.49', currency: '$'},
    ],
    average_rating: 4.6,
    ratings_count: '3,896',
    favourite: false,
    type: 'Cold Drink',
    category: 'Drink',
    index: 3,
  },

  {
    id: 'C4',
    name: 'Cold Brew with Milk',
    description:
      'A smooth and rich cold brew coffee combined with creamy milk for a delightful and refreshing experience.',
    imagelink_square: require('../assets/DrinkImage/Cold_Coffee/ColdBrewWithMilk.png'), // Replace with actual image link
    imagelink_portrait: require('./../assets/DrinkImage/Cold_Coffee/ColdBrewWithMilk.png'), // Replace with actual image link
    ingredients: 'Cold Brew Coffee, Milk, Ice',
    special_ingredient: 'Milk Blend',
    prices: [
      {size: 'Tall', price: '3.99', currency: '$'},
      {size: 'Grande', price: '5.49', currency: '$'},
      {size: 'Venti', price: '6.99', currency: '$'},
    ],
    average_rating: 4.3,
    ratings_count: '2,987',
    favourite: false,
    type: 'Cold Coffee',
    category: 'Drink',
    index: 4,
  },
  {
    id: 'C5',
    name: 'Chestnut Latte',
    description:
      'A sweet and nutty iced latte featuring the flavors of chestnut and praline, perfect for a cozy indulgence.',
    imagelink_square: require('../assets/DrinkImage/Cold_Coffee/IcedChestnutPralineLatte.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Cold_Coffee/IcedChestnutPralineLatte.png'), // Replace with actual image link
    ingredients: 'Espresso, Milk, Chestnut Praline Syrup, Ice',
    special_ingredient: 'Praline Syrup',
    prices: [
      {size: 'Tall', price: '4.29', currency: '$'},
      {size: 'Grande', price: '5.99', currency: '$'},
      {size: 'Venti', price: '7.49', currency: '$'},
    ],
    average_rating: 4.6,
    ratings_count: '3,512',
    favourite: false,
    type: 'Cold Coffee',
    category: 'Drink',
    index: 5,
  },
  {
    id: 'C6',
    name: 'Nitro Cold Brew',
    description:
      'An effervescent and velvety cold brew infused with nitrogen for a creamy and cascading texture.',
    imagelink_square: require('../assets/DrinkImage/Cold_Coffee/NitroColdBrew.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Cold_Coffee/NitroColdBrew.png'), // Replace with actual image link
    ingredients: 'Nitro Cold Brew Coffee',
    special_ingredient: 'Nitrogen',
    prices: [
      {size: 'Tall', price: '4.99', currency: '$'},
      {size: 'Grande', price: '6.49', currency: '$'},
      {size: 'Venti', price: '8.99', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '4,789',
    favourite: false,
    type: 'Cold Coffee',
    category: 'Drink',
    index: 6,
  },
  {
    id: 'C7',
    name: 'Pistachio Brew',
    description:
      'Indulge in the unique combination of smooth cold brew coffee with the rich and nutty flavor of pistachio cream.',
    imagelink_square: require('../assets/DrinkImage/Cold_Coffee/PistachioCreamColdBrew.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Cold_Coffee/PistachioCreamColdBrew.png'), // Replace with actual image link
    ingredients: 'Cold Brew Coffee, Pistachio Cream, Ice',
    special_ingredient: 'Rich Pistachio Cream',
    prices: [
      {size: 'Tall', price: '4.49', currency: '$'},
      {size: 'Grande', price: '5.99', currency: '$'},
      {size: 'Venti', price: '7.49', currency: '$'},
    ],
    average_rating: 4.5,
    ratings_count: '3,256',
    favourite: false,
    type: 'Cold Coffee',
    category: 'Drink',
    index: 7,
  },
  {
    id: 'C8',
    name: 'Caramel Frappuccino',
    description:
      'A delightful blend of caramel, coffee, and crunchy caramel ribbons, topped with whipped cream for the ultimate frappuccino experience.',
    imagelink_square: require('../assets/DrinkImage/Frappuccino/CaramelRibbonCrunchFrapp.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Frappuccino/CaramelRibbonCrunchFrapp.png'), // Replace with actual image link
    ingredients:
      'Coffee, Milk, Caramel Syrup, Caramel Ribbons, Ice, Whipped Cream',
    special_ingredient: 'Crunchy Caramel',
    prices: [
      {size: 'Tall', price: '4.99', currency: '$'},
      {size: 'Grande', price: '6.49', currency: '$'},
      {size: 'Venti', price: '8.49', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '4,789',
    favourite: false,
    type: 'Frappuccino',
    category: 'Drink',
    index: 8,
  },
  {
    id: 'C9',
    name: 'Chestnut Frappuccino',
    description:
      'Experience the warmth of chestnut praline combined with the coolness of a frappuccino, topped with whipped cream and spiced praline crumbs.',
    imagelink_square: require('../assets/DrinkImage/Frappuccino/ChestnutPralineFrappuccino.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Frappuccino/ChestnutPralineFrappuccino.png'), // Replace with actual image link
    ingredients:
      'Coffee, Milk, Chestnut Praline Syrup, Ice, Whipped Cream, Praline Crumbs',
    special_ingredient: 'Chestnut Praline',
    prices: [
      {size: 'Tall', price: '5.29', currency: '$'},
      {size: 'Grande', price: '6.99', currency: '$'},
      {size: 'Venti', price: '9.29', currency: '$'},
    ],
    average_rating: 4.6,
    ratings_count: '3,921',
    favourite: false,
    type: 'Frappuccino',
    category: 'Drink',
    index: 9,
  },
  {
    id: 'C10',
    name: 'Mocha Frappuccino',
    description:
      'Satisfy your sweet tooth with the delightful combination of rich mocha, cookie crumbles, and a creamy frappuccino base.',
    imagelink_square: require('../assets/DrinkImage/Frappuccino/MochaCookieCrumbleFrapp.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Frappuccino/MochaCookieCrumbleFrapp.png'), // Replace with actual image link
    ingredients:
      'Coffee, Milk, Mocha Sauce, Cookie Crumbles, Ice, Whipped Cream',
    special_ingredient: 'Cookie Crumbles',
    prices: [
      {size: 'Tall', price: '4.49', currency: '$'},
      {size: 'Grande', price: '5.99', currency: '$'},
      {size: 'Venti', price: '7.49', currency: '$'},
    ],
    average_rating: 4.4,
    ratings_count: '3,489',
    favourite: false,
    type: 'Frappuccino',
    category: 'Drink',
    index: 10,
  },
  {
    id: 'C11',
    name: 'P-mint Frappuccino',
    description:
      'Celebrate the holidays with a festive blend of rich mocha, cool peppermint, and a creamy frappuccino base, topped with whipped cream.',
    imagelink_square: require('../assets/DrinkImage/Frappuccino/PeppermintMochaFrappuccino.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Frappuccino/PeppermintMochaFrappuccino.png'), // Replace with actual image link
    ingredients:
      'Coffee, Milk, Mocha Sauce, Peppermint Syrup, Ice, Whipped Cream',
    special_ingredient: 'Cool Peppermint',
    prices: [
      {size: 'Tall', price: '4.99', currency: '$'},
      {size: 'Grande', price: '6.49', currency: '$'},
      {size: 'Venti', price: '8.49', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '4,312',
    favourite: false,
    type: 'Frappuccino',
    category: 'Drink',
    index: 11,
  },
  {
    id: 'C12',
    name: 'Cookie Frappuccino',
    description:
      'Experience the sweetness of a sugar cookie combined with the nutty richness of almondmilk in a delightful and refreshing frappuccino.',
    imagelink_square: require('../assets/DrinkImage/Frappuccino/SugarCookieAlmondmilkFrappuccino.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Frappuccino/SugarCookieAlmondmilkFrappuccino.png'), // Replace with actual image link
    ingredients: 'Almondmilk, Sugar Cookie Syrup, Ice',
    special_ingredient: 'Sugar Cookie',
    prices: [
      {size: 'Tall', price: '4.29', currency: '$'},
      {size: 'Grande', price: '5.99', currency: '$'},
      {size: 'Venti', price: '7.49', currency: '$'},
    ],
    average_rating: 4.6,
    ratings_count: '3,987',
    favourite: false,
    type: 'Frappuccino',
    category: 'Drink',
    index: 12,
  },
  {
    id: 'C13',
    name: 'Caramel Spice',
    description:
      'Experience the warmth of apple cider with the sweet and comforting touch of caramel, topped with whipped cream and caramel drizzle.',
    imagelink_square: require('../assets/DrinkImage/Hot_drinks/CaramelAppleSpice.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Hot_drinks/CaramelAppleSpice.png'), // Replace with actual image link
    ingredients: 'Apple Cider, Caramel Sauce, Whipped Cream',
    special_ingredient: 'Caramel Flavor',
    prices: [
      {size: 'Tall', price: '3.99', currency: '$'},
      {size: 'Grande', price: '5.49', currency: '$'},
      {size: 'Venti', price: '6.99', currency: '$'},
    ],
    average_rating: 4.3,
    ratings_count: '2,756',
    favourite: false,
    type: 'Hot Drinks',
    category: 'Drink',
    index: 13,
  },
  {
    id: 'C14',
    name: 'Caramel Creme',
    description:
      'Indulge in the rich and creamy flavors of caramel brulee, a decadent creme-based beverage with a hint of caramelized sugar.',
    imagelink_square: require('../assets/DrinkImage/Hot_drinks/CaramelBruleeCreme.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Hot_drinks/CaramelBruleeCreme.png'), // Replace with actual image link
    ingredients: 'Milk, Caramel Brulee Sauce, Whipped Cream',
    special_ingredient: 'Caramel Flavor',
    prices: [
      {size: 'Tall', price: '4.29', currency: '$'},
      {size: 'Grande', price: '5.99', currency: '$'},
      {size: 'Venti', price: '7.49', currency: '$'},
    ],
    average_rating: 4.5,
    ratings_count: '3,189',
    favourite: false,
    type: 'Hot Drinks',
    category: 'Drink',
    index: 14,
  },
  {
    id: 'C15',
    name: 'P-mint Chocolate',
    description:
      'Indulge in the classic comfort of hot chocolate with a festive twist of cool peppermint, topped with whipped cream and peppermint sprinkles.',
    imagelink_square: require('../assets/DrinkImage/Hot_drinks/PeppermintHotChocolate.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Hot_drinks/PeppermintHotChocolate.png'), // Replace with actual image link
    ingredients: 'Hot Chocolate, Peppermint Syrup, Whipped Cream',
    special_ingredient: 'Peppermint Flavor',
    prices: [
      {size: 'Tall', price: '3.99', currency: '$'},
      {size: 'Grande', price: '5.49', currency: '$'},
      {size: 'Venti', price: '6.99', currency: '$'},
    ],
    average_rating: 4.4,
    ratings_count: '2,987',
    favourite: false,
    type: 'Hot Drinks',
    category: 'Drink',
    index: 15,
  },

  {
    id: 'C16',
    name: 'White Hot Cocoa',
    description:
      'Enjoy a delightful blend of rich white chocolate and peppermint flavor in a comforting hot cocoa, topped with whipped cream and crushed peppermint.',
    imagelink_square: require('../assets/DrinkImage/Hot_drinks/PeppermintWhiteChocolateHotCocoa.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Hot_drinks/PeppermintWhiteChocolateHotCocoa.png'), // Replace with actual image link
    ingredients:
      'Hot Cocoa, White Chocolate Syrup, Peppermint Syrup, Whipped Cream',
    special_ingredient: 'White Chocolate',
    prices: [
      {size: 'Tall', price: '4.29', currency: '$'},
      {size: 'Grande', price: '5.99', currency: '$'},
      {size: 'Venti', price: '7.49', currency: '$'},
    ],
    average_rating: 4.6,
    ratings_count: '3,521',
    favourite: false,
    type: 'Hot Drinks',
    category: 'Drink',
    index: 16,
  },
  {
    id: 'C17',
    name: 'Hot Chocolate',
    description:
      'Indulge in the classic richness of hot chocolate, crafted with the finest cocoa and topped with velvety whipped cream.',
    imagelink_square: require('../assets/DrinkImage/Hot_drinks/SignatureHotChocolate.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Hot_drinks/SignatureHotChocolate.png'), // Replace with actual image link
    ingredients: 'Hot Chocolate, Whipped Cream',
    special_ingredient: 'Finest Cocoa',
    prices: [
      {size: 'Tall', price: '3.99', currency: '$'},
      {size: 'Grande', price: '5.49', currency: '$'},
      {size: 'Venti', price: '6.99', currency: '$'},
    ],
    average_rating: 4.5,
    ratings_count: '3,189',
    favourite: false,
    type: 'Hot Drinks',
    category: 'Drink',
    index: 17,
  },
  {
    id: 'C18',
    name: 'Caffè Americano',
    description:
      'Savor the bold and robust flavor of espresso combined with hot water for a simple yet intense coffee experience.',
    imagelink_square: require('../assets/DrinkImage/Coffee/CaffeAmericano.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Coffee/CaffeAmericano.png'), // Replace with actual image link
    ingredients: 'Espresso, Hot Water',
    special_ingredient: 'Intense Coffee',
    prices: [
      {size: 'Tall', price: '2.49', currency: '$'},
      {size: 'Grande', price: '3.49', currency: '$'},
      {size: 'Venti', price: '4.49', currency: '$'},
    ],
    average_rating: 4.2,
    ratings_count: '2,876',
    favourite: false,
    type: 'Coffee',
    category: 'Drink',
    index: 18,
  },

  {
    id: 'C19',
    name: 'Caffè Latte',
    description:
      'Experience the smooth and creamy combination of espresso and steamed milk, topped with a light layer of frothed milk.',
    imagelink_square: require('../assets/DrinkImage/Coffee/CaffeLatte.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Coffee/CaffeLatte.png'), // Replace with actual image link
    ingredients: 'Espresso, Steamed Milk, Frothed Milk',
    special_ingredient: 'Espresso Blend',
    prices: [
      {size: 'Tall', price: '3.49', currency: '$'},
      {size: 'Grande', price: '4.49', currency: '$'},
      {size: 'Venti', price: '5.49', currency: '$'},
    ],
    average_rating: 4.4,
    ratings_count: '3,421',
    favourite: false,
    type: 'Coffee',
    category: 'Drink',
    index: 19,
  },
  {
    id: 'C20',
    name: 'Caffè Mocha',
    description:
      'Indulge in the perfect harmony of espresso, steamed milk, and rich chocolate syrup, topped with whipped cream for a decadent treat.',
    imagelink_square: require('../assets/DrinkImage/Coffee/CaffeMocha.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Coffee/CaffeMocha.png'), // Replace with actual image link
    ingredients: 'Espresso, Steamed Milk, Chocolate Syrup, Whipped Cream',
    special_ingredient: 'Chocolate Blend',
    prices: [
      {size: 'Tall', price: '4.29', currency: '$'},
      {size: 'Grande', price: '5.99', currency: '$'},
      {size: 'Venti', price: '7.49', currency: '$'},
    ],
    average_rating: 4.6,
    ratings_count: '3,891',
    favourite: false,
    type: 'Coffee',
    category: 'Drink',
    index: 20,
  },
  {
    id: 'C21',
    name: 'Cappuccino',
    description:
      'Enjoy the classic Italian coffee experience with equal parts espresso, steamed milk, and frothed milk, creating a creamy and rich flavor.',
    imagelink_square: require('../assets/DrinkImage/Coffee/Cappuccino.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Coffee/Cappuccino.png'), // Replace with actual image link
    ingredients: 'Espresso, Steamed Milk, Frothed Milk',
    special_ingredient: 'Frothed Milk',
    prices: [
      {size: 'Tall', price: '3.49', currency: '$'},
      {size: 'Grande', price: '4.49', currency: '$'},
      {size: 'Venti', price: '5.49', currency: '$'},
    ],
    average_rating: 4.4,
    ratings_count: '3,512',
    favourite: false,
    type: 'Coffee',
    category: 'Drink',
    index: 21,
  },
  {
    id: 'C22',
    name: 'Caramel Macchiato',
    description:
      'Indulge in a delightful blend of espresso, vanilla syrup, steamed milk, and caramel drizzle for a sweet and creamy coffee treat.',
    imagelink_square: require('../assets/DrinkImage/Coffee/CaramelMacchiato.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Coffee/CaramelMacchiato.png'), // Replace with actual image link
    ingredients: 'Espresso, Vanilla Syrup, Steamed Milk, Caramel Drizzle',
    special_ingredient: 'Caramel Drizzle',
    prices: [
      {size: 'Tall', price: '4.29', currency: '$'},
      {size: 'Grande', price: '5.99', currency: '$'},
      {size: 'Venti', price: '7.49', currency: '$'},
    ],
    average_rating: 4.6,
    ratings_count: '3,921',
    favourite: false,
    type: 'Coffee',
    category: 'Drink',
    index: 22,
  },
  {
    id: 'C23',
    name: 'Cinnamon Latte',
    description:
      'Savor the sweet and spicy combination of espresso, steamed milk, and cinnamon dolce syrup, topped with whipped cream and cinnamon sprinkles.',
    imagelink_square: require('../assets/DrinkImage/Coffee/CinnamonDolceLatte.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Coffee/CinnamonDolceLatte.png'), // Replace with actual image link
    ingredients:
      'Espresso, Steamed Milk, Cinnamon Dolce Syrup, Whipped Cream, Cinnamon Sprinkles',
    special_ingredient: 'Cinnamon Syrup',
    prices: [
      {size: 'Tall', price: '4.49', currency: '$'},
      {size: 'Grande', price: '5.99', currency: '$'},
      {size: 'Venti', price: '7.49', currency: '$'},
    ],
    average_rating: 4.5,
    ratings_count: '3,654',
    favourite: false,
    type: 'Coffee',
    category: 'Drink',
    index: 23,
  },
  {
    id: 'C24',
    name: 'Espresso Single',
    description:
      'Experience the pure and intense flavor of a single shot of espresso, crafted to perfection for a quick and strong coffee pick-me-up.',
    imagelink_square: require('../assets/DrinkImage/Coffee/Espresso_Single.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Coffee/Espresso_Single.png'), // Replace with actual image link
    ingredients: 'Espresso',
    special_ingredient: 'Single Shot',
    prices: [{size: 'Single', price: '2.49', currency: '$'}],
    average_rating: 4.2,
    ratings_count: '2,312',
    favourite: false,
    type: 'Coffee',
    category: 'Drink',
    index: 24,
  },
  {
    id: 'C25',
    name: 'Espresso Macchiato',
    description:
      'Savor the simplicity of a single shot of espresso "marked" with a dollop of frothed milk for a strong yet slightly creamy coffee experience.',
    imagelink_square: require('../assets/DrinkImage/Coffee/EspressoMacchiato.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Coffee/EspressoMacchiato.png'), // Replace with actual image link
    ingredients: 'Espresso, Frothed Milk',
    special_ingredient: 'Frothed Milk',
    prices: [{size: 'Single', price: '2.99', currency: '$'}],
    average_rating: 4.3,
    ratings_count: '2,489',
    favourite: false,
    type: 'Coffee',
    category: 'Drink',
    index: 25,
  },
  {
    id: 'C26',
    name: 'Flat White',
    description:
      'Experience the velvety smoothness of microfoam combined with a bold espresso shot, creating a strong yet creamy coffee delight.',
    imagelink_square: require('../assets/DrinkImage/Coffee/FlatWhite.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Coffee/FlatWhite.png'), // Replace with actual image link
    ingredients: 'Espresso, Microfoam',
    special_ingredient: 'Velvety Microfoam',
    prices: [
      {size: 'Tall', price: '4.49', currency: '$'},
      {size: 'Grande', price: '5.99', currency: '$'},
      {size: 'Venti', price: '7.49', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '3,876',
    favourite: false,
    type: 'Coffee',
    category: 'Drink',
    index: 26,
  },
  {
    id: 'C27',
    name: 'Peppermint Mocha',
    description:
      'Celebrate the festive season with the perfect blend of rich mocha, cool peppermint, and whipped cream, creating a delightful holiday treat.',
    imagelink_square: require('../assets/DrinkImage/Coffee/PeppermintMocha.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Coffee/PeppermintMocha.png'), // Replace with actual image link
    ingredients:
      'Espresso, Mocha Sauce, Peppermint Syrup, Steamed Milk, Whipped Cream',
    special_ingredient: 'Peppermint Flavor',
    prices: [
      {size: 'Tall', price: '4.99', currency: '$'},
      {size: 'Grande', price: '6.49', currency: '$'},
      {size: 'Venti', price: '8.49', currency: '$'},
    ],
    average_rating: 4.8,
    ratings_count: '4,231',
    favourite: false,
    type: 'Coffee',
    category: 'Drink',
    index: 27,
  },
  {
    id: 'C28',
    name: 'Chocolate Mocha',
    description:
      'Indulge in the harmonious blend of rich white chocolate, cool peppermint, espresso, and whipped cream, creating a festive and comforting drink.',
    imagelink_square: require('../assets/DrinkImage/Coffee/PeppermintWhiteChocolateMocha.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Coffee/PeppermintWhiteChocolateMocha.png'), // Replace with actual image link
    ingredients:
      'Espresso, White Chocolate Sauce, Peppermint Syrup, Steamed Milk, Whipped Cream',
    special_ingredient: 'Rich White Choco',
    prices: [
      {size: 'Tall', price: '5.29', currency: '$'},
      {size: 'Grande', price: '6.99', currency: '$'},
      {size: 'Venti', price: '9.29', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '3,987',
    favourite: false,
    type: 'Coffee',
    category: 'Drink',
    index: 28,
  },
  {
    id: 'C29',
    name: 'Chai Brewed Tea',
    description:
      'Savor the aromatic blend of spiced chai tea leaves steeped to perfection, creating a warm and flavorful tea experience.',
    imagelink_square: require('../assets/DrinkImage/Hot_Teas/ChaiBrewedTea.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Hot_Teas/ChaiBrewedTea.png'), // Replace with actual image link
    ingredients: 'Chai Tea Leaves, Hot Water, Steamed Milk (optional)',
    special_ingredient: 'Spiced Flavor',
    prices: [
      {size: 'Tall', price: '3.49', currency: '$'},
      {size: 'Grande', price: '4.49', currency: '$'},
      {size: 'Venti', price: '5.49', currency: '$'},
    ],
    average_rating: 4.5,
    ratings_count: '3,654',
    favourite: false,
    type: 'Tea',
    category: 'Drink',
    index: 29,
  },
  {
    id: 'C30',
    name: 'Mist Green Tea',
    description:
      'Embark on a journey with the delicate and refreshing flavor of Emperor’s Cloud and Mist Green Tea, steeped to perfection.',
    imagelink_square: require('../assets/DrinkImage/Hot_Teas/EmperorsCloudAndMistGreenTea.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Hot_Teas/EmperorsCloudAndMistGreenTea.png'), // Replace with actual image link
    ingredients: 'Emperor’s Cloud and Mist Green Tea Leaves, Hot Water',
    special_ingredient: 'Green Tea Flavor',
    prices: [
      {size: 'Tall', price: '3.99', currency: '$'},
      {size: 'Grande', price: '4.99', currency: '$'},
      {size: 'Venti', price: '6.49', currency: '$'},
    ],
    average_rating: 4.6,
    ratings_count: '3,221',
    favourite: false,
    type: 'Tea',
    category: 'Drink',
    index: 30,
  },
  {
    id: 'C31',
    name: 'Oatmilk Chai',
    description:
      'Indulge in the warm and spicy blend of chai tea with the delightful sweetness of gingerbread, all complemented by the creaminess of oatmilk.',
    imagelink_square: require('../assets/DrinkImage/Hot_Teas/GingerbreadOatmilkChai.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Hot_Teas/GingerbreadOatmilkChai.png'), // Replace with actual image link
    ingredients:
      'Chai Tea Leaves, Gingerbread Syrup, Oatmilk, Steamed Milk (optional)',
    special_ingredient: 'Spiced Blend',
    prices: [
      {size: 'Tall', price: '4.29', currency: '$'},
      {size: 'Grande', price: '5.99', currency: '$'},
      {size: 'Venti', price: '7.49', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '3,876',
    favourite: false,
    type: 'Tea',
    category: 'Drink',
    index: 31,
  },
  {
    id: 'C32',
    name: 'Honey Mint Tea',
    description:
      'Refresh your senses with the vibrant combination of citrusy flavors, soothing mint, and a touch of honey, creating a revitalizing and comforting tea.',
    imagelink_square: require('../assets/DrinkImage/Hot_Teas/HoneyCitrusMintTea.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Hot_Teas/HoneyCitrusMintTea.png'), // Replace with actual image link
    ingredients: 'Black Tea Leaves, Citrus Mint Syrup, Honey, Hot Water, Ice',
    special_ingredient: 'Mint Blend',
    prices: [
      {size: 'Tall', price: '3.99', currency: '$'},
      {size: 'Grande', price: '4.99', currency: '$'},
      {size: 'Venti', price: '5.99', currency: '$'},
    ],
    average_rating: 4.6,
    ratings_count: '3,432',
    favourite: false,
    type: 'Tea',
    category: 'Drink',
    index: 32,
  },
  {
    id: 'C33',
    name: 'Matcha Latte',
    description:
      'Experience the vibrant and earthy flavors of matcha green tea combined with steamed milk, creating a rich and creamy latte with a touch of sweetness.',
    imagelink_square: require('../assets/DrinkImage/Hot_Teas/MatchaTeaLatte.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Hot_Teas/MatchaTeaLatte.png'), // Replace with actual image link
    ingredients:
      'Matcha Green Tea Powder, Steamed Milk, Matcha Syrup, Whipped Cream (optional)',
    special_ingredient: 'Matcha Syrup',
    prices: [
      {size: 'Tall', price: '4.49', currency: '$'},
      {size: 'Grande', price: '5.99', currency: '$'},
      {size: 'Venti', price: '7.49', currency: '$'},
    ],
    average_rating: 4.8,
    ratings_count: '4,112',
    favourite: false,
    type: 'Tea',
    category: 'Drink',
    index: 33,
  },
  {
    id: 'C34',
    name: 'Black Tea',
    description:
      'Cool down with the simplicity of iced black tea, brewed to perfection and served over ice for a refreshing and classic iced tea experience.',
    imagelink_square: require('../assets/DrinkImage/Ice_Tea/IcedBlackTea.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Ice_Tea/IcedBlackTea.png'), // Replace with actual image link
    ingredients: 'Black Tea Leaves, Hot Water, Ice',
    special_ingredient: 'Tea Leaves',
    prices: [
      {size: 'Tall', price: '2.99', currency: '$'},
      {size: 'Grande', price: '3.99', currency: '$'},
      {size: 'Venti', price: '4.99', currency: '$'},
    ],
    average_rating: 4.3,
    ratings_count: '2,987',
    favourite: false,
    type: 'Iced Tea',
    category: 'Drink',
    index: 34,
  },
  {
    id: 'C35',
    name: 'Iced Oatmilk',
    description:
      'Sip on the chilled and invigorating blend of iced chai tea with the sweet and spicy notes of gingerbread, all combined with creamy oatmilk.',
    imagelink_square: require('../assets/DrinkImage/Ice_Tea/IcedGingerbreadOatmilkChai.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Ice_Tea/IcedGingerbreadOatmilkChai.png'), // Replace with actual image link
    ingredients: 'Chai Tea Leaves, Gingerbread Syrup, Oatmilk, Ice',
    special_ingredient: 'Gingerbread Syrup',
    prices: [
      {size: 'Tall', price: '4.49', currency: '$'},
      {size: 'Grande', price: '5.99', currency: '$'},
      {size: 'Venti', price: '7.49', currency: '$'},
    ],
    average_rating: 4.6,
    ratings_count: '3,521',
    favourite: false,
    type: 'Iced Tea',
    category: 'Drink',
    index: 35,
  },
  {
    id: 'C36',
    name: 'Green Tea Latte',
    description:
      'Cool off with the vibrant and earthy flavors of iced matcha green tea combined with cold milk, creating a refreshing and creamy latte with a touch of sweetness.',
    imagelink_square: require('../assets/DrinkImage/Ice_Tea/IcedMatchaGreenTeaLatte.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Ice_Tea/IcedMatchaGreenTeaLatte.png'), // Replace with actual image link
    ingredients: 'Matcha Green Tea Powder, Cold Milk, Matcha Syrup, Ice',
    special_ingredient: 'Matcha Syrup',
    prices: [
      {size: 'Tall', price: '4.49', currency: '$'},
      {size: 'Grande', price: '5.99', currency: '$'},
      {size: 'Venti', price: '7.49', currency: '$'},
    ],
    average_rating: 4.8,
    ratings_count: '4,312',
    favourite: false,
    type: 'Iced Tea',
    category: 'Drink',
    index: 36,
  },

  {
    id: 'C37',
    name: 'Tango Tea ',
    description:
      'Quench your thirst with the bold and fruity flavors of iced Passion Tango tea blended with tangy lemonade, creating a refreshing and tropical beverage.',
    imagelink_square: require('../assets/DrinkImage/Ice_Tea/IcedPassionTangoTeaLemonade.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Ice_Tea/IcedPassionTangoTeaLemonade.png'), // Replace with actual image link
    ingredients: 'Passion Tango Tea Leaves, Lemonade, Ice',
    special_ingredient: 'Tangy Lemonade',
    prices: [
      {size: 'Tall', price: '3.99', currency: '$'},
      {size: 'Grande', price: '4.99', currency: '$'},
      {size: 'Venti', price: '5.99', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '3,765',
    favourite: false,
    type: 'Iced Tea',
    category: 'Drink',
    index: 37,
  },
  {
    id: 'C38',
    name: 'Cinnamon Brew',
    description:
      'Experience the smooth and bold flavor of nitro cold brew infused with the warmth of cinnamon, the sweetness of caramel, and the richness of cream, all served on tap for a delightful and refreshing coffee experience.',
    imagelink_square: require('../assets/DrinkImage/Cold_Coffee/CinnamonCaramelCreamNitroColdBrew.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Cold_Coffee/CinnamonCaramelCreamNitroColdBrew.png'), // Replace with actual image link
    ingredients: 'Nitro Cold Brew, Cinnamon Syrup, Caramel Syrup, Cream',
    special_ingredient: 'Cinnamon Syrup',
    prices: [
      {size: 'Tall', price: '5.49', currency: '$'},
      {size: 'Grande', price: '6.99', currency: '$'},
      {size: 'Venti', price: '8.49', currency: '$'},
    ],
    average_rating: 4.9,
    ratings_count: '5,210',
    favourite: false,
    type: 'Cold Coffee',
    category: 'Drink',
    index: 38,
  },
  {
    id: 'C39',
    name: 'Paradise Drink',
    description:
      'Transport yourself to a tropical paradise with this exotic and refreshing beverage, blending the flavors of tropical fruits for a delightful taste of the tropics.',
    imagelink_square: require('../assets/DrinkImage/Cold_Drinks/ParadiseDrink.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Cold_Drinks/ParadiseDrink.png'), // Replace with actual image link
    ingredients: 'Tropical Fruit Blend, Ice',
    special_ingredient: 'Exotic Fruits',
    prices: [
      {size: 'Tall', price: '4.99', currency: '$'},
      {size: 'Grande', price: '6.49', currency: '$'},
      {size: 'Venti', price: '7.99', currency: '$'},
    ],
    average_rating: 4.8,
    ratings_count: '4,987',
    favourite: false,
    type: 'Cold Drink',
    category: 'Drink',
    index: 39,
  },
  {
    id: 'C40',
    name: 'Pineapple Refreshers',
    description:
      'Quench your thirst with the tropical blend of sweet pineapple and tangy passionfruit, combined with a splash of refreshing coolness, creating the perfect drink for a sunny day.',
    imagelink_square: require('../assets/DrinkImage/Cold_Drinks/PineapplePassionfruitRefreshers.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/DrinkImage/Cold_Drinks/PineapplePassionfruitRefreshers.png'), // Replace with actual image link
    ingredients: 'Pineapple Juice, Passionfruit Juice, Refreshing Blend, Ice',
    special_ingredient: 'Passionfruit Fusion',
    prices: [
      {size: 'Tall', price: '3.99', currency: '$'},
      {size: 'Grande', price: '4.99', currency: '$'},
      {size: 'Venti', price: '5.99', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '3,876',
    favourite: false,
    type: 'Cold Drink',
    category: 'Drink',
    index: 40,
  },
];
export default CoffeeData;
