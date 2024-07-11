import logindata from "../fixtures/logindata.json"
import buzzdata from "../fixtures/buzzdata.json"
describe('Verify user can post some thing in the Buzz', () => {


    it('Text message post', () => {
    
        cy.visit("/web/index.php/auth/login")
        cy.log("User launched application")

        //cy.wait(10000)
        cy.get('input[name="username2"]').type(logindata.username)

        cy.log("User typed username as "+ logindata.username)

        cy.get('input[placeholder="Password"]').type(logindata.password)

        cy.log("User typed password")

        cy.get('button[type="submit"]').click()
      
        cy.contains('Dashboard').should("be.visible")

        cy.contains('Buzz').click()

        cy.contains('Buzz Newsfeed').should("be.visible")

        cy.get(`textarea[placeholder="What's on your mind?"]`).type(buzzdata.post)

        cy.get('button[type="submit"]').click()

        cy.contains('Successfully Saved').should("be.visible")

    })


  })