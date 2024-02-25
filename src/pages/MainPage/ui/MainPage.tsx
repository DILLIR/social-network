import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation('main');

    return (
        <div>
            <h1>{t('MAIN PAGE')}</h1>
        </div>
    );
}

export default MainPage;
