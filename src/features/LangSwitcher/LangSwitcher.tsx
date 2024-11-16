import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';


import { Button } from '@/shared/ui/redesigned/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(function LangSwitcher({
    className,
    short
}: LangSwitcherProps) {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'uk' ? 'en' : 'uk');
    };

    return (
        <Button
            variant="clear"
            className={classNames('', {}, [className])}
            onClick={toggleLanguage}
        >
            {t(short ? 'ShortTranslate' : 'Translate')}
        </Button>
    );
});
