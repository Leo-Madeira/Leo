function mixUp (p1,p2)
{
    return p2.slice(0,2) + p1.slice(2) +" "+ p1.slice(0,2) + p2.slice(2)
}

console.log(mixUp("mix","pod"))
console.log(mixUp("olá","como"))