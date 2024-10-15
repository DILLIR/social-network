import { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import {
    Button as ButtonDeprecated,
    ButtonSize,
    ButtonTheme
} from '@/shared/ui/deprecated/Button';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Stack } from '@/shared/ui/redesigned/Stack';
import { StarRating as StarRatingDeprecated } from '@/shared/ui/deprecated/StarRating';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Drawer as DrawerDeprecated } from '@/shared/ui/deprecated/Drawer';
import { Card } from '@/shared/ui/redesigned/Card';
import { Button } from '@/shared/ui/redesigned/Button';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Drawer } from '@/shared/ui/redesigned/Drawer';

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
    rate = 0
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
        [hasFeedback, onSubmit]
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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <>
                    <Text title={feedbackTitle} />
                    <Input
                        data-testid="RatingCard.Input"
                        placeholder={t('Your feedback')}
                        value={feedback}
                        onChange={(value) => setFeedback(value)}
                    />
                </>
            }
            off={
                <>
                    <TextDeprecated title={feedbackTitle} />
                    <InputDeprecated
                        data-testid="RatingCard.Input"
                        placeholder={t('Your feedback')}
                        value={feedback}
                        onChange={(value) => setFeedback(value)}
                    />
                </>
            }
        />
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card className={className} data-testid="RatingCard">
                    <Stack alignItems="center">
                        <Text
                            title={starsCount ? t('Thank you for rate') : title}
                        />
                        <StarRatingDeprecated
                            selectedStars={starsCount}
                            size={40}
                            onSelect={onSelectStars}
                        />
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
                                        variant="outline"
                                        data-testid="RatingCard.Cancel"
                                    >
                                        {t('Cancel')}
                                    </Button>
                                    <Button
                                        onClick={acceptHandler}
                                        data-testid="RatingCard.Send"
                                    >
                                        {t('Send')}
                                    </Button>
                                </Stack>
                            </Stack>
                        </Modal>
                    </BrowserView>
                    <MobileView>
                        <Drawer isOpen={openModal} onClose={closeModal}>
                            <Stack gap={32}>
                                {modalContent}
                                <Button onClick={acceptHandler} size="l">
                                    {t('Send')}
                                </Button>
                            </Stack>
                        </Drawer>
                    </MobileView>
                </Card>
            }
            off={
                <CardDeprecated className={className} data-testid="RatingCard">
                    <Stack alignItems="center">
                        <TextDeprecated
                            title={starsCount ? t('Thank you for rate') : title}
                        />
                        <StarRatingDeprecated
                            selectedStars={starsCount}
                            size={40}
                            onSelect={onSelectStars}
                        />
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
                                    <ButtonDeprecated
                                        onClick={cancelHandler}
                                        theme={ButtonTheme.OUTLINE_RED}
                                        data-testid="RatingCard.Cancel"
                                    >
                                        {t('Cancel')}
                                    </ButtonDeprecated>
                                    <ButtonDeprecated
                                        onClick={acceptHandler}
                                        data-testid="RatingCard.Send"
                                    >
                                        {t('Send')}
                                    </ButtonDeprecated>
                                </Stack>
                            </Stack>
                        </Modal>
                    </BrowserView>
                    <MobileView>
                        <DrawerDeprecated
                            isOpen={openModal}
                            onClose={closeModal}
                        >
                            <Stack gap={32}>
                                {modalContent}
                                <ButtonDeprecated
                                    onClick={acceptHandler}
                                    size={ButtonSize.L}
                                >
                                    {t('Send')}
                                </ButtonDeprecated>
                            </Stack>
                        </DrawerDeprecated>
                    </MobileView>
                </CardDeprecated>
            }
        />
    );
}
