//Khai báo biến
function foo() {
    var x = 10;
    if (true) {
        var x = 20;
        console.log(x);
    }
    console.log(x);
}
function foo2() {
    var x = 10;
    if (true) {
        var x_1 = 20;
        console.log(x_1);
    }
    console.log(x);
}
foo();
foo2();
for (var i_1 = 0; i_1 < 4; i_1++)
    console.log(i_1);
console.log(i);
for (var i = 0; i < 4; i++)
    console.log(i);
console.log(i);
//Hằng số
var pi = 3.14;
pi = 10;
var obj = { lanme: 'nguyen', fname: 'duc' };
obj.lanme = 'cong';
obj = { name: 'duc' };
//kiểu dữ liệu
//Boolean
var bl = true;
// Number 
var decimal = 10;
var hex = 0x123;
var binary = 10;
var octal = 484;
console.log(decimal, hex, binary, octal);
//String
var str = 'duc';
//Array
var list = [1, 2, 3, 4];
console.log(list);
var list2 = [1, 2, 3, 4];
console.log(list2);
//Tuple: Kiểu dữ liệu mang giá trị là một mảng hỗn hợp
var list3 = ['duc', 1, 0];
console.log(list3);
// Enum: Kiểu dữ liệu mang các giá liệt kê. Thường dùng để gán các giá trị tham số với một tên mang ý nghĩa tường minh hơn
var color;
(function (color) {
    color[color["red"] = 1] = "red";
    color[color["green"] = 2] = "green";
    color[color["blue"] = 3] = "blue";
})(color || (color = {}));
;
var c = color.red;
console.log(c);
//Any
var notSure = 4;
console.log(notSure);
notSure = 'duc dep trai';
console.log(notSure);
notSure = false;
console.log(notSure);
//Null And Undefined
var u = undefined;
var n = null;
console.log(u, n);
//function
function hello(name) {
    console.log("hello: " + name);
}
hello('duc');
//Arrow function
var hello2 = function (name, name2) {
    console.log(name, name2);
};
var hello3 = function (name) { return console.log(name); };
hello2('cong', 'duc');
hello3('duc');
var getParent = function () { return 10; };
console.log(getParent());
var getBonus = function (value, bonus) {
    if (value === void 0) { value = getParent() * 10; }
    if (bonus === void 0) { bonus = value * 2; }
    return console.log(value, bonus);
};
getBonus();
//Resparameter (Truyền nhiều tham số)
var display = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    for (var i_2 = 0; i_2 < colors.length; i_2++)
        console.log(colors[i_2]);
    for (var _a = 0, colors_1 = colors; _a < colors_1.length; _a++) {
        var item = colors_1[_a];
        console.log(item);
    }
    for (var index in colors)
        console.log(index);
};
display('red', 'green', 'blue');
// Spread operator (Truyền tham số là mảng)
var display2 = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    for (var i_3 = 0; i_3 < colors.length; i_3++)
        console.log(colors[i_3]);
    for (var _a = 0, colors_2 = colors; _a < colors_2.length; _a++) {
        var item = colors_2[_a];
        console.log(item);
    }
    for (var index in colors)
        console.log(index);
};
var colors = ['red', 'green', 'blue'];
display2(colors);
// Destructuring Array (Bóc tách phần tử trong mảng)
var date = [10, 11, 1999];
var d = date[0], m = date[1], y = date[2];
console.log(d, m, y);
var year = date[2];
console.log(year);
//Destructuring Object (Bóc tách thuộc tính của đối tượng)
var fullname = {
    lname: 'nguyen',
    fname: 'duc',
    level: '14'
};
var ln = fullname.lname, fn = fullname.fname, lv = fullname.level;
console.log(ln, fn, lv);
// OOP
//class
var SV = new SinhVien('duc', 14);
SV.Xuat();
SinhVien.gioiThieu();
//ke thua
var GD = new GiamDoc('duc', 'sep');
console.log("Ten: " + GD.hoTen + "\nQuyen: " + GD.quyen + "\nLuong:" + GD.tinhLuong());
//Interface
var NV_ThietKe = new NhanVienThietKe();
NV_ThietKe.congViec();
//DOM
var title = document.getElementById("title");
var input = document.getElementById("text").value;
document.getElementById("btn").adsdEventListener("click", function () {
    console.log("ok");
});
//# sourceMappingURL=main.js.map