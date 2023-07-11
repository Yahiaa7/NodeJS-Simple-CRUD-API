const db = require('../models/index');

module.exports.dbConnectSync = async () => {
    await db.sequelize.authenticate().then(async () => {
        console.log('DB Connected Successfully!');
        await db.sequelize.sync({ force: false }).then(() => {
            console.log("DB Synced!");
        }).catch((err) => {
            console.log(`Error Syncing to DB: \n${err}`);
        });
    }).catch((err) => {
        console.log(`Error Connecting to DB: \n${err}`);
    });
};
