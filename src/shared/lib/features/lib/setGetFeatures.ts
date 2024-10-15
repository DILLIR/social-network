import { FeatureFlags } from '../../../types/featureFlags';

let featureFlags: FeatureFlags;

export function setFeatureFlags(newFeatureFlags?: FeatureFlags): void {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlags): boolean {
    return featureFlags?.[flag] ?? false;
}

export function getAllFeatureFlags() {
    return featureFlags;
}
