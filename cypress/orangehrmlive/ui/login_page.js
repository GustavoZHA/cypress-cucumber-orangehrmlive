export class LoginPage {
    username_textbox = '[name=username]'
    password_textbox = '[name=password]'
    login_button = '[type=submit]'
    message_alert = 'div[role="alert"] p'

    enterUsername(username) {
        cy.get(this.username_textbox).type(username)
    }
    enterPassword(password) {
        cy.get(this.password_textbox).type(password)
    }

    clickLoginButton() {
        cy.get(this.login_button).click()
    }

    messageAlertAssertion(message) {
        cy.get(this.message_alert).should('be.visible').should('have.text', message)
    }

    login(username, password) {
        this.enterUsername(username)
        this.enterPassword(password)
    }
}