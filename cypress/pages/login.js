class login {

    verificarPageLogin(){
        cy.get('.account_form > h3')
        .should('have.text', 'Login');
    }    

    moldalSucessfull(){
    //Sucesso Page
    cy.get('#swal2-title').contains('Sucessfull').should('be.visible')
                
    cy.get('button[class="swal2-confirm swal2-styled"]').wait(2000).click()

    }

    goLinkLogin() {
        cy.visit('/login');
        this.verificarPageLogin()
        }

    goLogin(){
        cy.visit('/')
        cy.get('div[class="top_header_right"] ul > li:nth-child(1) > a ').click();
        this.verificarPageLogin()
    }


    dados(){
        cy.get('input[id=user]').type('Vinizin').wait(2000)

        cy.get('input[id=password]').type('123453123321').wait(2000)

        cy.get('label[class="form-check-label"]').should('have.text', 'Remember me')
        cy.get('input[id=materialUnchecked]').check()
        
        
    }

    

    btnLogin(){
        cy.get('button[id=btnLogin]').should('have.text', 'login').click()
        this.moldalSucessfull()
    }
}
export default new login;