// 1)
 
 let num1 = parseFloat(prompt("Enter the first number:"));


 let num2 = parseFloat(prompt("Enter the second number:"));


 let mimateba = num1 + num2;
 let gamokleba = num1 - num2;
 let gamravleba = num1 * num2;
 let gayofa = num1 / num2;

 console.log("mimateba: " + mimateba);
 console.log("gamokleba: " + gamokleba);
 console.log("gamravleba: " + gamravleba);
 console.log("gayofa: " + gayofa);

 // 2)

 let firstName = prompt("Enter your first name:");

 let lastName = prompt("Enter your last name:");

 alert("Welcome " + firstName + " " + lastName + "!");

 // 3)

        let start = parseInt(prompt("Enter the start number:"));
        
        let end = parseInt(prompt("Enter the end number:"));
    
        let sum = 0;
        
        for (let i = start; i <= end; i++) {
            sum += i;
        }
        
        console.log("The sum between " + start + " and " + end + " is: " + sum);

// 4)

         let Start = parseInt(prompt("Enter the start number:"));
        
        
         let End = parseInt(prompt("Enter the end number:"));
         
     
         let Sum = 0;
         
        
         for (let i = Start; i <= End; i++) {
             if (i % 2 === 0) {
                 sum += i;
             }
         }
         
       
         console.log("The sum of even numbers between " + Start + " and " + End + " is: " + Sum);

// 5)

function isTeenager(age, hasPermission) {
    return !(age < 18 && !hasPermission) && !(age === 18 && hasPermission);
}

let age = parseInt(prompt("ჩაწერეთ თქვენი ასაკი:"));

// 6)

function isValidCoupon(couponCode, totalAmount) {
    return (couponCode === "SALE" || couponCode === "BIGSALE") && totalAmount >= 50 || couponCode === "LILSALE";
}


let couponCode = prompt("Enter the coupon code:");
let totalAmount = prompt("Enter the total amount:");

let result = isValidCoupon(couponCode, Number(totalAmount));
console.log("Is the coupon valid? " + result);
