// crud crud link store in varible
const url=`https://crudcrud.com/api/be98bfdf8a2149ad9ea0c6b4bbcf279f/MANISHA_INFO`;

document.getElementById("Myform").addEventListener("submit", Submit);
let myObj;

function retrieveData() {
  var amount = document.getElementById("amt").value;

  var description = document.getElementById("des").value;

  var category = document.getElementById("select").value;

  if (category != "chooseOne" && description.length > 0 && amount > 0) {
    //(amount,description,category) store in object

    myObj = {
      amount,
      description,
      category
    };
  }
}

function clearFormData() {
  document.getElementById(" amount").value = "";
  document.getElementById(" description").value = "";
  document.getElementById("category").value = "";
}



function doSomeThing()
{
  var para = document.getElementById('massage');
  para.innerHTML = para.innerHTML + amount;
  
}



async function Submit(e) {
  //Clicking on a submit button, prevent it from submitting a from
  e.preventDefault();

  let value = retrieveData();
  if (value != 0) {
    // create data use Axios.post
    try {
      const res = await axios.post(url, myObj);
      // console.log(res.data);
      setSuccessMessage(res.message);
      clearFormData();
       
    } catch (error) {
      console.error(error);
    }
  }

  document.getElementById("Myform").reset();
   DisplayData();
  location.reload()
  doSomeThing();
}
DisplayData = () => {
  //table id store in MyTable
  
  let MyTable;
  MyTable = document.getElementById("Axio_Table");

  // MyTable call for display Data In Html page table

  MyTable.innerHTML = " ";
  
  axios.get(`${url}`).then((response) => {
    for (let i = 0; i < response.data.length; i++) {
      
      MyTable.innerHTML += `
<tr> <td>₹${response.data[i].amount}</td>
                <td>${response.data[i].description}</td>
                <td> ${response.data[i].category}</td>
                <td><button class="btn btn-danger" onclick="deleteExpense('${response.data[i]._id}')">Delete</button></td></tr>`;
    }
  });
};
// const editExpense = async (_id, amount, description, category) => {
  
//     // using edit button help of Axios.put
//     document.getElementById("amount").value = amount;
//     document.getElementById("description").value = description;
//     document.getElementById("category").value = category;

//     // const res = await axios.put(`${url}/${_id}`);
//     // console.log(res.data);

//    await  axios({
//       method: 'PUT',
//       url, 
//       data: JSON.stringify(req.body), 
//       headers:{'Content-Type': 'application/json; charset=utf-8'}
//   }).then((res)=>{ console.log(res)});
//   };




const deleteExpense = async (_id) => {
  try {
    // using delete button help of Axios.put
    const res = await axios.delete(`${url}/${_id}`);
    console.log(res.data);
    DisplayData();
  } catch (error) {
    console.error(error);
  }
   DisplayData();
};
DisplayData();
