
for(a=10;a<=15;a++)
{
    if (a%3==0 && a%5!=0 && a%7!=0) {
        console.log("" ,a);
    }
    if (a%5==0 && a%3!=0 && a%7!=0) console.log("" ,a);
    if (a%7==0 && a%5!=0 && a%3!=0) console.log("" ,a);
} 