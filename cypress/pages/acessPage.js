class acessPage {
    go() {
        cy.visit('/')
        cy.get('div[class="search-modal"]')
        cy.get('div[class="center_heading"] h2').should('have.text' ,'NOS SIGA NO INSTAGRAM')
        }
 
    verificiarPageShop(){
        cy.url().should('be.equal', 'http://automationpratice.com.br/shop') //Verificar se a url foi certa
        cy.go('back')
    }    

                //INFORMATIONS RODAPÉ
    verificarPageAboutUs(){
        cy.url().should('be.equal', 'http://automationpratice.com.br/about') //verificar se page ABOUT US foi carregada
        cy.go('back')
    }

    verificarPrivacyPolicy(){
        cy.url().should('be.equal', 'http://automationpratice.com.br/privacy-policy') //Verificar page Privacy Policy
        cy.go('back')
    }

    verificarFaqs(){
        cy.url().should('be.equal', 'http://automationpratice.com.br/faqs') //Verificar FAQS
        cy.go('back')
    }

    verificarOrderTracking(){
        cy.url().should('be.equal', 'http://automationpratice.com.br/order-tracking') //Verificar OrderTranking
        cy.go('back')
    }

    verificarCompare(){
        cy.url().should('be.equal', 'http://automationpratice.com.br/compare') //Verificar Compare
        cy.go('back') 
    }

            //SHOP RODAPÉ 
    verificarCartONE(){
        cy.url().should('be.equal', 'http://automationpratice.com.br/cart') //Verificar CART SHOP
        cy.go('back')
    }

    // verificarCartTWO(){
    //     cy.url().should('be.equal', 'http://automationpratice.com.br/cartTwo') //Verificar CART SHOP TWO
    //     cy.go('back')
    // }
    

    verificarEmptyCart(){
        cy.url().should('be.equal', 'http://automationpratice.com.br/#!/') //Verificar CART EMPTY
        cy.go('back')
    }

    verificarCheckoutOne(){
        cy.url().should('be.equal', 'http://automationpratice.com.br/checkout-one') //Verificar CART EMPTY
        cy.go('http://automationpratice.com.br/')
    }

    verificarWishlist(){
        cy.url().should('be.equal', 'http://automationpratice.com.br/') //Verificar CART EMPTY
        cy.go('back')
    }

    verificarPageDetailsProcuts(){
        cy.url()
        cy.get('.modal_product_content_one > h3 ').should('be.visible')
        cy.go('back')
    }
   
    navegandoPelaHome(){
        cy.get('div[class="el_banner_bottom el-ban-bottom-left"]').click() //Clicando na div para redirect
        this.verificiarPageShop()
        cy.get('#electronics_banner_bottom > div > div.row > div:nth-child(2) > div:nth-child(2) > a').click()
        this.verificiarPageShop() 

        //Infos da page
        cy.get('#electronics_banner_bottom > div > div.el_feature_wrappers > div > div:nth-child(1) > div > div > h3')
        .should('have.text','Free Shipping') 

        cy.get('#electronics_banner_bottom > div > div.el_feature_wrappers > div > div:nth-child(1) > div > div > p')
        .should('have.text', 'On all orders over $75.00')
        
        cy.get('#electronics_banner_bottom > div > div.el_feature_wrappers > div > div:nth-child(2) > div > div > h3')
        .should('have.text', 'Free Returns')

        cy.get('#electronics_banner_bottom > div > div.el_feature_wrappers > div > div:nth-child(2) > div > div > p')
        .should('have.text', 'Returns are free within 9 days')

        cy.get('#electronics_banner_bottom > div > div.el_feature_wrappers > div > div:nth-child(3) > div > div > h3')
        .should('have.text', '100% Payment Secure')

        cy.get('#electronics_banner_bottom > div > div.el_feature_wrappers > div > div:nth-child(3) > div > div > p')
        .should('have.text', 'Your payment are safe with us.')

        cy.get('#electronics_banner_bottom > div > div.el_feature_wrappers > div > div:nth-child(4) > div > div > h3')
        .should('have.text', 'Support 24/7')

        cy.get('#electronics_banner_bottom > div > div.el_feature_wrappers > div > div:nth-child(4) > div > div > p')
        .should('have.text', 'Contact us 24 hours a day')
        
        
        
        
       //Conteudos Dolby Atomos
        cy.get('div > div[class="elec_promo_text"] h2').should('have.text', 'DOLBY ATMOS  SOUND FEATURE')
        var txtInfo = 'Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
        cy.get('#promotion_banner > div > div > div:nth-child(1) > div > p').should('have.text', txtInfo)
     
        cy.get('i[class="fa fa-bluetooth-b"]')
        cy.get('div[class="elec_promo_icon"]> div:nth-child(1) > p').should('have.text', 'Bluetooth Enabled device')
        
        cy.get('i[class="fa fa-wifi"]')
        cy.get('div[class="elec_promo_icon"]> div:nth-child(2) > p').should('have.text', 'Wireless Connections')
        
        cy.get('i[class="fa fa-battery-half"]')
        cy.get('div[class="elec_promo_icon"]> div:nth-child(3) > p').should('have.text', 'Rechargeable Battery')

        cy.get('i[class="fa fa-volume-up"]')
        cy.get('div[class="elec_promo_icon"]> div:nth-child(4) > p').should('have.text', 'Surround Sound System')
       

        //weekly Deal Procuct
        cy.get('#elce_weekly_deal > div > div > div > div > h2').should('have.text','Weekly Deal Product')
        cy.get('#elce_weekly_deal > div > div:nth-child(2) > div > div> div> div > div').should('be.visible')

        //Rodape
        cy.get('#footer_one > div > div > div > div  > a').should('be.visible')
        var msgR = 'QAZANDO é o maior e mais completo site de automação de testes do Brasil. Acesse www.qazando.com.br e aproveite os melhores cursos.'
        cy.get('#footer_one > div > div > div > div  > p ').should('have.text', msgR)

        //icones Rodapé
        cy.get('.footer_left_side_icon > ul > li:nth-child(1) > a').click() //FACEBOOK
        cy.get('.footer_left_side_icon > ul > li:nth-child(2) > a').click() //TWITTER
        cy.get('.footer_left_side_icon > ul > li:nth-child(3) > a').click() //Linkedin
        cy.get('.footer_left_side_icon > ul > li:nth-child(4) > a').click() //Instagram
        cy.get('.footer_left_side_icon > ul > li:nth-child(5) > a').click() //Google        

        //Informations rodapé
        cy.get('div[class="col-lg-3 col-md-6 col-sm-12 col-12"] > div > h3').should('have.text','INFORMATION')
        cy.get('div[class="col-lg-3 col-md-6 col-sm-12 col-12"] > div > ul > li:nth-child(1) > a').should('have.text', 'Home').click()

        cy.get('div[class="col-lg-3 col-md-6 col-sm-12 col-12"] > div > ul > li:nth-child(2) > a').should('have.text', 'About us').click()
        this.verificarPageAboutUs()
        cy.get('div[class="col-lg-3 col-md-6 col-sm-12 col-12"] > div > ul > li:nth-child(3) > a').should('have.text', 'Privacy Policy').click()
        this.verificarPrivacyPolicy() 
        cy.get('div[class="col-lg-3 col-md-6 col-sm-12 col-12"] > div > ul > li:nth-child(4) > a').should('have.text', 'Frequently Questions').click()
        this.verificarFaqs()
        // cy.get('div[class="col-lg-3 col-md-6 col-sm-12 col-12"] > div > ul > li:nth-child(5) > a').should('have.text', 'Order Tracking')
        // this.verificarOrderTracking()
        cy.get('div[class="col-lg-3 col-md-6 col-sm-12 col-12"] > div > ul > li:nth-child(6) > a').should('have.text', 'Compare').click()
        this.verificarCompare()

        //SHOP rodapé 
        cy.get('div[class="col-lg-2 col-md-6 col-sm-12 col-12"] > div > h3').should('have.text', 'SHOP')

        cy.get('div[class="col-lg-2 col-md-6 col-sm-12 col-12"] > div > ul  > li:nth-child(1)').should('have.text', 'Cart View One').click()
        this.verificarCartONE()
        cy.get('div[class="col-lg-2 col-md-6 col-sm-12 col-12"] > div > ul  > li:nth-child(3)').should('have.text', 'Empty Cart').click()
       // this.verificarEmptyCart()
        cy.get('div[class="col-lg-2 col-md-6 col-sm-12 col-12"] > div > ul  > li:nth-child(6)').should('have.text', 'Wishlist').click()
        this.verificarWishlist()

        

       


    }
    
    grindProductVideo(){
        //Campos dos produtos Disponiveis
        cy.get('#electronics_top_product > div > div:nth-child(1) > div:nth-child(1) > div > h2').should('have.text','Top Product')

       
    //    cy.get('.tabs_right_button > ul > li:nth-child(2)').should('have.text', 'Audio & Home').trigger('mouseover').click({force: true})
    //    cy.get('.tabs_right_button > ul > li:nth-child(3)').should('have.text', 'Camera & Photo').trigger('mouseover').click({force:true})

       


       cy.get('div > a[href="/product-details-two/21"]').click()
       this.verificarPageDetailsProcuts()
       cy.get('#video > div > div:nth-child(2) > div > div.product_item_inner > div.product_img_wrap > a').click()
       this.verificarPageDetailsProcuts()
       cy.get('#video > div > div:nth-child(3) > div > div.product_item_inner > div.product_img_wrap > a').click()
       this.verificarPageDetailsProcuts()
       cy.get('#video > div > div:nth-child(4) > div > div.product_item_inner > div.product_img_wrap > a').click()
       this.verificarPageDetailsProcuts()
       cy.get('#video > div > div:nth-child(5) > div > div.product_item_inner > div.product_img_wrap > a').click()
       this.verificarPageDetailsProcuts()
       cy.get('#video > div > div:nth-child(8) > div > div.product_item_inner > div.product_img_wrap > a').click()
       this.verificarPageDetailsProcuts()
        
    }
    

    


}
export default new acessPage;