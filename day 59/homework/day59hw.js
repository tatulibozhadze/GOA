//matematikuri funqciebi

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return y === 0 ? "Cannot divide by zero" : x / y;
}

console.log("Addition: ", add(5, 3)); 
console.log("Subtraction: ", subtract(5, 3));
console.log("Multiplication: ", multiply(5, 3));
console.log("Division: ", divide(5, 3));
console.log("Division by zero: ", divide(5, 0));

//martkutxedis fartobi

function calculateRectangleArea(length, height) {
    return length * height;
}

const length = 5;
const height = 3;
const area = calculateRectangleArea(length, height);
console.log("The area of the rectangle is:", area);

//goa best


function scoreTenTimes() {
   
        console.log("Goa best");
    }

scoreTenTimes();
scoreTenTimes();
scoreTenTimes();
scoreTenTimes();
scoreTenTimes();
scoreTenTimes();
scoreTenTimes();
scoreTenTimes();
scoreTenTimes();
scoreTenTimes();

//martkutxedis perimetri

function calculateRectanglePerimeter(side1, side2, side3, side4) {
    return side1 + side2 + side3 + side4;
}

const side1 = 5;
const side2 = 3;
const side3 = 5;
const side4 = 3;

const perimeter = calculateRectanglePerimeter(side1, side2, side3, side4);
console.log("The perimeter of the rectangle is:", perimeter);




