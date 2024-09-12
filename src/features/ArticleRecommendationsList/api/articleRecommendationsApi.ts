import { rtkApi } from 'shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        getArticleRecommendationsList: builder.query({
            query: (limit: number) => ({
                url: '/articles',
                params: {
                    _limit: limit
                }
            })
        })
    })
});

export const useArticleRecommendationList = recommendationsApi.useGetArticleRecommendationsListQuery;
