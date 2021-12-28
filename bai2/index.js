var text = (document.getElementById("demo").innerHTML =
  "<form> " +
  " <input type='text' class = 'inputValue'/>" +
  "<input type='button' value = 'Nhap chuoi' onClick= 'getValue()'/>" +
  "<p id = 'arr1Value1'>" +
  "<p id = 'arr1Value'>" +
  "</p>" +
  "</br>" +
  "<input type='button' value = 'Do dai' onClick= 'dai()'/>" +
  "<input type='button' value = 'Xoa' onClick= 'remove()'/>" +
  "<input type='button' value = 'Them' onClick= 'add()'/>" +
  "<input type='button' value = 'Thay the' onClick= 'thayThe()'/>" +
  "<input type='button' value = 'Vi Tri' onClick= 'viTri()'/>" +
  "<input type='button' value = 'In hoa' onClick= 'inHoa()'/>" +
  "<input type='button' value = 'In thuong' onClick= 'inThuong()'/>" +
  "</form>");

var a = document.getElementsByClassName("inputValue");
var b = a[0].value;

function getValue() {
  var chuoi = prompt("Nhap yeu cau", "Hien thi chuoi");
  b = a[0].value;
  if (chuoi != null) {
    document.getElementById("arr1Value").innerHTML = "Chuoi :" + b;
  }
}

function dai() {
  b = a[0].value;
  let doDai = b.length;
  document.getElementById("arr1Value").innerHTML +=
    "</br>" + "Do dai: " + doDai;
}

function remove() {
  document.getElementById("arr1Value1").innerHTML = "Chuoi cu :" + b;
  b = a[0].value;
  let c = prompt("Khoang lay: ");
  let d = b.replace(c, ""); // thay c bằng khoảng trống.
  document.getElementById("arr1Value").innerHTML = "chuoi da xoa: " + d;
  a[0].value = d;
}

function add() {
  document.getElementById("arr1Value1").innerHTML = "Chuoi cũ :" + b;
  b = a[0].value;
  let chuoicu = prompt("Mang cu:" + b);
  let chuoimoi = b.concat(chuoicu);
  document.getElementById("arr1Value").innerHTML = " Chuoi them:" + chuoimoi;
  a[0].value = chuoimoi;
}

function thayThe() {
  b = a[0].value;
  let chuoi = prompt("chuoi cu: ", b);
  let chuoimoi = chuoi.replace(b, chuoi);
  document.getElementById("arr1Value").innerHTML = "Chuoi thay the:" + chuoimoi;
  a[0].value = chuoimoi;
}

function viTri() {
  document.getElementById("arr1Value1").innerHTML = "Chuoi cũ :" + b;
  b = a[0].value;
  let vi = prompt("nhập chuỗi: ");
  let vitri = b.indexOf(vi);
  document.getElementById("arr1Value").innerHTML = "Vị trí là:" + vitri;
  a[0].value = vitri;
}

function inHoa() {
  document.getElementById("arr1Value1").innerHTML = "Chuoi cũ :" + b;
  b = a[0].value;
  let hoa = b.toUpperCase();
  document.getElementById("arr1Value").innerHTML = "Chuoi in hoa:" + hoa;
  a[0].value = hoa;
}

function inThuong() {
  document.getElementById("arr1Value1").innerHTML = "Chuoi cũ :" + b;
  b = a[0].value;
  let thuong = b.toLowerCase();
  document.getElementById("arr1Value").innerHTML = "Chuoi in thuong:" + thuong;
  a[0].value = thuong;
}
