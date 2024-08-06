describe('Working with elemts', () => {


    it('click related tips ', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {

            return false
        })

      cy.visit('https://cypress.io')

      cy.get('a[href="https://on.cypress.io/writing-your-first-test"]').last().click({force:true})
    })

    it('click related tips --- 2', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {

            return false
        })

      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

      cy.get('div[class="product-action"]>button[type="button"]').click({ multiple: true })
    })


    it.only('check box', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {

            return false
        })

      cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')

    
      cy.get('input[name^="chk_altemail"]').check().should("be.checked").and('be.visible')

      //cy.get('input[name^="chk_altemail"]').should("be.checked")

      cy.wait(5000)

      cy.get('input[name^="chk_altemail"]').uncheck().should("not.be.checked")

    })

    

  })