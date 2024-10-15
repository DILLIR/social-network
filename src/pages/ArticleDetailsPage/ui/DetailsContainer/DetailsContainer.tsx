import { useParams } from 'react-router-dom';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleDetails } from '../../../../entities/Article';

interface DetailsContainerProps {
    className?: string;
}

export function DetailsContainer({ className }: DetailsContainerProps) {
    const { id } = useParams<{ id: string }>();

    if (id === undefined) {
        return null;
    }
    return (
        <Card className={className}>
            <ArticleDetails id={id} />
        </Card>
    );
}
