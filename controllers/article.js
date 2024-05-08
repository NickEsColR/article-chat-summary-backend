const { getAnswer } = require("../api/openai");
const { url2text } = require("../helpers/url2text");

//TODO: getArticles
const getArticles = async (req, res) => {
    res.json({
        message: "get articles",
    });
};

//TODO: addArticle
const addArticle = async (req, res) => {
    const { url } = req.body;
    const text = await url2text(url);
    const question = `Use the article inside the triple asterisks to answer my questions.\n ***${text} \n ***`;

    const messages = [
        { role: "system", content: "You are a helpful assistant" },
    ];
    const answer = await getAnswer(question, messages);
    messages.push({ role: "assistant", content: answer });
    const summary = await getAnswer("Do a summary of the article in 50 words", messages);
    messages.push({ role: "assistant", content: summary });

    res.json({
        ok: true,
        summary,
    });
};

//TODO: deleteArticle
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
