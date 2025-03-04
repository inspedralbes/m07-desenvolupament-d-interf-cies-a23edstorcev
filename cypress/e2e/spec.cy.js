describe('Proves E2E del meu lloc web', () => {
  it('Comprova que la pàgina principal es carrega i té el meu nom', () => {
      cy.visit('http://cypressact.dam.inspedralbes.cat/')
      cy.contains('NICO SE VA A REPUBLICA DOMINICANA').should('be.visible')
  })

  it('Comprova que el link a projectes funciona', () => {
      cy.visit('http://cypressact.dam.inspedralbes.cat/')
      cy.contains('Veure els meus projectes').click()
      cy.url().should('include', '/projectes.html')
      cy.contains('Els meus projectes').should('be.visible')
  })

  it('Comprova que els enllaços als repositoris existeixen', () => {
      cy.visit('http://cypressact.dam.inspedralbes.cat/projectes.html')
      cy.contains('Projecte 1').should('have.attr', 'href', 'https://github.com/inspedralbes/transversal-tr1-2024-2025-android-dam_24_25_tr1g5_android')
      cy.contains('Projecte 2').should('have.attr', 'href', 'https://github.com/inspedralbes/transversal-tr1-2024-2025-front-back-dam_24_25_tr1g5')
      cy.contains('Projecte 3').should('have.attr', 'href', 'https://github.com/a23edstorcev/practicaExamAndroid')
  })

  it('Comprova que el botó de tornar enrere funciona', () => {
      cy.visit('http://cypressact.dam.inspedralbes.cat/projectes.html')
      cy.contains('Tornar a la pàgina principal').click()
      cy.url().should('eq', 'http://cypressact.dam.inspedralbes.cat/index.html')
  })
})
