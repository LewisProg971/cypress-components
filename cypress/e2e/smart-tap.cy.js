describe('Smart Tag Component', () => {
  beforeEach(() => {
    // aller vers le fichier local HTML pour le composant Smart Tag/Tap
    cy.visit('components/smart-tap.html');
  });

  it('should show the tag when hovering over See more', () => {
    // initialement, le texte de l'infobulle ne doit pas être visible
    cy.contains('Lorem ipsum dolor').should('not.be.visible');

    // survoler l'élément "See more"
    cy.contains('See more').trigger('mouseover');

    // la tooltip doit devenir visible
    cy.contains('Lorem ipsum dolor').should('be.visible');
  });

  it('should hide the tag when mouse leaves See more', () => {
    cy.contains('See more').trigger('mouseover');
    cy.contains('Lorem ipsum dolor').should('be.visible');
    cy.contains('h1', 'Smart tag').trigger('mouseover');

    // la tooltip doit être cachée à nouveau
    cy.contains('Lorem ipsum dolor').should('not.be.visible');
  });
});
