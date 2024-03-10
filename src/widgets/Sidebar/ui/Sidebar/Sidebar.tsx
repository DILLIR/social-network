import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);

    const {t} = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <div className={cls.switchers}>
                <LangSwitcher />
                <ThemeSwitcher />
                <button onClick={onToggle}>{collapsed ? t("Toggle") : t("Toggle back")}</button>
            </div>
        </div>
    );
}
