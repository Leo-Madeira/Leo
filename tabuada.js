const num = +prompt("digite um numero:")

showmultiplicationnumber(num);

function showMultiplicationNumber(num=1)
{ 
    let result= ''
    for(let i =1;1<=10;i++)
    {
        result += `${num} x ${i} = ${num * i}\n`;
    }
    alert(result)
}