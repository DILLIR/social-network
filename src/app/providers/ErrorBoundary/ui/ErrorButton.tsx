import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button/Button';

// Component for testing ErrorBoundary
export function ErrorButton() {
    const { t } = useTranslation();
    const [error, setError] = useState<boolean>(false);

    const onThrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return <Button onClick={onThrow}>{t('Throw error')}</Button>;
}
