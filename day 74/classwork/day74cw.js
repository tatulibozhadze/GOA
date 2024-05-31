// pirveli etapi
const movie = {
    name: "goa",
    author: "batoni davit janezashvili",
    releaseYear: 2024,
    rating: 8.8,
    displayDetails: function() {
        console.log(`${this.name} - it is authored by ${this.author}, this movie was released in ${this.releaseYear} and this movie has a rating of ${this.rating}`);
    }
};

// meore etapi
console.log("Name:", movie.name);
console.log("Author:", movie.author);
console.log("Year of Release:", movie.releaseYear);

movie.rating = 9.2;

// mesame etapi

movie.displayDetails();



// pirveli etapi
function Movie(name, author, releaseYear, rating) {
    this.name = name;
    this.author = author;
    this.releaseYear = releaseYear;
    this.rating = rating;
    this.displayDetails = function() {
        console.log(`${this.name} - it is authored by ${this.author}, this movie was released in ${this.releaseYear} and this movie has a rating of ${this.rating}`);
    };
}

// meore etapi
const movie1 = new Movie("goa", "batoni davit janezashvili", 2010, 8.8);
const movie2 = new Movie("goa best", "jumberi", 1999, 8.7);
const movie3 = new Movie("arvici", "jgufi 6", 2014, 8.6);

console.log(movie1);
console.log(movie2);
console.log(movie3);

// mesame etapi
console.log("Name:", movie1.name);
console.log("Author:", movie1.author);
console.log("Year of Release:", movie1.releaseYear);

console.log("Name:", movie2.name);
console.log("Author:", movie2.author);
console.log("Year of Release:", movie2.releaseYear);

console.log("Name:", movie3.name);
console.log("Author:", movie3.author);
console.log("Year of Release:", movie3.releaseYear);

// meotxe etapi 
movie1.displayDetails();
movie2.displayDetails();
movie3.displayDetails();
