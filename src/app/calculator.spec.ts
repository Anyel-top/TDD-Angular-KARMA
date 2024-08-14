import { Calculator } from './calculator';

describe('test for Calculator', ()=>{
    describe('Test for multiply', ()=>{

        it('Should return four', ()=>{
            //Arrange
            let calculator= new Calculator();
            let n1= 2
            let n2= 2;
            let expectedResult=4
            //Act
            let currentResult = calculator.multiply(n1, n2);
            //Assert
            expect(currentResult).toEqual(expectedResult);

        });

        it('Should return nine', ()=>{
            //Arrange
            let calculator= new Calculator();
            let n1= 3
            let n2= 3;
            let expectedResult=9
            //Act
            let currentResult = calculator.multiply(n1, n2);
            //Assert
            expect(currentResult).toEqual(expectedResult);

        });

    });
});