import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '../Button/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export function LangSwitcher({ className, short }: LangSwitcherProps) {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'uk' ? 'en' : 'uk');
    };

    return (
        <Button theme={ButtonTheme.BACKGROUND_INVERTED} className={classNames(className, {}, [])} onClick={toggleLanguage}>
            {t(short ? 'ShortTranslate' : 'Translate')}
        </Button>
    );
}
