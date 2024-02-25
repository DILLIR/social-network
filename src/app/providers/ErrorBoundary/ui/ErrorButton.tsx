import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

// Component for testing ErrorBoundary
export function ErrorButton() {
    const [error, setError] = useState<boolean>(false);

    const onThrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error('Error Button');
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
            //eslint-disable-next-line
        >
            Throw error
        </Button>
    );
}
