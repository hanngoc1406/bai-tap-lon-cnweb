$(document).ready(function() {
    clockUpdate();
    getCurrentDate();

    // Set update to 1 second. 1000 ms = 1 second.
    setInterval(clockUpdate, 1000);
})

// gio:phu:giay
function clockUpdate() {
    // Khoi tao doi tương Date
    var date = new Date();

    // Them so 0 vao truoc 1 2 3 4 5 6 7 8 9 
    function addZero(x) {
        if (x < 10) {
            return x = '0' + x;
        } else {
            return x;
        }
    }

    // Doc code la biet dang lam gi
    var h = addZero(date.getHours());
    var m = addZero(date.getMinutes());
    var s = addZero(date.getSeconds());
    
    // hien thi len html
    $('#time').html(h + ':' + m + ':' + s)
}

// Thu, ngay/thang/nam
function getCurrentDate() {
    var date = new Date();

    var dd = date.getDate()
    // Month in js start from 0 to 11. So i need to plus 1
    var mm = date.getMonth() + 1; 
    var yyyy = date.getFullYear();
    // Same as month. Return week index 0-6: Sunday - Saturday
    var ww = date.getDay();
    // Tiếng mẹ đẻ
    var fullDay = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];

    function addZero(dd) {
        if (dd < 10) {
            return x = '0' + dd;
        } else {
            return dd;
        }
    }

    // Cung chi la hien thi len 
    $('#date').html(fullDay[ww] + ', ' + addZero(dd) + '/' + addZero(mm) + '/' + yyyy);
}