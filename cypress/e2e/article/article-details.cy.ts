let currentArticleId: string;

describe('User visits article details page', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((data) => {
            currentArticleId = data.id;
            cy.visit(`/articles/${data.id}`);
        });
    });
    afterEach(() => {
        cy.deleteArticle(currentArticleId);
    });
    it('it successfully loads', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('and sees article recommendations', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it('and leaves a comment', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('AddCommentForm').scrollIntoView().should('be.visible');
        cy.addComment('Test comment');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('and rates it', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('RatingCard').scrollIntoView().should('be.visible');
        cy.setRate(3, 'Test feedback');
        cy.get('[data-selected=true]').should('have.length', 3);
    });
    it('and rates it example with stubs on fixture', () => {
        cy.intercept('GET', '**/articles/*', {
            fixture: 'article-details.json'
        });
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('RatingCard').scrollIntoView().should('be.visible');
        cy.setRate(3, 'Test feedback');
        cy.get('[data-selected=true]').should('have.length', 3);
    });
});
