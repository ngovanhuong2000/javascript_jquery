const data_table = [
  {
    sbd: 1,
    name: "Nguyễn Văn A",
    age: 22,
    gioitinh: "Nam",
    dvan: 9,
    dtoan: 9,
  },
  {
    sbd: 2,
    name: "Nguyễn Văn B",
    age: 19,
    gioitinh: "Nu",
    dvan: 7,
    dtoan: 10,
  },
  {
    sbd: 3,
    name: "Nguyễn Văn C",
    age: 21,
    gioitinh: "Nam",
    dvan: 8,
    dtoan: 9,
  },
  {
    sbd: 4,
    name: "Nguyễn Văn D",
    age: 27,
    gioitinh: "Nam",
    dvan: 10,
    dtoan: 7,
  },
  {
    sbd: 5,
    name: "Nguyễn Văn E",
    age: 27,
    gioitinh: "Nam",
    dvan: 10,
    dtoan: 6,
  },
  {
    sbd: 6,
    name: "Nguyễn Văn F",
    age: 25,
    gioitinh: "Nu",
    dvan: 9,
    dtoan: 4,
  },
  {
    sbd: 7,
    name: "Nguyễn Văn G",
    age: 24,
    gioitinh: "Nam",
    dvan: 8,
    dtoan: 8,
  },
  {
    sbd: 8,
    name: "Nguyễn Văn H",
    age: 18,
    gioitinh: "Nu",
    dvan: 6,
    dtoan: 7,
  },
  {
    sbd: 9,
    name: "Nguyễn Văn Y",
    age: 19,
    gioitinh: "Nu",
    dvan: 9,
    dtoan: 5,
  },
  {
    sbd: 10,
    name: "Nguyễn Văn Y",
    age: 18,
    gioitinh: "Nam",
    dvan: 7,
    dtoan: 8,
  },
];

function createTh(tableBody, content) {
  var th = document.createElement("TH");
  tableBody.appendChild(th);
  var td = document.createElement("TD");
  td.width = "200";
  td.style = "border: none";
  td.appendChild(document.createTextNode(content));
  th.appendChild(td);
  return th;
}

function createTh1(tableBody, node) {
  var th = document.createElement("TH");
  tableBody.appendChild(th);
  var td = document.createElement("TD");
  td.width = "200";
  td.style = "border: none";
  td.appendChild(node);
  th.appendChild(td);
  return th;
}
function createTd(tr, content) {
  var td = document.createElement("TD");
  td.width = "75";
  td.appendChild(document.createTextNode(content));
  tr.appendChild(td);
}

function calcSum(table_data) {
  for (let i = 0; i < table_data.length; i++) {
    table_data[i][tong] = table_data[i][dvan] + table_data[i][dtoan];
  }
  return table_data;
}
function renderTable(table_data) {
  var table = document.getElementById("table");
  table.border = "1";
  var tableBody = document.createElement("TBODY");
  table.appendChild(tableBody);
  // table_data = calcSum(table_data);

  // tao tieu de
  createTh(tableBody, "SBD");
  createTh(tableBody, "Tên");
  createTh(tableBody, "Tuổi");
  createTh(tableBody, "giới tính");
  var td_van = document.createElement("div");
  td_van.innerHTML =
    "<div> <div>Điểm Văn</div> <button onClick= 'sort(0, 1)'>Sort</button> <button onClick= 'sort(0, -1)'>Sort Reverse</button> </div>";
  createTh1(tableBody, td_van);
  var td_toan = document.createElement("div");
  td_toan.innerHTML =
    "<div> <div>Điểm Toán </div> <button onClick= 'sort(1, 1)'>Sort</button> <button onClick= 'sort(1, -1)'>Sort Reverse</button> </div>";
  createTh1(tableBody, td_toan);
  var td_tong = document.createElement("div");
  td_tong.innerHTML =
    "<div> <div>Điểm Tổng</div> <button onClick= 'sort(2, 1)'>Sort</button> <button onClick= 'sort(2, -1)'>Sort Reverse</button> </div>";
  createTh1(tableBody, td_tong);

  // tao noi dung
  for (var i = 0; i < table_data.length; i++) {
    var tr = document.createElement("TR");
    tableBody.appendChild(tr);
    var td = document.createElement("TD");
    td.width = "75";
    createTd(tr, table_data[i].sbd);
    createTd(tr, table_data[i].name);
    createTd(tr, table_data[i].age);
    createTd(tr, table_data[i].gioitinh);
    createTd(tr, table_data[i].dvan);
    createTd(tr, table_data[i].dtoan);
    createTd(tr, table_data[i].dvan + table_data[i].dtoan);
  }
}

// sắp xếp array object theo key property và chiều sort là sortOrder.
function dynamicSort(property, sortOrder) {
  return function (a, b) {
    var result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}

function sort(subjectIndex, sortOrder) {
  const subjectsList = ["dvan", "dtoan", "tong"];
  data_table.sort(dynamicSort(subjectsList[subjectIndex], sortOrder));
  document.getElementById("table").innerHTML = "";
  renderTable(data_table);
}

renderTable(data_table);
