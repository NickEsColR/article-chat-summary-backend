const { getAnswer } = require("../api/openai");
const { url2text } = require("../helpers/url2text");
const Article = require("../models/article");

//TODO: getArticles
/**
 * Function to handle the get articles name and summary
 * @param {request} req - The request object
 * @param {response} res - The response object
 */
const getArticles = async (req, res) => {
    const articles = await Article.find({},'name summary');
    res.json({
        ok: true,
        articles,
    });
};


/**
 * Function to handle the add new article request
 * @param {request} req - The request object
 * @param {response} res - The response object
 */
const addArticle = async (req, res) => {
    const { url, name } = req.body;
    const text = await url2text(url);
    try {
        const question = `Use the article inside the triple asterisks to answer my questions.\n ***${text} \n ***`;

        const messages = [
            { role: "system", content: "You are a helpful assistant" },
        ];
        const answer = await getAnswer(question, messages);
        messages.push({ role: "assistant", content: answer });
        const summary = await getAnswer(
            "Do a summary of the article in 50 words",
            messages
        );
        messages.push({ role: "assistant", content: summary });

        const article = new Article({
            name,
            summary,
            initMessages: messages,
            chat: [],
        });
        await article.save();

        res.json({
            ok: true,
            article,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: "Please contact the administrator",
        });
    }
};

//TODO: deleteArticle
/**
 * Function to handle the delete article request
 * @param {request} req - The request object
 * @param {response} res  - The response object
 */
const deleteArticle = async (req, res) => {
    res.json({
        message: "delete article",
    });
};

module.exports = {
    getArticles,
    addArticle,
    deleteArticle,
};
