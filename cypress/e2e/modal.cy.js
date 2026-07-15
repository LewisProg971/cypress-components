describe('Modal Component', () => {
  beforeEach(() => {
    // visiter le fichier HTML local pour le composant Modal
    cy.visit('components/modal.html');
  });

  it('should open the modal when clicking on the Display button', () => {
    // initialement, le conteneur du modal ne doit pas être visible
    cy.get('div.fixed').should('not.be.visible');

    // cliquer sur le bouton "Display"
    cy.contains('button', 'Display').click();

    // le conteneur du modal doit maintenant être visible
    cy.get('div.fixed').should('be.visible');
  });

  it('should close the modal when clicking outside the modal', () => {
    // ouvrir la première fois le modal
    cy.contains('button', 'Display').click();
    cy.get('div.fixed').should('be.visible');

    //cliquer en dehors du contenu du modal (sur l'overlay, par exemple, le coin supérieur gauche)
    cy.get('div.fixed').click('topLeft');

    // le conteneur du modal doit être caché à nouveau
    cy.get('div.fixed').should('not.be.visible');
  });

  it('should contain an h2 containing Lorem Ipsum', () => {
    // Open the modal
    cy.contains('button', 'Display').click();

    // verifier que le modal contient un élément h2 avec "Lorem Ipsum"
    cy.get('div.fixed').find('h2').should('contain.text', 'Lorem Ipsum');
  });
});
