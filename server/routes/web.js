const express = require('express');
const router = express.Router();

const pagesController = require('../controllers/pagesController.js');
const projectsController = require('../controllers/projectsController');
const blogController = require('../controllers/blogController');

/* -------------------------------------------------------
    Pages Routes
----------------------------------------------------------*/

router.get('/', pagesController.homePage);
router.get('/about', pagesController.about);
router.get('/contact', pagesController.contact);

/* -------------------------------------------------------
    Projects Routes
----------------------------------------------------------*/
router.get('/projects', projectsController.index);
router.get('/projects/create', projectsController.create);
router.post('/projects', projectsController.store);
router.get('/projects/:title', projectsController.show);
router.get('/projects/:title/edit', projectsController.edit);
router.put('/projects/:title', projectsController.update);
router.delete('/projects/:title', projectsController.delete);

/* -------------------------------------------------------
    Blog Routes
----------------------------------------------------------*/
router.get('/blog', blogController.index);
router.get('/blog/:title', blogController.show); 


/* -------------------------------------------------------
    Admin Routes
----------------------------------------------------------*/


module.exports = router;
