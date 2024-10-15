import { FeatureFlags } from '../../../types/featureFlags';
import { getFeatureFlag } from './setGetFeatures';

interface ToggleFeatures<T> {
    name: keyof FeatureFlags;
    on: () => T;
    off: () => T;
}

export function toggleFeatures<T>({ on, off, name }: ToggleFeatures<T>): T {
    return getFeatureFlag(name) ? on() : off();
}
