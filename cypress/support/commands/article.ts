import { Article } from '../../../src/entities/Article/model/types/article';

const defaultArticle = {
    title: 'Testing article',
    subtitle: 'Биология',
    img: 'https://avatars.mds.yandex.net/get-zen_doc/2746556/pub_5f50dd7e1a1ddf4776aa5569_5f50decd2506f211d1de6284/scale_1200',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: ['SCIENCE'],
    blocks: []
};

export const createArticle = (article?: Article) =>
    cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: {
                Authorization: 'Bearer'
            },
            body: article ?? defaultArticle
        })
        .then((req) => req.body);

export const deleteArticle = (articleId: string) =>
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: {
            Authorization: 'Bearer'
        }
    });

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            deleteArticle(articleId: string): Chainable<void>;
        }
    }
}
