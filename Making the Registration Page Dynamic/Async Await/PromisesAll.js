console.log(" Checking Movie ticket :- person ");
console.log(" 1: person show ticket  ");
console.log(" 2: person show ticket ");
console.log(" 3: person show ticket ");

let perMoviesTicket = async () => {
  let promiseWifeBringsTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
      error = false;

      if (!error) {
        resolve(" 4: person show ticket");
      } else {
        reject("show error msg ");
      }
    });
  });

  let result = await promiseWifeBringsTicks;
  console.log(`got the ticket ${result}=>`);
  console.log(`Husband:we should go in now`);
  console.log(`Wife: "i am hungry now`);

  let getpopcorn = new Promise((resolve, reject) => {
    setTimeout(() => {
      error = false;

      if (!error) {
        resolve("getPopcorn");
      } else {
        reject("show error msg ");
      }
    }, 1000);
  });

  let getButter = new Promise((resolve, reject) => {
    setTimeout(() => {
      error = false;

      if (!error) {
        resolve(" getButter");
      } else {
        reject("show error msg ");
      }
    }, 1000);
  });

  let getColdDrinks = new Promise((resolve, reject) => {
    setTimeout(() => {
      error = false;

      if (!error) {
        resolve(" getColdDrinks");
      } else {
        reject("show error msg ");
      }
    }, 1000);
  });

  //Promises.All use
  
  Promise.all([getColdDrinks, getButter, getpopcorn]);
  console.log("Wife: I have the tickets");
  console.log("Husband: we should go in");
  console.log("wife:no i am hungary");
  console.log("Wife: I have the tickets");
  console.log("Husband: we should go in");
  console.log("wife:no i am hungary");

  console.log("Husband : (...buy) butter popcorn");
  console.log("husband we should go in  ");
  console.log("wife i need  getColdDrinks ");

  return result;
};

perMoviesTicket()
  .then((result1) => {
    console.log(result1);
  })
  .catch((err) => {
    console.log(err);
  });

console.log(" 5: person show ticket ");
console.log(" 6: person show ticket ");
