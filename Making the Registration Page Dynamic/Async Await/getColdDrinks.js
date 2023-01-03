console.log(" Checking Movie ticket :- person ");
console.log(" 1: person show ticket  ");
console.log(" 2: person show ticket ");
console.log(" 3: person show ticket ");

/* promises use  */

// let promiseWifeBringsTicks=new Promise((resolve,reject)=>{

//     setTimeout(() => {
//      resolve('ticket');
//     }, 1000);

// });

// const getPopcorn = promiseWifeBringsTicks.then((t) => {
//       console.log("Wife: I have the tickets");
//       console.log("Husband: we should go in");
//       console.log("wife:no i am hungary");
//       return new Promise((resolve, reject) => resolve(`${t} popcorn`));
//     });

// getPopcorn.then((t) => console.log(t));

// const getButter = getPopcorn.then((t) => {
//   console.log("Husband : I got some popcorn");
//   console.log("husband we should go in");
//   console.log("wife i need butter on my Popcorn");
//   return new Promise((resolve, reject) => {
//     `${t} butter`;
//   },2000);
// });

// getButter.then((t) => console.log(t));

// const getColdDrinks = getPopcorn.then((t) => {
//     console.log("Husband : (...buy) butter popcorn");
//     console.log("husband we should go in  ");
//     console.log("wife i need  getColdDrinks ");
//     return new Promise((resolve, reject) => {
//       `${t} butter`;
//     },2000);
//   });

//   getColdDrinks.then((t) => console.log(t));

/* asyn/await use =>     */

let perMoviesTicket = async () => {
  let promiseWifeBringsTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
      error = false;

      if (!error) {
        resolve("ticket");
      } else {
        reject("show error msg ");
      }
    }, 1000);
  });

  let result = await promiseWifeBringsTicks;
  console.log(`got the ${result}`);
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

  const popcorn = await getpopcorn;
  console.log("Wife: I have the tickets");
  console.log("Husband: we should go in");
  console.log("wife:no i am hungary");

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

  const Butter = await getButter;
  console.log("Husband : I got some popcorn");
  console.log("husband we should go in");
  console.log("wife i need butter on my Popcorn");

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

  const ClodDrinks = await getColdDrinks;
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
