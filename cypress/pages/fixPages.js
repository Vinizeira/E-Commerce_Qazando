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
        //Shop Cart       
        const shopCardHidden = "#root > header > div > div > div > div > div > ul > li:nth-child(2) > a > i"
        const shopCardCont = "#root > header > div > div > div > div > div > ul > li:nth-child(2) > a > span"
        const shopInvoke = cy.get('.offcanvas-add-cart-wrapper > h4').should('have.text', 'Shopping Cart').invoke('show')
      
        cy.get(shopCardHidden).click()
        shopInvoke
        cy.get('span.offcanvas-cart-total-price-text').should('have.text', 'Subtotal:')
        cy.get('ul.offcanvas-cart > li:nth-child(1) > div.offcanvas-wishlist-item-block > div > div > span.offcanvas-wishlist-item-details-price')
        
        cy.get(shopCardCont).invoke('text').then(($contShop => {
           cy.log($contShop)

        }))

    
        
        cy.get('.offcanvas-cart-action-button > li:nth-child(1) > a')
        
        this.loadingHeader()
        
        cy.get(shopCardHidden).click()
        cy.get('.offcanvas-cart-action-button > li:nth-child(2) > a').click()
    }

    searchButton(){
        
                //Search
                const search = "#root > header > div > div > div > div > div > ul > li:nth-child(3) > a > img"
                cy.get(search).click()
                
        
                cy.get('#search > form > input[type=search]').type('Ola Mundo').wait(2000)
                //botao Pesquisa
                cy.get('button[class="btn btn-lg btn-main-search"]').wait(2000).click()
                
        
                //Sucesso Page
                cy.get('#swal2-title').should('have.text', 'Success')
                
                cy.get('button[class="swal2-confirm swal2-styled"]').click()
    }



}
export default new fixPages;