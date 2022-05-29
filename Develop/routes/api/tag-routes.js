const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
    // be sure to include its associated Product data
  Tag.findAll()
    .then(tagData => res.json(tagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(tagData => res.json(tagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then(tagData => res.json(tagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.put('/:id', (req, res) => {
  Tag.update({
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id
      }
  })
  .then(tagData => res.json(tagData))
  .catch(err=> {
    console.log(err);
    res.status(500).json(err);
  })
});


router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(tagtData => {
      if (!tagtData) {
        res.status(404).json({ message: 'No TAG found with this id' });
        return;
      }
      res.json(tagtData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
