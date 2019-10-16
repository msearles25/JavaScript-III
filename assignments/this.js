/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - when in the global scope it would default to the window object unless in strict mode it be undefined.
* 2. Implicit Binding - anything to the left of the dot is what the 'this' keyword is reffering to.
* 3. Explicit binding - where there are three methods where they allow us to explicitally state what the this keyword is in any given function
* 4. New Binding - we use the new keyword and it constructs a new object and the this points to that object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

let thisProject = {
    name: 'Really Hard',
    sound: 'ARGGGH',
    tryMe: function() {
        console.log(this.sound);
    }
}

thisProject.tryMe();

// Principle 3

// code example for New Binding

function Project(whenFinished) {
    this.feeling = whenFinished;
}

let myProject = new Project('We feel joy.');

console.log(myProject.feeling);

// Principle 4

// code example for Explicit Binding

function LambdaSchool() {
    console.log(`I am a ${this.job}, in ${this.location}, that makes $${this.salary}!`);
}

let myJob = {
    job: 'Programer',
    location: 'San Francisco',
    salary: 100000
}

LambdaSchool.call(myJob);