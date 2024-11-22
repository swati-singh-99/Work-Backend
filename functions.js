//simple closure program
function init() {
    var name = "Mozilla"; // local variable
    function displayName() {  // inner function that does not have any variable 
      
      console.log(name); // have acess to variable of its outer function
    }
    displayName();
  }
  init();


//returns object containing methods
  function counter() {
      let count = 0;
      return {
        increment: function () {
          count++;
          console.log(count);
        },
        decrement: function () {
          count--;
          console.log(count);
        },
      };
    }

    const myCounter = counter();
    myCounter.increment();
    myCounter.decrement();
    myCounter.decrement();
    myCounter.increment();


//using this keyword
    const car = {
            name: "Toyota",
            model: "Camry",
            getCarDetails: function() {
              return `${this.name} ${this.model}`;
            },
          };
          console.log(car.getCarDetails()); 



// function createCounter() {
//   let count = 0;
//   return {
//     increment: function() {
//       count++;
//       console.log(count);
//     },
//     decrement: function() {
//       count--;
//       console.log(count);
//     },
//     getCount: function() {
//       return count;
//     }
//   };
// }

// const counter = createCounter();
// counter.increment(); 
// counter.increment(); 
// console.log(counter.getCount()); 
// counter.decrement(); 
// console.log(counter.count); 



//arrow functions

const numbers = [1, 2, 3, 4];

numbers.forEach(num => {
  console.log(num)
});


function Count() {
    this.x = 0;
  
    setInterval(() => {
      this.x++; 
      console.log(this.x);
    }, 1000);
  }
  
  const myCount = new Count(); 
  