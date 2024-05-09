const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({ apikey: process.env.OPENAI_API_KEY });
const model = "gpt-3.5-turbo";

/**
 * Function to get the answer from the AI
 * @param {string} question - The question to ask the AI
 * @param {Array} previousMessages - The previous messages in the chat
 * @returns {string} - The answer from the AI
 */
const getAnswer = async (
    question,
    previousMessages = []
) => {
    previousMessages.push({ role: "user", content: question });

    const response = await openai.chat.completions.create({
        model,
        messages: previousMessages,
    });

    const answer = response.choices[0].message.content;
    return answer;
};

module.exports = {
    getAnswer,
};
