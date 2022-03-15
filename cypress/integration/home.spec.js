import acessPage from '../pages/acessPage'
import fixPages from '../pages/fixPages'

describe('Acesso a home', () => {
     it.skip('Acessando a home', function() {
        acessPage.go()
        acessPage.navegandoPelaHome()
       acessPage.grindProductVideo()
     })

     beforeEach(function() { //Função para pegar as fixtures
         cy.fixture('users').then((u)=> {
            this.users = u
         }) 
     })

    it('Layout Fixo', function() {
        fixPages.go()
        //fixPages.go(this.users.usuario) Exemplo para chamar fixtures
        fixPages.header()
        fixPages.favorites()
        fixPages.shopCart()
        fixPages.searchButton()
    })
    
}) 

