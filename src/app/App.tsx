import { useTheme } from 'app/providers/ThemeProvider';
import { Suspense, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';
import './styles/index.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button } from '../shared/ui/Button/Button';

export function App() {
    const { theme } = useTheme();

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <Button onClick={() => {setIsModalOpen(true)}}>Open Modal</Button>

                <Modal isOpen={isModalOpen} onClose={() => {setIsModalOpen(false)}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero soluta molestias sapiente quasi et tempore illo illum, qui similique saepe sunt ipsam, sequi id labore nam placeat reiciendis. Beatae, consequuntur.
                </Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}