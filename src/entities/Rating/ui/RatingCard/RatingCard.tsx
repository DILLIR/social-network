import { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import { Input } from '@/shared/ui/Input/Input';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Stack } from '@/shared/ui/Stack/Stack';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Text } from '@/shared/ui/Text/Text';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onSubmit?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export function RatingCard({
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onCancel,
    onSubmit,
    rate = 0,
}: RatingCardProps) {
    const { t } = useTranslation();
    const [openModal, setOpenModal] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setOpenModal(true);
            } else {
                onSubmit?.(selectedStarsCount);
            }
        },
        [hasFeedback, onSubmit],
    );

    const closeModal = useCallback(() => {
        setOpenModal(false);
    }, []);

    const acceptHandler = useCallback(() => {
        onSubmit?.(starsCount, feedback);
        setOpenModal(false);
    }, [onSubmit, starsCount, feedback]);

    const cancelHandler = useCallback(() => {
        setOpenModal(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                placeholder={t('Your feedback')}
                value={feedback}
                onChange={(value) => setFeedback(value)}
            />
        </>
    );

    return (
        <Card className={className}>
            <Stack alignItems="center">
                <Text title={starsCount ? t('Thank you for rate') : title} />
                <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
            </Stack>
            <BrowserView>
                <Modal isOpen={openModal} onClose={closeModal}>
                    <Stack gap={16}>
                        {modalContent}
                        <Stack
                            direction="row"
                            gap={16}
                            justifyContent="flex-end"
                        >
                            <Button
                                onClick={cancelHandler}
                                theme={ButtonTheme.OUTLINE_RED}
                            >
                                {t('Cancel')}
                            </Button>
                            <Button onClick={acceptHandler}>{t('Send')}</Button>
                        </Stack>
                    </Stack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={openModal} onClose={closeModal}>
                    <Stack gap={32}>
                        {modalContent}
                        <Button onClick={acceptHandler} size={ButtonSize.L}>
                            {t('Send')}
                        </Button>
                    </Stack>
                </Drawer>
            </MobileView>
        </Card>
    );
}
