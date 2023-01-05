






DisplayData = () => {
let MyTable;
        MyTable = document.getElementById("output");
 MyTable.innerHTML = " ";

        axios.get(`${url}`).then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                MyTable.innerHTML += `
<tr> <td>${response.data[i].amount}</td>
<td>${response.data[i].description}</td>
<td><button class="btn btn-info" onclick="editExpense('${response.data[i]._id}','${response.data[i].amount}','${response.data[i].description}')">Edit</button><button class="btn btn-danger" onclick="deleteExpense('${response.data[i]._id}')">Delete</button></td>

</tr>`;
            }
        });
    };











____________________________________________________________________________________________________________________________________________________-__________________________________________________________________________________________________________________________
![Screenshot (166)](https://user-images.githubusercontent.com/86156637/210825394-63f22ff1-3271-41c8-b33b-03ce77454759.png)
