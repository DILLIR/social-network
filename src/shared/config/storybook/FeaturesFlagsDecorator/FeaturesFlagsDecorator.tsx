import { StoryFn } from '@storybook/react';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { setFeatureFlags } from '@/shared/lib/features';

export const FeaturesFlagsDecorator =
    // eslint-disable-next-line react/display-name
    (features: FeatureFlags) => (StoryComponent: StoryFn) => {
        setFeatureFlags(features);
        return <StoryComponent />;
    };
