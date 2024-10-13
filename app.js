// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

console.log (oneEuroIs)

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

//De dolar a yen
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInYen = Math.round((valueInDollar * 156.5)/1.07);
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = Math.round((valueInYen * 0.87)/156.5);
    return valueInPound;
}
// Solo un registro en consola para nosotros
console.log(sum(7,3))
console.log(fromDollarToYen(1))
console.log(fromYenToPound(100))
// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

