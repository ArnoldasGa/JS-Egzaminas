/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


Calculator ()

function Calculator(a,b) {
    number1 = Number(prompt('Iveskite pirma skaiciu'));
    number2 = Number(prompt('Iveskite antra skaiciu'));
    sum = function(){
        return this.number1 + this.number2
    }
    subtraction = function(){
        return this.number1 - this.number2
    }
    multiplication = function(){
        return this.number1 * this.number2
    }
    division = function(){
        return this.number1 / this.number2
    }
    alert(number1 + '+' + number2 + '=' + sum() + '\n' 
    + number1 + '-' + number2 + '=' + subtraction() + '\n' 
    + number1 + '*' + number2 + '=' + multiplication() + '\n' 
    + number1 + '/' + number2 + '=' + division())
}