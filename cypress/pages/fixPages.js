class fixPages {
    go() {
        cy.visit('/')
        cy.get('div >div[class="header-logo"] > div[class="logo"]')
         }

     loadingHeader(){
        cy.wait(2000).reload()
        cy.scrollTo('top') 
        cy.scrollTo('bottom') 
      
     }    

     
    header(){

        Cypress.Commands.add('forceClick', {prevSubject: 'element'}, (subject, options) => {
            cy.wrap(subject).click({force: true})
          });

        //LAYOUT HOME 
        // const homeHidden = '#root > header > div > div > div > div > div > div > nav > ul > li:nth-child(1) > a > i'
        // cy.get(homeHidden).invoke('show')
        // cy.contains('Electronics').should('not.be.visible').click({force:true})
 
        // this.loadingHeader()

        // // //SHOP LAYOUTS

        // const shopHidden = '#root > header > div > div > div > div > div > div > nav > ul > li:nth-child(2) > a > i'
        // const force = {force:true}

        // cy.get(shopHidden)
        // cy.contains('Shop Four Grid').should('not.be.visible').click(force)

        // this.loadingHeader()

        // cy.get(shopHidden).invoke('show')
        // cy.contains('Shop Three Grid').should('not.be.visible').dblclick({force:true})

        // this.loadingHeader()

        // cy.get(shopHidden).invoke('show')
        // cy.contains('Shop List View').should('not.be.visible').click({force:true})

        // this.loadingHeader()

        // cy.get(shopHidden).invoke('show')
        // cy.contains('Shop Left Sidebar').should('not.be.visible').click({force:true})

        // this.loadingHeader()

        // cy.get(shopHidden).invoke('show')
        // cy.contains('Shop Right Sidebar').should('not.be.visible').click({force:true})

        // this.loadingHeader()

        // cy.get(shopHidden).invoke('show')
        // cy.contains('Product Single').should('not.be.visible').click({force:true})

        // this.loadingHeader()

        // cy.get(shopHidden).invoke('show')
        // cy.contains('Product Single Two').should('not.be.visible').click({force:true})

        // this.loadingHeader()



        // // //OTHER PAGES
        // cy.get(shopHidden).invoke('show')
        // cy.contains('Cart View Two').should('not.be.visible').click({force:true})

        // this.loadingHeader()
        // this.go()
        
        
        // cy.get(shopHidden).invoke('show')
        // cy.contains('Checkout View One').should('not.be.visible').forceClick()

        // this.loadingHeader()

        // cy.get(shopHidden).invoke('show')
        // cy.contains('Wishlist').should('not.be.visible').click({force:true})

        // this.loadingHeader()

        // this.go() 

        // cy.get(shopHidden).invoke('show')
        // cy.contains('Order Tracking').should('not.be.visible').forceClick()

        // this.loadingHeader()
       
        // this.go()

        // cy.get(shopHidden).invoke('show')
        // cy.contains('Order Complete').should('not.be.visible').click({force:true})
        
        // this.loadingHeader()

        // this.go()



        // // // LAYOUT PAGES 



        // const pagesHidden = '#root > header > div > div > div > div > div > div > nav > ul > li:nth-child(3) > a > i'

        // cy.get(pagesHidden).invoke('show')
        // cy.contains('Customer Dashboard').should('not.be.visible').forceClick()
        
        // this.loadingHeader()
        

        // cy.get(pagesHidden).invoke('show')
        // cy.contains('About us').click()
        
        // this.loadingHeader()
        // this.go()  

        // cy.get(pagesHidden).invoke('show')
        // cy.contains('Contact Us Two').should('not.be.visible').click({force:true})

        // this.loadingHeader()
        // this.go()

        // cy.get(pagesHidden).invoke('show')
        // cy.contains('Frequently Questions').should('not.be.visible').forceClick()

        // this.loadingHeader()
      

        // cy.get(pagesHidden).invoke('show')
        // cy.contains('Login')//.click()



        


    }

    favorites(){
        
        //Botões DIREITA
        const heartHidden = "#root > header > div > div > div > div > div > ul > li:nth-child(1) > a > i"
        const heartCont = "#root > header > div > div > div > div > div > ul > li:nth-child(1) > a > span"
        const heartInvoke = cy.get('div[class="offcanvas-wishlist-wrapper"] > h4 ').should('have.text', 'Wishlist').invoke('show')
          
        cy.get(heartHidden).click()
        heartInvoke //Aba para Invoke Wish List

        cy.get('#offcanvas-wishlish > div.offcanvas-header.text-right > button').wait(2000).click()  //Botao Fechar

        cy.get(heartHidden).click()
        heartInvoke
       
        
        cy.get(heartCont).invoke('text').then(($value => {cy.log($value) //Excluir o Item do carrinho Conforme quantos tem adicionado
    
       var i = 0;
       
        while(i < $value) {
            cy.get('ul.offcanvas-wishlist > li:nth-child(1) > div.offcanvas-wishlist-item-delete.text-right').click().wait(1000)
            i++
            console.log($value)
        }

    }))
        
        cy.get('.offcanvas-wishlist-action-button > li > a').click()
        
        cy.contains('YOUR WISHLIST IS EMPTY').should('be.visible') //WishList Empt

    }
    shopCart(){
        //CONDIÇÃO PARA ESVAZIAR O CARRINHO
        const shopCardHidden = "#root > header > div > div > div > div > div > ul > li:nth-child(2) > a > i"
        const shopCardCont = "#root > header > div > div > div > div > div > ul > li:nth-child(2) > a > span"
        const shopInvoke = cy.get('.offcanvas-add-cart-wrapper > h4').should('have.text', 'Shopping Cart').invoke('show')
        
      


        cy.get(shopCardHidden).click()
        shopInvoke
        cy.get('span.offcanvas-cart-total-price-text').should('have.text', 'Subtotal:')
        //cy.get('ul.offcanvas-cart > li:nth-child(1) > div.offcanvas-wishlist-item-block > div > div > span.offcanvas-wishlist-item-details-price')
        
        cy.get(shopCardCont).invoke('text').then(($contShop => { //inicio Contador Carrinho
          
            cy.log("Contagem carrinho: " + $contShop)

        if ($contShop > 0) {

        //preco
        const produto1 = '#offcanvas-add-cart > div > ul> li:nth-child(1) > div> div > div > span:nth-child(2)'
        const produto2 = '#offcanvas-add-cart > div > ul> li:nth-child(2) > div> div > div > span:nth-child(2)'
        const produto3 = '#offcanvas-add-cart > div > ul> li:nth-child(3) > div> div > div > span:nth-child(2)'

        const subtotal = '#offcanvas-add-cart > div.offcanvas-add-cart-wrapper > div > span:nth-child(2)'
        
            cy.get(produto1).invoke('text').then(($value) => { 
            var Convert = ($value)
            var resultv1 = Convert.split("$",2)
            var valor1 = parseFloat(resultv1[1])
            cy.log("Valor 1: " + valor1)

                cy.get(produto2).invoke('text').then(($value2) => {
                var Convert2 = ($value2)
                var resultv2 = Convert2.split("$",2)
                var valor2 = parseFloat(resultv2[1])
                cy.log("Valor 2: " + valor2)

                  cy.get(produto3).invoke('text').then(($value3) => {
                  var Convert3 = ($value3)
                  var resultv3 = Convert3.split("$",2)
                  var valor3 = parseFloat(resultv3[1])
                  cy.log("Valor 3: " + valor3)

                     const subtotalLocal = valor1 + valor2 + valor3
                     cy.log("Valor TOTAL:" + subtotalLocal)

                        cy.get(subtotal).invoke('text').then(($valueTotal) => {
                            var Convert4 = ($valueTotal)
                            var resultv4 = Convert4.split("$",2)
                            var valor4 = parseFloat(resultv4[1])
                            cy.log("Valor Total do Carrinho: " + valor4)


                            cy.get(shopCardCont).invoke('text').then(($valueCard => {cy.log($valueCard) //Excluir o Item do carrinho Conforme quantos tem adicionado
    
                                            var i = 0;
                                            $contShop == $valueCard
                                            
                                            while(i < $contShop) {                                     
                                                console.log("Contagem carrinho REPETIÇÃO: " + $contShop)
                                                cy.get('.offcanvas-cart > :nth-child(1) > .text-right > .offcanvas-wishlist-item-delete > .fa').click().wait(2000)
                                                 i++
                                            }
                     
                                      }))

                            
                 })   
              })
            })    

            //CARRINHO VAZIO
            cy.get('.offcanvas-cart-action-button > :nth-child(1) > .theme-btn-one').should('have.text', 'View Cart').click()
            
            cy.get('h2').should('have.text', 'YOUR CART IS EMPTY')
           

         }) //Fim verificação Produto1

        } 
       
       
        // if($contShop == 0) {
        //     //Carrinho fazio


        //     cy.get('div.offcanvas-add-cart-wrapper > div > span:nth-child(2)').should('have.text', '$0.00')
        //     cy.get('.offcanvas-cart-action-button > li:nth-child(1) > a').click().wait(2000) //Ver Carrinho
        //     cy.get('.empaty_cart_area').should('have.text', 'YOUR CART IS EMPTY')//PagCarrinho Vazio
                
        // }

        
        })) //Fim Count Shop
          
       
        //cy.get('#offcanvas-add-cart > .offcanvas-header > .offcanvas-close > img').wait(2000).click() //Botao Fechar
        

        //     cy.get(shopCardHidden).click() //Mostrar Carrinho
        //shopInvoke //Invokar carrinho
        cy.log(shopCardCont)
        //    // cy.get('.offcanvas-cart-action-button > :nth-child(2) > .theme-btn-one').should('have.text', 'Checkout').wait(2000).click() //Botao checkout

    }

    searchButton(produtos){
    
                cy.wait(2000)

                //Search Button
                const search = "#root > header > div > div > div > div > div > ul > li:nth-child(3) > a > img"
                cy.get(search).click()
                
                //Assert Input      
                cy.get('#search > button').click() //Fechar Pesquisa
               
                //Clicar e escrever Produto
                cy.get(search).click()
                cy.get('#search > form > input[type=search]').type(produtos.nome).wait(2000)

                //botao Pesquisa
                cy.get('button[class="btn btn-lg btn-main-search"]').wait(2000).click()
                
        
                //Sucesso Page
                cy.get('#swal2-title').should('have.text', 'Success')
                
                cy.get('button[class="swal2-confirm swal2-styled"]').click()
                
            
    }



}
export default new fixPages;