
let listNumber = [];

function showList(arr) {
    let content = "";
    for (let i = 0; i < arr.length; i++) {
        content += arr[i];
        if (i < arr.length - 1) {
            content += ", ";
        }
    }
    return "[" + content + "]";
}
function renderListNumber() {
    document.getElementById("showListNumber").innerHTML =
        "Dãy số bạn đã nhập: " + showList(listNumber);
}

function kiemTraMangRong(idKetQua) {
    if (listNumber.length === 0) {
        document.getElementById(idKetQua).innerHTML = "Mảng đang rỗng, vui lòng nhập số trước!";
        return true;
    }
    return false;
}

function handleAddNumber() {
    const input = document.getElementById("nhapN").value;
    const number = input * 1;
    if (input === "" || !Number.isInteger(number)) {
        alert("Vui lòng nhập một số nguyên!");
        return;
    }
    listNumber.push(number);
    renderListNumber();
    document.getElementById("nhapN").value = "";
    document.getElementById("nhapN").focus();
}

function handleResetArray() {
    listNumber = [];
    renderListNumber();
    for (let i = 1; i <= 10; i++) {
        document.getElementById("showRS_" + i).innerHTML = "";
    }
}

// 1. Tổng các số dương trong mảng.
function tinhTongSoDuong() {
    if (kiemTraMangRong("showRS_1")) return;
    let tong = 0;
    for (let i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            tong += listNumber[i];
        }
    }
    document.getElementById("showRS_1").innerHTML = "Tổng các số dương: " + tong;
}

// 2. Đếm có bao nhiêu số dương trong mảng.
function demSoDuong() {
    if (kiemTraMangRong("showRS_2")) return;
    let dem = 0;
    for (let i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            dem++;
        }
    }
    document.getElementById("showRS_2").innerHTML = "Số lượng số dương: " + dem;
}

// 3. Tìm số nhỏ nhất trong mảng.
function timSoNhoNhat() {
    if (kiemTraMangRong("showRS_3")) return;
    let min = listNumber[0];
    for (let i = 1; i < listNumber.length; i++) {
        if (listNumber[i] < min) {
            min = listNumber[i];
        }
    }
    document.getElementById("showRS_3").innerHTML = "Số nhỏ nhất: " + min;
}

// 4. Tìm số dương nhỏ nhất trong mảng.
function timSoDuongNhoNhat() {
    if (kiemTraMangRong("showRS_4")) return;
    let minDuong = null; // chưa tìm thấy số dương nào
    for (let i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            if (minDuong === null || listNumber[i] < minDuong) {
                minDuong = listNumber[i];
            }
        }
    }
    let rs = "";
    if (minDuong === null) {
        rs = "Không có số dương trong mảng";
    } else {
        rs = "Số dương nhỏ nhất: " + minDuong;
    }
    document.getElementById("showRS_4").innerHTML = rs;
}

// 5. Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
function timSoChanCuoiCung() {
    if (kiemTraMangRong("showRS_5")) return;
    let soChan = -1;
    // Duyệt từ cuối mảng lên, gặp số chẵn đầu tiên là số chẵn cuối cùng
    for (let i = listNumber.length - 1; i >= 0; i--) {
        if (listNumber[i] % 2 === 0) {
            soChan = listNumber[i];
            break;
        }
    }
    document.getElementById("showRS_5").innerHTML = "Số chẵn cuối cùng: " + soChan;
}

// 6. Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
function doiCho() {
    if (kiemTraMangRong("showRS_6")) return;
    const viTri1 = document.getElementById("viTri1").value * 1;
    const viTri2 = document.getElementById("viTri2").value * 1;
    const n = listNumber.length;
    // Vị trí phải là số nguyên, nằm trong khoảng 0 -> n-1
    if (!Number.isInteger(viTri1) || !Number.isInteger(viTri2) ||
        viTri1 < 0 || viTri1 >= n || viTri2 < 0 || viTri2 >= n) {
        document.getElementById("showRS_6").innerHTML =
            "Vị trí không hợp lệ! Vui lòng nhập từ 0 đến " + (n - 1);
        return;
    }
    let temp = listNumber[viTri1];
    listNumber[viTri1] = listNumber[viTri2];
    listNumber[viTri2] = temp;
    renderListNumber();
    document.getElementById("showRS_6").innerHTML = "Mảng sau khi đổi: " + showList(listNumber);
}

// 7. Sắp xếp mảng theo thứ tự tăng dần.
function sapXepTangDan() {
    if (kiemTraMangRong("showRS_7")) return;
    // Sao chép mảng để không làm thay đổi mảng gốc
    let arr = [];
    for (let i = 0; i < listNumber.length; i++) {
        arr.push(listNumber[i]);
    }
    // Sắp xếp nổi bọt (bubble sort)
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    document.getElementById("showRS_7").innerHTML = "Mảng tăng dần: " + showList(arr);
}

// 8. Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về -1.
function kiemTraSoNguyenTo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
function timSoNguyenToDauTien() {
    if (kiemTraMangRong("showRS_8")) return;
    let soNT = -1;
    for (let i = 0; i < listNumber.length; i++) {
        if (kiemTraSoNguyenTo(listNumber[i])) {
            soNT = listNumber[i];
            break;
        }
    }
    document.getElementById("showRS_8").innerHTML = "Số nguyên tố đầu tiên: " + soNT;
}

// 9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
let listSoThuc = [];
function themSoThuc() {
    const input = document.getElementById("nhapSoThuc").value;
    if (input === "") {
        alert("Vui lòng nhập một số!");
        return;
    }
    listSoThuc.push(input * 1);
    document.getElementById("showListSoThuc").innerHTML = "Mảng số thực: " + showList(listSoThuc);
    document.getElementById("nhapSoThuc").value = "";
    document.getElementById("nhapSoThuc").focus();
}
function demSoNguyen() {
    if (listSoThuc.length === 0) {
        document.getElementById("showRS_9").innerHTML = "Mảng số thực đang rỗng!";
        return;
    }
    let dem = 0;
    for (let i = 0; i < listSoThuc.length; i++) {
        if (Number.isInteger(listSoThuc[i])) {
            dem++;
        }
    }
    document.getElementById("showRS_9").innerHTML = "Số lượng số nguyên: " + dem;
}

// 10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
function soSanhDuongAm() {
    if (kiemTraMangRong("showRS_10")) return;
    let demDuong = 0;
    let demAm = 0;
    for (let i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            demDuong++;
        } else if (listNumber[i] < 0) {
            demAm++;
        }
    }
    let rs = "";
    if (demDuong > demAm) {
        rs = "Số dương > Số âm";
    } else if (demDuong < demAm) {
        rs = "Số âm > Số dương";
    } else {
        rs = "Số dương = Số âm";
    }
    document.getElementById("showRS_10").innerHTML =
        rs + " (dương: " + demDuong + ", âm: " + demAm + ")";
}
