import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainLayout.module.scss';

interface MainLayoutProps {
    className?: string;
    header: React.ReactNode;
    content: React.ReactNode;
    sidebar: React.ReactNode;
    toolbar?: React.ReactNode;
}

export function MainLayout({
    className,
    header,
    content,
    sidebar,
    toolbar
}: MainLayoutProps) {
    return (
        <div className={classNames(cls.MainLayout, {}, [className])}>
            <div className={cls.sidebar}>{sidebar}</div>
            <div className={cls.content}>{content}</div>
            <div className={cls.rightbar}>
                <div className={cls.header}>{header}</div>
                <div className={cls.toolbar}>{toolbar}</div>
            </div>
        </div>
    );
}
