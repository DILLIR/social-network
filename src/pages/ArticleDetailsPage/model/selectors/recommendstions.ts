import { StateSchema } from "app/providers/StoreProvider";

export const getArticleRecommendationsIsLoading = (state: StateSchema) => state?.articleDetailsPage?.recommendations?.isLoading || false;
export const getArticleCommentsError = (state: StateSchema) => state?.articleDetailsPage?.recommendations?.error;