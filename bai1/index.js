var text = (document.getElementById("demo").innerHTML =
  "<form> " +
  "<input type='text' class = 'inputValue'/>" +
  // "<input type='text' class = 'inputValue2'/>" +
  "<input type='button' value = 'Nhap mang' onClick= 'getValue()'/>" +
  "<p id = 'arr1Value1'>" +
  "<p id = 'arr1Value'>" +
  "</p>" +
  "</br>" +
  "<input type='button' value = 'Nhan doi' onClick= 'nhanDoi()'/>" +
  "<input type='button' value = 'Them' onClick= 'them()'/>" +
  "<input type='button' value = 'Sua' onClick= 'sua()'/>" +
  "<input type='button' value = 'Xoa' onClick= 'xoa()'/>" +
  "<input type='button' value = 'Sap xep tang' onClick= 'sort1()'/>" +
  "<input type='button' value = 'Sap xep giam' onClick= 'sort2()'/>" +
  "</form>");
// var a1 = document.getElementsByClassName("inputValue2");
var a = document.getElementsByClassName("inputValue");
var b = a[0].value;

function getValue() {
  var mang = prompt("Nhap yeu cau", "Hiển thị mảng");
  b = a[0].value;
  arr = b.split(" "); // split để phân tác chuỗi
  arr1 = arr.toString();
  if (mang != null) {
    document.getElementById("arr1Value").innerHTML = "Mang :" + arr1;
  }
}

function nhanDoi() {
  // document.getElementById("arr1Value1").innerHTML = "Mang cu:" + arr1;
  arr1 = arr1 + "," + arr1;
  document.getElementById("arr1Value").innerHTML = "Mảng nhân đôi:" + arr1;
}

function them() {
  // document.getElementById("arr1Value1").innerHTML = "Mang cu:" + arr1;
  var mang = prompt("Mang cu:" + arr1);
  var mang1 = mang.split(" ");
  var mang2 = mang1.toString();
  if (mang != null) {
    document.getElementById("arr1Value").innerHTML =
      "Them mang:" + arr1 + "," + mang2;
  }
  arr1 = arr1 + "," + mang2;
}

function sua() {
  document.getElementById("arr1Value1").innerHTML = "mang cu:" + arr1;
  var mang = prompt("mang cu:" + arr1);
  var mang1 = mang.split(" ");
  var mang2 = mang1.toString();
  if (mang != null) {
    document.getElementById("arr1Value").innerHTML = "Mang sua:" + mang2;
  }
}

function xoa() {
  if (typeof arr1 === "string") {
    arr1 = arr1.split(",");
  }
  document.getElementById("arr1Value1").innerHTML = "mang da xoa: " + arr1;
  var vitri = prompt("Xoa tu ? den ?: ");
  vitri = vitri.split(",");
  var temp = Array.from(arr1, (x) => x);
  temp.splice(vitri[0], vitri[1]);
  document.getElementById("arr1Value").innerHTML = "mang da xoa: " + temp;
}

function sort1() {
  if (typeof arr1 == "string") {
    let newArr1 = arr1.split(",");
    newArr1.sort();
    document.getElementById("arr1Value").innerHTML = "SXT phan tu:" + newArr1;
    arr1 = newArr1;
  } else {
    arr1.sort();
    document.getElementById("arr1Value").innerHTML = "SXG phan tu:" + arr1;
    arr1 = arr1;
  }
}

function sort2() {
  if (typeof arr1 == "string") {
    let newArray2 = arr1.split(",");
    newArray2.sort();
    newArray2.reverse();
    document.getElementById("arr1Value").innerHTML = "SXG phan tu:" + newArray2;
    arr1 = newArray2;
  } else {
    arr1.reverse();
    document.getElementById("arr1Value").innerHTML = "SXG phan tu:" + arr1;
    arr1 = arr1;
  }
}
