function insert_Row() {
//     //Write your code here
  
//   let table=document.getElementById('sampleTable');

// let tr=document.createElement('tr');
// let tdLeft=document.createElement('td');
// let tdRight=document.createElement('td');

// tdLeft.innerText="New Cell1";
// tdRight.innerText="New Cell2";

// tr.append(tdLeft);
// tr.append(tdRight);

// table.insertBefore(tr,table.children[0]);
// }

  var tableRow = document.getElementById("sampleTable");
var row = tableRow.insertRow(0);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);

 cell1.innerHTML = "New Cell1";
 cell2.innerHTML = "New Cell2";

}