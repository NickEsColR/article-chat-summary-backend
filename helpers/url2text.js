const cheerio = require('cheerio');
const axios = require('axios');

/**
 * Function to extract the text from an article url
 * @param {string} url - The article url to extract the text
 * @returns - The text extracted from the article
 */
const url2text = async(url) => {
    try{
        const {data} = await axios.get(url)
        const $ = cheerio.load(data);
        return $("p").text()
    }catch(e){
        console.error(e)
    }
}

module.exports = {url2text}