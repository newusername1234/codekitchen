'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Recipes', [{
      name: 'Amazing',
      review: 'This is super good',
      description: 'Yep has description',
      url: 'http://url.com',
      likes: 0,
      vegetarian: true,
      vegan: false,
      glutenfree: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Meat on a stick',
      review: 'it was ok',
      description: 'wow look at this description',
      url: 'http://meatstick.com',
      likes: 20,
      vegetarian: false,
      vegan: false,
      glutenfree: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Some other thing',
      review: 'i dont remember',
      description: 'DESCRIPTIONNNNNNNN',
      url: 'http://whatever.com',
      likes: 40,
      vegetarian: true,
      vegan: true,
      glutenfree: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);

  await queryInterface.bulkInsert('Categories', [
    {
      name: 'Breakfast',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Lunch',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dinner',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Appetizer',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dessert',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);

  return await queryInterface.bulkInsert('RecipesCategories', [
    {
      recipesId: 1,
      categoriesId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      recipesId: 1,
      categoriesId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      recipesId: 2,
      categoriesId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      recipesId: 2,
      categoriesId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      recipesId: 1,
      categoriesId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Recipes', null, {});
      await queryInterface.bulkDelete('Categories', null, {});
      await queryInterface.bulkDelete('RecipesCategories', null, {});
  }
};
