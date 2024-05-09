/*
    article
    host + /api/article
*/

const {Router} = require('express');
const {check} = require('express-validator');
const { getArticles, addArticle, deleteArticle, getChat, getChatAnswer } = require('../controllers/article');

const router = Router();

router.get('/',getArticles)

router.get('/:id',getChat)

router.post('/',addArticle)

router.post('/chat/:id',getChatAnswer)

router.delete('/:id',deleteArticle)

module.exports = router;