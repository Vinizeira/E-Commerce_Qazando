import cadastro from "../pages/cadastro"
import login from "../pages/login"

describe('Cadastros', ()=>  {
    beforeEach(function() { //Função para pegar as fixtures
        cy.fixture('users').then((u)=> {
               this.users = u
            }) 
       })
    
    //    it('acessando Cadastro', function() {
    //     cadastro.go()
               
    // })
       it('Register Account' , function(){
           cadastro.goLink()
           cadastro.clickGoCadastro()
           cadastro.dados()
           cadastro.btnRegister()
       })
     
      it('Login', function(){
         login.goLinkLogin()
         login.goLogin()
         login.dados()
         login.btnLogin()
      })
})