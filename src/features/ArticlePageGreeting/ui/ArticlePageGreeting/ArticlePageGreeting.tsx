import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Text } from '@/shared/ui/deprecated/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Drawer } from '@/shared/ui/deprecated/Drawer';

interface ArticlePageGreetingProps {
    className?: string;
}

export function ArticlePageGreeting({ className }: ArticlePageGreetingProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();
    const { isArticlePageWasOpen } = useJsonSettings();

    useEffect(() => {
        if (!isArticlePageWasOpen) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlePageWasOpen: true }));
        }
    }, [dispatch, isArticlePageWasOpen]);

    const text = (
        <Text
            title="Welcome to articles page"
            text="Here you can find a lot of interesting articles on various topics. Enjoy reading!"
        />
    );

    if (isMobile) {
        return (
            <Drawer
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                className={classNames('', {}, [className])}
            >
                {text}
            </Drawer>
        );
    }

    return (
        <Modal
            lazy
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            className={classNames('', {}, [className])}
        >
            {text}
        </Modal>
    );
}
