


# bank-graphql

1. Iniciar proyecto
    ```script
    npm install
npm start
    ```

1. Crear functions CustomerGetAll / CustomerCreate
    ```script
    func new --name CustomerGetAll --template "HTTP trigger" --authlevel "anonymous"
    func new --name CustomerCreate --template "HTTP trigger" --authlevel "anonymous"
    ```

1. Agregar dependencias para pruebas
    ```script
    npm install sinon --save-dev 
    npm install mocha --save-dev
    npm install chai --save-dev
    npm install nyc --save-dev 
    npm install sinon-chai --save-dev
    npm install rewire  --save-dev 
    npm install cross-env --save-dev 
    ```

1. Agregar expect
    ```javascript
    context('get',()=>{

        it('should get customer by name',async()=>{
            //preparar data

            //preparar mocks,stub,spy

            //invocar funcionalidad
            await httpFunction(contextFunctions, request);

            expect(contextFunctions.log.callCount).to.equal(1);

            //validar respuesta
            expect(contextFunctions.res.status).to.equal(200);

            expect(contextFunctions.res)
                .to.have.property('body')
                .to.be.a('Object');

            expect(contextFunctions.res.body)
                .to.have.property('message')
                .to.be.a('String')
                .to.equal('fake_string');
            
            expect(contextFunctions.res)
                .to.have.property('headers');

            expect(contextFunctions.res.headers)
                .to.include({ 'Content-Type':'application/json'});

            //validar comportamiento
            expect(FakeUserServiceClass).to.have.been.calledWithNew;
            expect(convertMessageStub).to.have.been.calledWith("Hello, Bill.")
        });
    ```

1. Ejecutar pruebas
    ```script
    cd ./CustomerService
    npm test
    ```
    Unit test result
    ![Unit test result](CustomerService/media/test.png) 
    
1. Generar reporte coverage
    ```script
    cd ./CustomerService
    npm run coverage
    ```
    Coverage report
    ![Coverage report](CustomerService/media/coverage.png)