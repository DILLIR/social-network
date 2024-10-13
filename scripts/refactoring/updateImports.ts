import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths(['src/**/*.ts', 'src/**/*.tsx']);

const files = project.getSourceFiles();

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

files.forEach((file) => {
    const importDeclarations = file.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const moduleSpecifier = importDeclaration.getModuleSpecifierValue();
        if (isAbsolute(moduleSpecifier)) {
            console.log(`Updating import: ${moduleSpecifier}`);
            importDeclaration.setModuleSpecifier(`@/${moduleSpecifier}`);
        }
    });
});

project.save();
