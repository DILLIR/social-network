import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { User } from '@/entities/User';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Stack } from '@/shared/ui/redesigned/Stack';
import cls from './ArticleAdditionalInfo.module.scss';

interface ArticleAdditionalInfoProps {
    className?: string;
    author: User;
    createdAt: string;
    views: number;
    onEdit: () => void;
}

// eslint-disable-next-line react/display-name
export const ArticleAdditionalInfo = memo(
    (props: ArticleAdditionalInfoProps) => {
        const { className, author, createdAt, views, onEdit } = props;
        const { t } = useTranslation('profile');

        return (
            <Stack gap={16} className={className}>
                <Stack gap={8} direction="row" alignItems="center">
                    <Avatar src={author.avatar} size={32} />
                    <Text text={author.username} weight="bold" />
                </Stack>
                <Stack
                    direction="row"
                    gap={8}
                    justifyContent="space-between"
                    flexWrap="wrap"
                >
                    <Text text={createdAt} />
                    <Text text={t('{{count}} views', { count: views })} />
                </Stack>
                <Button onClick={onEdit} className={cls.btn}>
                    {t('Edit')}
                </Button>
            </Stack>
        );
    }
);
