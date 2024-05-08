const { url2text } = require("../helpers/url2text")

//TODO: getArticles
const getArticles = async (req, res) => {
    res.json({
        message: "get articles"
    })
}

//TODO: addArticle
const addArticle = async (req, res) => {
    const {url} = req.body
    const text = await url2text(url)

    res.json({
        message: text
    })
}

//TODO: deleteArticle
const deleteArticle = async (req, res) => {
    res.json({
        message: "delete article"
    })
}

module.exports = {
    getArticles,
    addArticle,
    deleteArticle
}