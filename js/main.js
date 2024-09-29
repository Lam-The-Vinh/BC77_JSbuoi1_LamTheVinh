// khi nhận đề bài: input(dữ liệu đầu vào) => các bước xử lý(công thức tính toán) => output(kết quả trả ra)
/*
bài 1: tính lương nhân viên
    Bước 1: xác định input: số ngày làm, lương cơ bản
    Bước 2: xử lý: lương nhân viên = số ngày làm * lương cơ bản
    Bước 3: xác định output: tên nhân viên và lương nhân viên
 */

// let tenNV = prompt("nhập tên nhân viên");
// let soNgayLam = prompt("nhập số ngày làm");
// let luongCB = prompt("nhập lương cơ bản");

// let luong = +soNgayLam * +luongCB;
// console.log("tên nhân viên: ", tenNV, "lương: ", luong);

/*
bài 2: tính điểm trung bình
    Bước 1: xác định input: 5 số thực
    Bước 2: xử lý: giá trị trung bình của 5 số = 5 số thực + lại / 5
    Bước 3: xác định output: giá trị trung bình của 5 số 
*/

// let a = prompt("nhập 1 số thực bất kì");
// let b = prompt("nhập 1 số thực bất kì");
// let c = prompt("nhập 1 số thực bất kì");
// let d = prompt("nhập 1 số thực bất kì");
// let e = prompt("nhập 1 số thực bất kì");

// let tong = +a + +b + +c + +d + +e;
// let giaTriTB = tong / 5;
// console.log("giá trị trung bình: ", giaTriTB);

/*bài 3: quy đổi tiền tệ
    Bước 1: xác định input: giá USD và số lượng USD cần quy đổi
    Bước 2: xử lý: tổng số tiền việt nhận được = giá USD * số lượng
    Bước 3: xác định output: tổng số tiền việt nhận được
 */

// let gia = prompt("giá USD");
// let soLuong = prompt("số lượng USD cần quy đổi");

// let tong = gia * soLuong;
// console.log("tổng số tiền việt nhận được: ", tong);

/*bài 4: tính chu vi và diện tích của hình chữ nhật
    Bước 1: xác định input: chiều dài và chiều rộng 
    Bước 2: xử lý: chu vi = (dài + rộng) * 2 và diện tích = dài * rộng 
    Bước 3: xác định output: chu vi và diện tích 
*/

let dai = prompt("chiều dài hình chữ nhật");
let rong = prompt("chiều rộng hình chữ nhật");

let tong = +dai + +rong;
let chuVi = tong * 2;
console.log("chuVi: ", chuVi);
let dienTich = dai * rong;
console.log("dienTich: ", dienTich);
