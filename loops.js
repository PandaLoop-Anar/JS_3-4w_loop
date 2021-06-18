//1 . ამობეჭდეთ i-ს მნიშვნელობები 76-დან 2-მდე. (2 ქულა)
for(let i = 76; i>2; i--){
    console.log(i);
};
console.log('----------');
//2. ამობეჭდეთ ყველა კენტი რიცხვი 1-დან 100-მდე. (2 ქულა)
for(let i = 1; i<100; i+=2){
    console.log(i);
};
console.log('----------');
//3. 2-დან 89-ის ჩათვლით ამობეჭდეთ რიცხვები არსებულზე 6-ის დამატებით. (2 ქულა)
for(let i = 2; i < 90; i++){
    console.log(i+6);
};
console.log('----------');
//4. ამობეჭდეთ რიცხვები 0-დან 100-მდე გარდა 42-ისა. (2 ქულა)
for(let i = 0; i<100; i++){
    if(i != 42){
       console.log(i); 
    }
};
console.log('----------');
/*
5. შემოიტანეთ string მნიშვნელობით “Stairway to Heaven”
ამობეჭდეთ მეოთხე ადგილას მდგომი ქარაქთერი. 
შექმენით ცვლადი. შემდეგ დაითვალეთ სტრინგის ქარაქთერების რაოდენობა და ამ რიცხვს გამოაკელით 3, შეინახეთ ახალი მნიშვნელობა ახალ შექმნილ ცვლადში.
გაამრავლეთ 11-ზე, შემდეგ მიუმატეთ 2 და მიღებული შედეგი გადააკონვერტირეთ string მნიშვნელობად და შეინახეთ ცვლადში სახელწოდებით finally. (4 ქულა)

*/
const stairwayToHeaven = [5, 14, 84, 20, 100];
console.log(stairwayToHeaven[3]);
let characterNum = stairwayToHeaven.length;
let gamotvla = characterNum-3;
let shedegi = gamotvla*11+2;
let finaly = shedegi.toString();
console.log(finaly);