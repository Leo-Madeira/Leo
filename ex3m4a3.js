var cores=["vermelho", "laranja", "rosa", "amarelo"]

for(var i=0;i<cores.length;i++)
{
    console.log(`My #${i+1} choice is ${cores[i]}`)
}

for(var i=0;i<cores.length;i++)
{
    var numero= i + 1
    var sufixo
    
    if(numero==1)
    {
        sufixo="st"
    }
    else if(numero==2)
    {
        sufixo="nd"
    }
    else if(numero==3)
    {
        sufixo="rd"
    }
    else
    {
        sufixo="th"
    }

    console.log(`My ${numero}${sufixo} coice is ${cores[i]}`)
}