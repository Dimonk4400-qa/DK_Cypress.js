describe('AuthCheck', function () {
    
    it('Логинимся', function () {
        cy.visit('https://staya.dog/');
        cy.get('#__layout > div > div > section > div > div > article > button').click();
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('dimonk4400@yandex.ru');
        cy.get('.auth-form > form > [type="password"]').type('XVVq33RuuRCzB7v');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.get('.profile-orders__title').contains('Мои заказы');
  
        })

    
            
      }) 
