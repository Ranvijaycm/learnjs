// question first is to find average marks of a given student 

let marks =[85,97,44,37,76,60];
let sum = 0;
for (let value of marks){
    sum+=value;
}
let avg =sum/marks.length;
console.log(`The average marks of the student is ${avg}`);

/*question second 
for a given array with prices of 5 items [250,645,300,900,50] .All items have an offer of 10%
off on them . change the array to store final price after  applying the offer.*/

let price =[250, 645, 300, 900, 50];
for(let offer in price)
{

price[offer] = price[offer] + price[offer]/100*10;

}
for (let coffer of price)
{
    console.log(`The new prices of the items are ${coffer}`); 
}
console.log(price);

/* question three 