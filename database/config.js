const moongose = require('mongoose');

/**
 * Function to connect to the Mongo database
 */
const dbConnection = async () => {
    try {
        await moongose.connect(process.env.DB_CNN);
        console.log('DB Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error connecting to DB');
    }
}

module.exports = {
    dbConnection
}