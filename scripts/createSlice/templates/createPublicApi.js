const fs = require('fs/promises');
const firstLetterToUpperCase = require('../firstCharUpperCase.js');
const resolveRoot = require('../resolveRoot');

module.exports = async (layerName, sliceName) => {
    const componentName = firstLetterToUpperCase(sliceName);
    const schemaType = `${componentName}Schema`;

    try {
        await fs.writeFile(
            resolveRoot('src', layerName, sliceName, `index.ts`),
            `export { ${componentName} } from './ui/${componentName}/${componentName}';
export { ${schemaType} } from './model/types/${sliceName}Schema';`
        );
    } catch (error) {
        console.log(`Error creating public api for ${sliceName} `, error);
    }
};
