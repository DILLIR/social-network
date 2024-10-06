module.exports = (componentName) => `import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './${componentName}.module.scss';

interface ${componentName}Props {
    className?: string;
}

export function ${componentName}({ className }: ${componentName}Props) {
    return (
        <div className={classNames(cls.${componentName}, {}, [className])}>
            ${componentName} component
        </div>
    );
}`;