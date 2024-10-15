import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '../../../const/localstorage';
import { FeatureFlags } from '../../../types/featureFlags';

const defaultFeatures: FeatureFlags = {
    isAppRedesigned:
        localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new'
};

let featureFlags: FeatureFlags = {
    ...defaultFeatures
};

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
