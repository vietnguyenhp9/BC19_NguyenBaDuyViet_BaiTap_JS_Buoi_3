// alert("Bài 1")
//             var Ten, Tuoi; // Khai báo 2 biến để lưu tên và tuổi
// Ten = prompt("Bạn hãy nhập vào tên ", "");
// Tuoi = prompt("Bạn hãy nhập vào Tuổi : ", 20);
// document.write("Chào bạn : <B> " + Ten + "</B>");
// document.write("<BR>"); // Xuống dòng
// document.write("Tuổi của bạn là : <U> " + Tuoi + "</U>");
// clearInterval
// document.write("Tao Button va Text bang Script<BR>");
// document.write("<BR>");
// document.write("<input type=button name=welcome value = 'Welcome' ");
// document.write("onclick = 'alert ('Welcome to JavaScript');' > ");
// document.write("<input type = text name = msg value = 'Welcome to'>");

function tongLuong() {
  var layngay = document.getElementById("Ngay").value;

  var divTongLuong = document.getElementById("divTongLuong");
  divTongLuong.style.display = "block";
  var spantien = document.getElementById("vnd");
  var Luong = layngay * 100000;
  spantien.innerHTML = Luong;
}
function trungBinh() {
  var a = document.getElementById("a").value;
  var A = Number(a);
  var b = document.getElementById("b").value;
  var B = Number(b);
  var c = document.getElementById("c").value;
  var C = Number(c);
  var d = document.getElementById("d").value;
  var D = Number(d);
  var e = document.getElementById("e").value;
  var E = Number(e);
  var divtrungbinh = document.getElementById("divTrungBinh");
  divtrungbinh.style.display = "block";
  var spandiem = document.getElementById("diem");
  var trungBinh = (A + B + C + D + E) / 5;
  spandiem.innerHTML = trungBinh;
}
function quyDoi() {
  var layusd = document.getElementById("USD").value;

  var divquydoi = document.getElementById("divQuyDoi");
  divquydoi.style.display = "block";
  var spantvnd = document.getElementById("spanvnd");
  var tien = parseFloat(layusd * 23500);
  spanvnd.innerHTML = tien;
}
function tinh() {
  var laychieudai = document.getElementById("chieudai").value;
  var a = Number(laychieudai);
  var laychieurong = document.getElementById("chieurong").value;
  var b = Number(laychieurong);
  var divtinh = document.getElementById("divTinh");
  divtinh.style.display = "block";
  var spanchuvi = document.getElementById("spanchuvi");
  var spandientich = document.getElementById("spandientich");
  var chuvi = (a + b) * 2;
  var dientich = a * b;
  spanchuvi.innerHTML = chuvi;
  spandientich.innerHTML = dientich;
}
function tong() {
  var a = document.getElementById("so").value;
  var soHangDonVi = a % 10;
  var b = Number(soHangDonVi);
  var soHangChuc = a / 10;
  var c = Number(soHangChuc);
  var divtong = document.getElementById("divtong");
  divtong.style.display = "block";
  var spantong = document.getElementById("spantong");
  var Tong = parseInt(b + c);
  spantong.innerHTML = Tong;
}
