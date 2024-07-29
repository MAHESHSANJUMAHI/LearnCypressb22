

import data from "../../fixtures/logindata.json"
describe('Verify Login Functionality', () => {

    const ussername = "Admin"
    const password = "admin123"

    beforeEach("Launch url", ()=>{
            
        cy.log("Test Execution Started")

        cy.visit("/web/index.php/auth/login")

    })

    afterEach( ()=>{
        
        cy.log("Test Execution completed")

    })

    it("Verify login with Valid Credentials", () => {

        cy.get("input[name='username']").type(ussername)

        cy.get('input[placeholder="Password"]').type(data.password)

        cy.get('button[type="submit"]').click()
      
        cy.contains('Dashboard').should("be.visible")

        
    })

    it('Verify login with valid username and invalid password', () => {

        let invalidpassword = "ergnrek"
  
        cy.get('input[name="username"]').type(data.username)

        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input').type(invalidpassword)

        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button").click()
      
        cy.contains('Invalid credentials').should("be.visible")
    })

    it.skip('Verify login with invalid username and valid password', () => {


        cy.get('input[name="username"]').type(data.wronmgusername)

        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input').type(data.password)

        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button").click()
      
        cy.contains('Invalid credentials').should("be.visible")
    })
 

    specify('Verify login with invalid username and invalid password', () => {

        //cy.viewport(375,667)

        cy.viewport("macbook-16")

  

        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input").type(data.wronmgusername)

        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input').type("invalidpassword")

        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button").click()
      
        cy.contains('Invalid credentials').should("be.visible")
    })


    it.skip("without entering username and password", ()=>{
      
        cy.get('button[type="submit"]').click()
        cy.contains('Required').should("be.visible")

    })
  })