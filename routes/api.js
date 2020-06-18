var express = require('express');
var router = express.Router();
const db = require('../models');

router.get('/recipes/:id', (req, res) => {
  db.Recipes.findByPk(req.params.id, {
    include: [{
      model: db.Categories,
      through: {
        attributes: []
      }
    }]
  })
    .then(r => res.json(r))
});

router.get('/recipes', function(req, res, next) {
  db.Recipes.findAll({
    include: [{
      model: db.Categories,
      through: {
        attributes: []
      }
    }]
  })
    .then(r => {
      res.json(r);
    });
});

router.post('/recipes', (req, res) => {
  const { 
    name, 
    review, 
    description, 
    url, 
    likes, 
    vegetarian, 
    vegan, 
    glutenfree 
  } = req.body;
  
  if (!name) {res.status(400).json({ error: 'name field is required' });}
  if (!url) {res.status(400).json({ error: 'url field is required' })}
  if (!review) {res.status(400).json({ error: 'review field is required' })}

  db.Recipes.create({
    name: name, 
    review: review, 
    description: description || '', 
    url: url, 
    likes: likes || 0, 
    vegetarian: vegetarian || false, 
    vegan: vegan || false, 
    glutenfree: glutenfree || false
  })
    .then(recipe => {
      res.status(201).json(recipe)
    })
})

module.exports = router;
