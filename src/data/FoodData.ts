const FoodData = [
  {
    id: 'F1',
    name: 'Bacon Sandwich',
    description:
      'Start your day right with a delicious combination of crispy bacon, melted cheddar cheese, and a fluffy egg, all served in a warm and toasted breakfast sandwich.',
    imagelink_square: require('../assets/FoodImage/BaconCheddarEggSandwich.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/FoodImage/BaconCheddarEggSandwich.png'), // Replace with actual image link
    ingredients: 'Bacon, Cheddar Cheese, Egg, Bread',
    special_ingredient: 'with Melted Cheddar',
    prices: [
      {size: 'Regular', price: '4.99', currency: '$'},
      {size: 'Large', price: '6.49', currency: '$'},
    ],
    average_rating: 4.6,
    ratings_count: '3,987',
    favourite: false,
    type: 'Breakfast Sandwich',
    category: 'Food',
    index: 1,
  },
  {
    id: 'F2',
    name: 'Chicken Sandwich',
    description:
      'Indulge in the sweet and savory combination of tender chicken, rich maple butter, and a soft bun, creating a delightful breakfast or brunch option.',
    imagelink_square: require('../assets/FoodImage/ChickenMapleButterSandwich.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/FoodImage/ChickenMapleButterSandwich.png'), // Replace with actual image link
    ingredients: 'Chicken, Maple Butter, Bread',
    special_ingredient: 'with Maple Butter',
    prices: [
      {size: 'Regular', price: '5.49', currency: '$'},
      {size: 'Large', price: '7.49', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '4,312',
    favourite: false,
    type: 'Breakfast Sandwich',
    category: 'Food',
    index: 2,
  },
  {
    id: 'F3',
    name: 'Impossible Sandwich',
    description:
      'Delight in a plant-based breakfast with the Impossible Breakfast Sandwich, featuring a flavorful plant-based patty, cheese, and a fluffy egg, all served in a warm bun.',
    imagelink_square: require('../assets/FoodImage/ImpossibleBreakfastSandwich.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/FoodImage/ImpossibleBreakfastSandwich.png'), // Replace with actual image link
    ingredients: 'Impossible Patty, Cheese, Egg, Bread',
    special_ingredient: 'with Fluffy Egg',
    prices: [
      {size: 'Regular', price: '6.99', currency: '$'},
      {size: 'Large', price: '8.99', currency: '$'},
    ],
    average_rating: 4.8,
    ratings_count: '4,987',
    favourite: false,
    type: 'Plant-Based Breakfast',
    category: 'Food',
    index: 3,
  },
  {
    id: 'F4',
    name: 'Sausage Sandwich',
    description:
      'Enjoy a classic breakfast combination of savory sausage, a fluffy egg, and melted cheddar cheese, all sandwiched between two slices of bread for a satisfying morning meal.',
    imagelink_square: require('../assets/FoodImage/SausageEggCheddarSandwich.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/FoodImage/SausageEggCheddarSandwich.png'), // Replace with actual image link
    ingredients: 'Sausage, Egg, Cheddar Cheese, Bread',
    special_ingredient: 'with Fluffy Egg',
    prices: [
      {size: 'Regular', price: '4.99', currency: '$'},
      {size: 'Large', price: '6.49', currency: '$'},
    ],
    average_rating: 4.6,
    ratings_count: '3,765',
    favourite: false,
    type: 'Breakfast Sandwich',
    category: 'Food',
    index: 4,
  },
  {
    id: 'F5',
    name: 'Spinach Wrap',
    description:
      'Savor the freshness of a spinach and feta wrap, featuring a blend of wholesome ingredients like spinach, feta cheese, and egg, all wrapped in a soft tortilla for a light and flavorful breakfast.',
    imagelink_square: require('../assets/FoodImage/SpinachFetaWrap.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/FoodImage/SpinachFetaWrap.png'), // Replace with actual image link
    ingredients: 'Spinach, Feta Cheese, Egg, Tortilla',
    special_ingredient: 'Feta Blend',
    prices: [
      {size: 'Regular', price: '4.49', currency: '$'},
      {size: 'Large', price: '5.99', currency: '$'},
    ],
    average_rating: 4.5,
    ratings_count: '3,432',
    favourite: false,
    type: 'Breakfast Wrap',
    category: 'Food',
    index: 5,
  },
  {
    id: 'F6',
    name: 'Tomato Panini',
    description:
      'Delight in the Mediterranean flavors of a tomato mozzarella focaccia panini, featuring juicy tomatoes, creamy mozzarella, and basil pesto, all pressed between slices of warm and golden focaccia bread.',
    imagelink_square: require('../assets/FoodImage/TomatoMozzarellaFocacciaPanini.png'), // Replace with actual image link
    imagelink_portrait: require('../assets/FoodImage/TomatoMozzarellaFocacciaPanini.png'), // Replace with actual image link
    ingredients: 'Tomatoes, Mozzarella Cheese, Basil Pesto, Focaccia Bread',
    special_ingredient: 'Mediterranean Tomato',
    prices: [
      {size: 'Regular', price: '7.49', currency: '$'},
      {size: 'Large', price: '9.49', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '4,112',
    favourite: false,
    type: 'Panini',
    category: 'Food',
    index: 6,
  },
];

export default FoodData;
