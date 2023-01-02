var d = new Date().getSeconds();
const posts = [
  {
    title: "Post One",
    body: "This is Post One",
    createdAt: "",
  },
  {
    title: "Post two",
    body: "This is post two",
    createdAt: "",
  },
  {
    title: "Post three",
    body: "This is post three",
    createdAt: "",
  },
];
//console.log(...posts);

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title} - last updated ${d}seconds ago</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //updateLastUserActivity();
//       posts.push({ ...post, createdAt: d });
//       const error = false;

//       if (!error) {
//         resolve();
//       } else {
//         reject("Error: Something is wrong");
//       }
//     }, 2000);
//   });
// }
async function createPost(post) {
  let create = new Promise((resolve, reject) => {
    setTimeout(() => {
      //updateLastUserActivity();
      posts.push({ ...post, createdAt: d });
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something is wrong");
      }
    }, 2000);
  });
  let a = await create;
  return a;
}

async function deletePost(post) {
  let create = new Promise((resolve, reject) => {
    setTimeout(() => {
      //updateLastUserActivity();
      posts.pop({ ...post });
      //const error = true;

      if (posts.length === 0) {
        resolve();
      } else {
        reject("Error: Array is empty");
      }
    }, 1000);
  });
  let a = await create;
  return a;

  //   function updateLastUserActivity() {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         posts.updateLastUserActivity = new Date().getTime();
  //         resolve(post.updateLastUserActivity);
  //       }, 1000);
  //     });
  //   }
}

// function userUpdatePost() {
//   Promise.all([createPost, updateLastUserActivity])
//     .then(([createPostresolves, updateLastUserActivity]) => {
//       console.log(updateLastUserActivity);
//     })
//     .catch((err) => console.log(err));
// }
createPost({ title: "post Four", body: "this is post 3" }).then(getPosts);
//   .catch((err) => console.log(err));

deletePost().catch((err) => console.log(err));

// Promise.all
// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 5000, "goodbye");
// });
// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// })
