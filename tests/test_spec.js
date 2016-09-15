describe('Protractor Demo App', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    //var goButton = element(by.id('gobutton'));
    //Esto funciona. Pero hay una manera de también traer el botón
    //usando los selectores de jasmine.... investigar como
    var latestResult = element(by.binding('latest'));

    beforeEach(function() {
        //Aqui se debe cargar la página que se va a probar.
        //La pagina es 
        //Procure que la url del sitio se envíe por parametro se envíe por parametro
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two', function() {
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);

        goButton.click();

        expect(latestResult.getText()).toEqual('3');
    });

    it('should substract eight and six', function() {
        // Agregue aqui su código
    });

    it('should divide eight and four', function() {
        // Agregue aqui su código
    });

    it('should eight times four', function() {
        // Agregue aqui su código
    });

    it('should eight module 3', function() {
        // Agregue aqui su código
    });
});