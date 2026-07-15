describe('Todolist Component', () => {
  beforeEach(() => {
    // aller vers le fichier local HTML pour le composant Todolist
    cy.visit('components/index.html');
  });

  it('should add four todos, delete the second one, and verify three remain', () => {
    const todos = ['Buy milk', 'Clean room', 'Read book', 'Write tests'];

    // ajout des 4 tests
    todos.forEach(todo => {
      cy.get('input[placeholder="What needs to be done?"]').type(todo);
      cy.get('button[type="submit"]').click();
    });

    // verifier que la liste contient exactement 4 taches
    cy.get('div.flex.items-center.justify-between').should('have.length', 4);

    // verifier que le compteur affiche 4
    cy.contains('Nombre de tâche(s) :').should('contain.text', '4');

    // suppression du deuxieme tache
    cy.get('div.flex.items-center.justify-between').eq(1).find('button').click();

    // verifier que la liste contient exactement 3 taches
    cy.get('div.flex.items-center.justify-between').should('have.length', 3);

    // verifier que le compteur affiche 3
    cy.contains('Nombre de tâche(s) :').should('contain.text', '3');

    // verifier que les taches restantes sont la première, la troisième et la quatrième
    cy.get('div.flex.items-center.justify-between').eq(0).should('contain.text', 'Buy milk');
    cy.get('div.flex.items-center.justify-between').eq(1).should('contain.text', 'Read book');
    cy.get('div.flex.items-center.justify-between').eq(2).should('contain.text', 'Write tests');
  });
});
