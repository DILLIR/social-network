import { ErrorButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Stack } from 'shared/ui/Stack/Stack';
import { useState } from 'react';

function MainPage() {
    const { t } = useTranslation('main');
    const [value, setValue] = useState<string | number>();

    return (
        <Page>
            <h1 style={{ marginBottom: '10px' }}>{t('MAIN PAGE')}</h1>
            <Stack width="fit-content" gap={10}>
                <ErrorButton />
                <ListBox 
                    defaultValue="Select value"
                    onChange={(value) => {setValue(value)}}
                    value={value}
                    items={[
                        { value: '1', label: 'One' },
                        { value: '2', label: 'Two' },
                        { value: '3', label: 'Three', disabled: true },
                    ]}
                />
            </Stack>
        </Page>
    );
}

export default MainPage;
