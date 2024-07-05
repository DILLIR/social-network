import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
    className?: string;
}

export function LoginForm({ className }: LoginFormProps) {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input type="text" placeholder={t("Enter_username")} autofocus/>
            <Input type="text" placeholder={t("Enter_password")}/>
            <Button className={cls.Btn} theme={ButtonTheme.BACKGROUND_INVERTED}>{t('Continue')}</Button>
        </div>
    );
}