const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const reduxSliceTemplate = require('./reduxSliceTemplate');
const schemaTypeTemplate = require('./schemaTypeTemplate');

module.exports = async (layerName, sliceName) => {
    const resolveModelPath = (...segments) =>
        resolveRoot('src', layerName, sliceName, 'model', ...segments);

    try {
        await fs.mkdir(resolveModelPath());
        await fs.mkdir(resolveModelPath('selectors'));
        await fs.mkdir(resolveModelPath('services'));
        await fs.mkdir(resolveModelPath('slice'));
        await fs.mkdir(resolveModelPath('types'));
    } catch (error) {
        console.log(`Error creating slice ${sliceName} model directory`, error);
    }

    const createReduxSlice = async () => {
        try {
            await fs.writeFile(
                resolveModelPath('slice', `${sliceName}Slice.ts`),
                reduxSliceTemplate(sliceName)
            );
        } catch (error) {
            console.log(`Error creating redux slice for ${sliceName} `, error);
        }
    };

    const createSchemaType = async () => {
        try {
            await fs.writeFile(
                resolveModelPath('types', `${sliceName}Schema.ts`),
                schemaTypeTemplate(sliceName)
            );
        } catch (error) {
            console.log(`Error creating type schema for ${sliceName} `, error);
        }
    };

    await createReduxSlice();
    await createSchemaType();
};
