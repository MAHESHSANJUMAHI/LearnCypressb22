import data from "../../fixtures/logindata.json"

import jobtitledata from "../../fixtures/Admin/jobtitledata.json"
describe('Verify Add Job title', () => {


    it('Verify adding job title with only mandotory fields', () => {

        cy.visit("/web/index.php/auth/login")

        cy.get('input[name="username"]').type(data.username)

        cy.get('input[placeholder="Password"]').type(data.password)

        cy.get('button[type="submit"]').click()
      
        cy.contains('Dashboard').should("be.visible")
        cy.contains('Admin').click()
        cy.contains('Job').click()
        cy.contains('Job Titles').click()
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
        let r = (Math.random() + 1).toString(36).substring(7);
        cy.log(r)
        cy.get('input[class="oxd-input oxd-input--active"]').last().type(jobtitledata.jobtitle+r)
        cy.get("textarea[placeholder='Type description here']").type(jobtitledata.jobdescription)
        cy.get("button[type='submit']").click()
        cy.contains('Successfully Saved').should("be.visible")
      
    })


  })