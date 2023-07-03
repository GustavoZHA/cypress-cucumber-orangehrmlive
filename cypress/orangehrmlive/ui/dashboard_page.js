export class Dashboard {
    imagen_dashboard = 'img[alt="client brand banner"]'

    verifyImagenOragle() {
        cy.get(this.imagen_dashboard).should('be.visible')
    }
}
