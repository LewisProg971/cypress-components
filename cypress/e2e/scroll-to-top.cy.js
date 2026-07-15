describe('Scroll-to-Top Component', () => {
  beforeEach(() => {
    // aller vers le fichier local HTML pour le composant Scroll-to-Top
    cy.visit('components/scroll-to-top.html');
  });

  it('should show the scroll-to-top button when scrolling down', () => {
    // initialement, le conteneur du bouton de retour en haut ne doit pas être visible
    cy.get('div.fixed.bottom-3.right-3').should('not.be.visible');

    // scroll vers le bas de la page de 500px
    cy.scrollTo(0, 500);

    // le scroll-to-top button container doit devenir visible
    cy.get('div.fixed.bottom-3.right-3').should('be.visible');
  });

  it('should return to the top and hide the button when clicked', () => {
    // scroll vers le bas rend le bouton visible
    cy.scrollTo(0, 500);
    cy.get('div.fixed.bottom-3.right-3').should('be.visible');

    // cliquer sur le bouton de retour en haut
    cy.get('div.fixed.bottom-3.right-3 button').click();

    // verifier que la position de défilement revient à 0 (haut de la page)
    cy.window().its('pageYOffset').should('equal', 0);

    // verifier que le conteneur du bouton de retour en haut n'est plus visible
    cy.get('div.fixed.bottom-3.right-3').should('not.be.visible');
  });
});
