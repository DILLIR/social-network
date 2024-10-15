import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export function PageError({ className }: PageErrorProps) {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <>
                        <Text title={t('Something went wrong')} />
                        <Button onClick={reloadPage}>{t('Reload')}</Button>
                    </>
                }
                off={
                    <>
                        <p>{t('Something went wrong')}</p>
                        <ButtonDeprecated onClick={reloadPage}>
                            {t('Reload')}
                        </ButtonDeprecated>
                    </>
                }
            />
        </div>
    );
}
