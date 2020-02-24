function CelciustoFahr(celsius)
{
let fahr = (celsius * 9) / 5 + 32
console.log(`${celsius}ºC é ${fahr}ºF`)
}

function FahrtoCelcius(fahr1)
{
let celsius1 = ((fahr1 - 32) * 5) / 9
console.log(`${fahr1}ºF é ${celsius1}ºC`)
}

CelciustoFahr(20)
FahrtoCelcius(20)