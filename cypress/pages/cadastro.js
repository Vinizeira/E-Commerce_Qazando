class cadastro {
    goLink() {
        cy.visit('/register');
       cy.get('.account_form > h3')
       .should('have.text', 'Register');
        }
   clickGoCadastro(){
       cy.visit('/')
       cy.get('div[class="top_header_right"] ul > li:nth-child(2) > a ').click();
       cy.get('.account_form > h3').wait(1000)
       .should('have.text', 'Register');
   }
   
   dados(){
       cy.get('div[class="account_form"] > form > div:nth-child(1) > label')
       .should('have.text','Username*'); //Validar Label Username

       cy.get('input[id=user]').type('Vinicius Malvadao').wait(2000); //User
       
       cy.get('input[id=email]').type('Email@gmail.com').wait(2000);//Email

       cy.get('input[id=password]').type('senha123123').wait(2000);//Password

   
    
       //    cy.get('div[class="account_form"] > form > div:nth-child(2) > label')
       //    .should('have.text','Email*'); //Validar Label Email
       //    cy.get('div[class="account_form"] > form > div:nth-child(3) > label')
       //    .should('have.text','Passwords*'); //Validar Label Password
   }

   btnRegister(){
    cy.get('button[id=btnRegister]').click({force:true})
    
    cy.get('div[class="swal2-actions"] > button:nth-child(2)').invoke('show').click()
}

   
}
export default new cadastro;