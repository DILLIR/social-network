const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const createModel = require('./createModel');
const createUi = require('./createUi');
const createPublicApi = require('./createPublicApi');
const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = async (layerName, sliceName) => {
    try {
        await fs.mkdir(
            resolveRoot('src', layerName, firstCharUpperCase(sliceName))
        );
    } catch (error) {
        console.log(`Error creating slice ${slice} directory`, error);
    }

    await createModel(layerName, sliceName);
    await createUi(layerName, sliceName);
    await createPublicApi(layerName, sliceName);
};
