const router = require('express').Router();

const { 
    rutaDB,
    rutaGet,
    rutaPost,
    rutaPut,
    rutaDelete } = require('../controllers/student.controller.js');

router.get('/dbserver', rutaDB);
router.get('/:id', rutaGet);
router.post('/', rutaPost);
router.put('/:id', rutaPut);
router.delete('/:id', rutaDelete);

module.exports = router;