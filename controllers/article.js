//TODO: getArticles
const getArticles = async (req, res) => {
    res.json({
        message: "get articles"
    })
}

//TODO: addArticle
const addArticle = async (req, res) => {
    res.json({
        message: "add article"
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