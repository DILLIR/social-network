import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});

project.addSourceFilesAtPaths(['src/**/*.ts', 'src/**/*.tsx']);

const files = project.getSourceFiles();
const sharedUiDirectory = project.getDirectory(
    path.resolve(__dirname, '../../src/shared/ui')
);
const componentsDirs = sharedUiDirectory?.getDirectories();

function isAbsolute(path: string) {
    const layers = [
        'app',
        'shared',
        'entities',
        'features',
        'widgets',
        'pages'
    ];
    return layers.some((layer) => path.startsWith(layer));
}

componentsDirs?.forEach((dir) => {
    const indexFilePath = `${dir.getPath()}/index.ts`;
    const indexFile = dir.getSourceFile(indexFilePath);
    
    if(!indexFile) {
        const sourceCode = `export * from './${dir.getBaseName()}';
        `;
        const file = dir.createSourceFile(indexFilePath, sourceCode, {overwrite: true});

        file.save(); 
    }
});

files.forEach((file) => {
    const importDeclarations = file.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const moduleSpecifier = importDeclaration.getModuleSpecifierValue();
        const moduleSpecifierWithoutAlias = moduleSpecifier.replace("@/", '');

        const segments = moduleSpecifierWithoutAlias.split('/');

        const isSharedLayer = segments[0] === 'shared';
        const isUiLayer = segments[1] === 'ui';

        if(isAbsolute(moduleSpecifierWithoutAlias) && isSharedLayer && isUiLayer) {
            console.log(`Updating import: ${moduleSpecifier}`);
            const result = moduleSpecifierWithoutAlias.split('/').slice(0, 3).join('/');
            importDeclaration.setModuleSpecifier(`@/${result}`);
        }
    });
});

project.save();
