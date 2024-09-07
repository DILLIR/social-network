const firstLetterToUpperCase = require('../firstCharUpperCase.js');

module.exports = (sliceName) => `export type ${firstLetterToUpperCase(sliceName)}Schema = {
    // Define the schema for the ${sliceName} slice here
}
`;
