import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import { Input } from '@/shared/ui/Input/Input';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Stack } from '@/shared/ui/Stack/Stack';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Text } from '@/shared/ui/Text/Text';
import { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { Drawer } from '../../../../shared/ui/Drawer/Drawer';
import cls from './RatingCard.module.scss';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onSubmit?: (starsCount: number, feedback?: string) => void;
}

export function RatingCard({
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onCancel,
    onSubmit
}: RatingCardProps) {
    const { t } = useTranslation();
    const [openModal, setOpenModal] = useState(false);
    const [starsCount, setStarsCount] = useState(0);
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
        [hasFeedback, onSubmit]
    );

    const closeModal = useCallback(() => {
        setOpenModal(false);
    }, []);

    const acceptHandler = useCallback(() => {
        onSubmit?.(starsCount, feedback);
        setOpenModal(false);
    }, [starsCount, feedback]);

    const cancelHandler = useCallback(() => {
        onSubmit?.(starsCount);
        setOpenModal(false);
    }, [starsCount]);

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
        <Card className={classNames(cls.RatingCard, {}, [className])}>
            <Stack alignItems="center">
                <Text title={title} />
                <StarRating size={40} onSelect={onSelectStars} />
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
                <Drawer isOpen={openModal} onClose={closeModal} lazy>
                    <Stack gap={32}>
                        {modalContent}
                        {/* <Button
                            onClick={cancelHandler}
                            theme={ButtonTheme.OUTLINE_RED}
                        >
                            {t('Cancel')}
                        </Button> */}
                        <Button onClick={acceptHandler} size={ButtonSize.L}>
                            {t('Send')}
                        </Button>
                    </Stack>
                </Drawer>
            </MobileView>
        </Card>
    );
}
