/*
    article
    host + /api/article
*/

const {Router} = require('express');
const {check} = require('express-validator');
const { getArticles, addArticle, deleteArticle } = require('../controllers/article');

const router = Router();

//TODO: get articles
router.get('/',getArticles)

//TODO: add article
router.post('/',addArticle)

//TODO: delete article
router.delete('/:id',deleteArticle)

module.exports = router;