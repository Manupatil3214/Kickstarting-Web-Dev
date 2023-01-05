// crud crud link store in varible
const url =`https://crudcrud.com/api/7bd02fb954b74677a257f37fc302928d/MANISHA_info`;

document.getElementById("Myform").addEventListener("submit", Submit);
let myObj;


//Create
//retrieve Data from form

function retrieveData() {
  var amount = document.getElementById("amount").value;

  var description = document.getElementById("description").value;

  var category = document.getElementById("category").value;

  if (category != "chooseOne" && description.length > 0 && amount > 0) {
    //(amount,description,category) store in object

    myObj = {
      amount,
      description,
      category,
    };
  }
}
// submit button  click 
function Submit(e) {
  //Clicking on a submit button, prevent it from submitting a from
  e.preventDefault();

  let value = retrieveData();
  if (value != 0) {

    // create data use Axios.post
    axios.post(url, myObj).then((res) => {
      console.log(res.data);
    });
  }

  document.getElementById("Myform").reset();
  DisplayData();
}

//Display function Display our data in html page


DisplayData = () => {
  //table id store in MyTable

  let MyTable;
  MyTable = document.getElementById("Axio_Table");

  // MyTable call for display Data In Html page table

  MyTable.innerHTML = " ";

  axios.get(`${url}`).then((response) => {
    for (let i = 0; i < response.data.length; i++) {
      MyTable.innerHTML += `
<tr>
                <td>₹${response.data[i].amount}</td>
                <td>${response.data[i].description}</td>
                <td> ${response.data[i].category}</td>
                <td><button class="btn btn-info" onclick="editExpense('${response.data[i]._id}','${response.data[i].amount}','${response.data[i].description}','${response.data[i].category}')">Edit</button><button class="btn btn-danger" onclick="deleteExpense('${response.data[i]._id}')">Delete</button></td>

</tr>`;
    }
  });
};


// click button to  editing data
const editExpense = (_id, amount, description, category) => {

    // using edit button help of Axios.put
  axios
    .put(
      `${url}/${_id}`,
      (document.getElementById("amount").value = amount),
      (document.getElementById("description").value = description),
      (document.getElementById("category").value = category)
    )
    .then((res) => {
      console.log(res.data);
    });
};



// click button to  Deleting 
const deleteExpense = (_id) => {
    // using delete button help of Axios.put
  axios.delete(`${url}/${_id}`).then((res) => {
    console.log(res.data);
  });
  DisplayData();
};
DisplayData();
