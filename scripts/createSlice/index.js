const createTemplate = require('./templates/createTemplate');

const layer = process.argv[2];
const slice = process.argv[3];

const layers = ['features', 'entities', 'page'];

if (!layer || !layers.includes(layer)) {
    throw new Error(`Enter layer ${layers.join(', ')}`);
}

if (!slice) {
    throw new Error('Enter slice name');
}

createTemplate(layer, slice).then(() =>
    console.info(`Slice ${slice} successfully created in ${layer} layer`)
);
