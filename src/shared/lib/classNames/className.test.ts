import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('somaClass')).toBe('somaClass');
    });

    test('with additional classes', () => {
        expect(classNames('somaClass', {}, ['additionalClass'])).toBe(
            'somaClass additionalClass',
        );
    });

    test('with mods', () => {
        expect(
            classNames(
                'someClass',
                {
                    hovered: true,
                    scrollable: true,
                },
                ['class1', 'class2'],
            ),
        ).toBe('someClass class1 class2 hovered scrollable');
    });

    test('with mods false', () => {
        expect(
            classNames(
                'someClass',
                {
                    hovered: true,
                    scrollable: false,
                },
                ['class1', 'class2'],
            ),
        ).toBe('someClass class1 class2 hovered');
    });

    test('with mods false', () => {
        expect(
            classNames(
                'someClass',
                {
                    scrollable: true,
                },
                ['class1', 'class2'],
            ),
        ).toBe('someClass class1 class2 scrollable');
    });
});
