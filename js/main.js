function domId(id) {
    return document.getElementById(id);
}

function quyDoi(id) {
    var quyDoi = new Intl.NumberFormat('vn-VN');
    return quyDoi.format(id);

}


const kw_50 = 500;
const kw_65 = 650;
const kw_85 = 850;
const kw_11 = 1100;
const kw_13 = 1300;
var tongTien = 0;





function getEle(id){
    return document.getElementById(id);
}
function ketQua(){
var diemChuan = getEle("diemChuan").value * 1;
var diemmon_1 = getEle("diemmon_1").value * 1;
var diemmon_2 = getEle("diemmon_2").value * 1;
var diemmon_3 = getEle("diemmon_3").value * 1;
var khuVuc = getEle("khuVuc").value;
var doiTuong = getEle("doiTuong").value;
var tongDiem = diemmon_1 + diemmon_2 + diemmon_3;
//Diem chuan
// if(diemChuan >= 0 && diemChuan <= 30){
//     cl
// }
// else{
//     alert("Vui lòng nhập điểm hợp lệ !!")
// }
//Khu vuc uu tien 
if(khuVuc == "A"){
    tongDiem += 0.5;
}
else if(khuVuc == "B"){
    tongDiem += 1;
}
else if(khuVuc == "C"){
    tongDiem += 1.5;
}
//Doi tuong
if(doiTuong == 1){
    tongDiem += 1;
}
else if(doiTuong == 2){
    tongDiem += 0.5;
}
else if(doiTuong == 3){
    tongDiem += 1.5;
}
//Kiem tra điểm tổng 
if(tongDiem >= diemChuan && diemmon_1 > 0 && diemmon_2 > 0 && diemmon_3 > 0){
    document.getElementById("ketQua").innerHTML = "Bạn đã đậu.";
}
else if(tongDiem < diemChuan){
    document.getElementById("ketQua").innerHTML = "Bạn đã rớt";
}
console.log(tongDiem);
}
function giaDien_1(soKw,kw_50){
    return soKw * kw_50;
}
function giaDien_2(soKw,kw_65){
    return (soKw-50) * kw_65;
}
function giaDien_3(soKw,kw_85){
    return( soKw - 100 )* kw_85;
}
function giaDien_4(soKw,kw_11){
    return (soKw - 200) * kw_11;
}
function giaDien_5(soKw,kw_13){
    return (soKw - 350) * kw_13;
}
function tienDienTheoGia(soKw,kw_50,kw_65,kw_85,kw_11,kw_13){
    if(soKw >= 0 && soKw <= 50){
      tinhTienGiaDien_1 = giaDien_1(soKw,kw_50);
      tongTien = tinhTienGiaDien_1;
      console.log(tongTien);
    }
    else if(soKw > 50 && soKw <= 100){
        tinhTienGiaDien_2 = giaDien_2(soKw,kw_65);
        tongTien = tinhTienGiaDien_1 + tinhTienGiaDien_2;
        console.log(tongTien);
    }
    else if(soKw > 100 && soKw <= 200){
        tinhTienGiaDien_3 = giaDien_3(soKw,kw_85);
        tongTien = tinhTienGiaDien_1 + tinhTienGiaDien_2+ tinhTienGiaDien_3;
        console.log(tongTien);
    }
    else if(soKw > 200 && soKw <= 350){
        tinhTienGiaDien_4 = giaDien_4(soKw,kw_11);
        tongTien = tinhTienGiaDien_1 + tinhTienGiaDien_2+tinhTienGiaDien_3+ tinhTienGiaDien_4;
        console.log(tongTien);
    }
    else if(soKw > 350){
        tinhTienGiaDien_5 = giaDien_5(soKw,kw_13);
        tongTien = tinhTienGiaDien_1 + tinhTienGiaDien_2+tinhTienGiaDien_3+ tinhTienGiaDien_4+tinhTienGiaDien_5;
        console.log(tongTien);
    }
return tongTien;
}
function tinhTienDien(){
    var soKw = getEle("soKw").value * 1;
    var hoTen = getEle("hoTen").value;
 
    tienDienTheoGia(soKw,kw_50,kw_65,kw_85,kw_11,kw_13);
    getEle("xuatTien").innerHTML ="Tên: "+ hoTen +"Tiền điện: "+ tongTien + "đ";

}

//BÀI TÍNH THUẾ THU NHẬP CÁ NHÂN


//input
var thue = 0;

