//1 savarjisho

const number = 15;

if (number > 10) {
    console.log("რიცხვი მეტია 10-ზე");
} else {
    console.log("რიცხვი არ არის 10-ზე მეტი");
}

 //2 savarjisho

 const age = 20;

if (age >= 18) {
    console.log("თქვენ გაქვთ ხმის მიცემის უფლება");
} else {
    console.log("თქვენ არ გაქვთ ხმის მიცემის უფლება");
}

//3 savarjisho 

const ricxvi = 5;

if (ricxvi > 0) {
    console.log("რიცხვი დადებითია");
} else if (ricxvi < 0) {
    console.log("რიცხვი უარყოფითია");
} else {
    console.log("რიცხვი ნულია");
}

//4 savarjisho

const asaki = 16;

if (asaki < 13) {
    console.log("ბავშვი ხარ");
} else if (asaki >= 13 && age <= 19) {
    console.log("შენ ხარ მოზარდი");
} else {
    console.log("სრულწლოვანი ხარ");
}

//5 savarjisho

const score = 85;

if (score === 100) {
    console.log("თქვენ დაგიფინანსდათ სწავლა სრულიად");
} else if (score > 70) {
    console.log("თქვენ დაგიფინანსდათ სწავლა 3000 ლარით");
} else if (score > 40) {
    console.log("თქვენ დაგიფინანსდათ სწავლა 1000 ლარით");
} else if (score < 20) {
    console.log("თქვენ არ დაგიფინანსდათ სწავლა");
}
