import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '../../../../widgets/Page';
import { Text } from '../../../../shared/ui/redesigned/Text';
import { Stack } from '../../../../shared/ui/redesigned/Stack';
import { UiDesignSwitcher } from '../../../../features/UiDesignSwitcher';
import cls from './SettingsPage.module.scss';

interface SettingsPageProps {
    className?: string;
}

function SettingsPage({ className }: SettingsPageProps) {
    return (
        <Page className={classNames(cls.SettingsPage, {}, [className])}>
            <Stack gap={16}>
                <Text title="User settings" />
                <UiDesignSwitcher />
            </Stack>
        </Page>
    );
}

export default SettingsPage;
