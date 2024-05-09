/*
    article
    host + /api/article
*/

const { Router } = require("express");
const { check } = require("express-validator");
const {
    getArticles,
    addArticle,
    deleteArticle,
    getChat,
    getChatAnswer,
} = require("../controllers/article");
const { validateFields } = require("../middlewares/validateFields");

const router = Router();

router.get("/", getArticles);

router.get("/:id", getChat);

router.post(
    "/",
    [
        check("name", "Title is required").not().isEmpty(),
        check("url", "Content is required").not().isEmpty(),
        validateFields,
    ],
    addArticle
);

router.post(
    "/chat/:id",
    [check("question", "Question is required").not().isEmpty(), validateFields],
    getChatAnswer
);

router.delete("/:id", deleteArticle);

module.exports = router;
