import acessPage from '../pages/acessPage'
import fixPages from '../pages/fixPages'

describe('Acesso a home', () => {

     it('Elementos homePage ', function() {
        acessPage.go()
        acessPage.navegandoPelaHome()
       acessPage.grindProductVideo()
     })

    }) 

describe('Fix elements', ()=> {
    beforeEach(function() { //Função para pegar as fixtures
     cy.fixture('produtos').then((p)=> {
            this.produtos = p
         }) 
    })

    it('Cabeçalho Links ', function() {
        fixPages.go()
        //fixPages.go(this.users.usuario) Exemplo para chamar fixtures
        fixPages.header()       
    })

    
    it('Favoritos:Excluir Itens', function() {
        fixPages.favorites()
    })

    it('Carrinho: Excluir Itens', function() {
        fixPages.shopCart()
    })
    
    it('Pesquisar', function() {
        fixPages.go()
        fixPages.searchButton(this.produtos.produto)
    })

})



