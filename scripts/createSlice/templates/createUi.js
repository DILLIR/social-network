const fs = require("fs/promises");
const firstCharUpperCase = require("../firstCharUpperCase");
const resolveRoot = require("../resolveRoot");
const styleTemplate = require("./styleTemplate");
const componentTemplate = require("./componentTemplate");
const storyTemplate = require("./storyTemplate");

module.exports = async (layerName, sliceName) => {
    const resolveUiPath = (...segments) => resolveRoot("src", layerName, sliceName, "ui", ...segments);
    const sliceNameUpperCase = firstCharUpperCase(sliceName);
    
    try {
        await fs.mkdir(resolveUiPath())
        await fs.mkdir(resolveUiPath(sliceNameUpperCase))
    } catch (error) {
        console.log(`Error creating slice ${sliceName} ui directory`, error);
    }
    
    const createStyle = async () => {
        try {
            await fs.writeFile(
                resolveUiPath(sliceNameUpperCase, `${sliceNameUpperCase}.module.scss`),
                styleTemplate(sliceNameUpperCase)
            )
        } catch (error) {
            console.log(`Error creating style for ${sliceName} `, error);
        }
    }

    const createComponent = async () => {
        try {
            await fs.writeFile(
                resolveUiPath(sliceNameUpperCase, `${sliceNameUpperCase}.tsx`),
                componentTemplate(sliceNameUpperCase)
            )
        } catch (error) {
            console.log(`Error creating component for ${sliceName} `, error);
        }
    }

    const createStory = async () => {
        try {
            await fs.writeFile(
                resolveUiPath(sliceNameUpperCase, `${sliceNameUpperCase}.stories.tsx`),
                storyTemplate(layerName, sliceNameUpperCase)
            )
        } catch (error) {
            console.log(`Error creating story for ${sliceName} `, error);
        }
    }
    
    await createStyle();
    await createComponent();
    await createStory();
}