//xử lý 
function tinhThue(tongThuNhap, soNguoiPT) {
    var thuNhapChiuThue = tongThuNhap - 4000000 - (soNguoiPT * 1600000);

    if (thuNhapChiuThue > 0 && thuNhapChiuThue <= 60000000 && soNguoiPT > 0) {
        thue = thuNhapChiuThue * 0.05;
    }

    else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000 && soNguoiPT > 0) {
        thue = 60000000 * 0.05 + (thuNhapChiuThue - 60000000) * 0.1;
    }

    else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000 && soNguoiPT > 0) {
        thue = 60000000 * 0.05 + (120000000 - 60000000) * 0.1 + (thuNhapChiuThue - 120000000) * 0.15;
    }

    else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000 && soNguoiPT > 0) {
        thue = 60000000 * 0.05 + (120000000 - 60000000) * 0.1 + (210000000 - 120000000) * 0.15 + (thuNhapChiuThue - 210000000) * 0.2;
    }

    else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000 && soNguoiPT > 0) {
        thue = 60000000 * 0.05 + (120000000 - 60000000) * 0.1 + (210000000 - 120000000) * 0.15 + (384000000 - 210000000) * 0.2 + (thuNhapChiuThue - 384000000) * 0.25;
    }

    else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000 && soNguoiPT > 0) {
        thue = 60000000 * 0.05 + (120000000 - 60000000) * 0.1 + (210000000 - 120000000) * 0.15 + (384000000 - 210000000) * 0.2 + (624000000 - 384000000) * 0.25 + (thuNhapChiuThue - 624000000) * 0.3;
    }

    else if (thuNhapChiuThue > 960000000 && soNguoiPT > 0) {
        thue = 60000000 * 0.05 + (120000000 - 60000000) * 0.1 + (210000000 - 120000000) * 0.15 + (384000000 - 210000000) * 0.2 + (624000000 - 384000000) * 0.25 + (960000000 - 624000000) * 0.3 + (thuNhapChiuThue - 960000000) * 0.35;
    } else {
        alert('Vui lòng nhập số hợp lệ !');
    }
    // return thuNhapChiuThue;
}


function btnThuNhap() {
    var hoVaTen = domId('hoVaTen').value;
    var tongThuNhap = Number(Math.floor(domId('tongThuNhap').value));
    var soNguoiPT = Number(Math.floor(domId('soNguoiPT').value));

    tinhThue(tongThuNhap, soNguoiPT);


    //output

    domId('ketQuaThue').innerHTML = hoVaTen + '<div>Thuế thu nhập cá nhân phải trả: ' + quyDoi(thue) + 'vnđ' + '</div>';
}




//  BÀI TÍNH TIỀN CÁP


//input
var tongTienCap = 0;
var loaiKH = '';

//xử lý
function inputLoaiKH() {
    loaiKH = domId('loaiKH').value;
    switch (loaiKH) {
        case 'doanhNghiep':
            var hienThi = domId('soKetNoi');
            hienThi.removeAttribute('disabled');
            break;
        default:
            hienThi = domId('soKetNoi');
            hienThi.setAttribute('disabled', 'true');

            break;

    }

}

function chonLoaiKH(loaiKH, soKetNoi, soKenh) {
    switch (loaiKH) {
        case 'nhaDan':
            if (soKenh > 0) {
                tongTienCap = 4.5 + 20.5 + (7.5 * soKenh);
            } else {
                tongTienCap = 0;
            }


            break;
        case 'doanhNghiep':

            if (soKetNoi > 0 && soKetNoi <= 10) {
                tongTienCap = 15 + (7.5 * soKetNoi) + (50 * soKenh);
            } else if (soKetNoi > 10) {
                tongTienCap = 15 + ((7.5 * 10) + (soKetNoi - 10) * 5) + (50 * soKenh);
            }

            break;

        default: alert('Vui lòng chọn loại khách hàng');
            break;
    }
}


function btnTienCap() {
    var maKH = domId('maKH').value;
    loaiKH = domId('loaiKH').value;
    var soKetNoi = domId('soKetNoi').value * 1;
    soKetNoi = Math.floor(soKetNoi);
    var soKenh = domId('soKenh').value * 1;
    soKenh = Math.floor(soKenh);

    chonLoaiKH(loaiKH, soKetNoi, soKenh);


    //output

    domId('ketQuaCap').innerHTML = 'Mã khách hàng: ' + maKH + '<div>' + ' Tổng tiền: ' + tongTienCap + '$' + '</div>';
}
