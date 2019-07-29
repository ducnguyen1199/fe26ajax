var SinhVien = /** @class */ (function () {
    function SinhVien(_name, _level) {
        var _this = this;
        this.Xuat = function () {
            console.log("Ten: " + _this.name + "\nLevel: " + _this.level);
        };
        this.name = _name;
        this.level = _level;
    }
    SinhVien.gioiThieu = function () {
        console.log("hello");
    };
    return SinhVien;
}());
//# sourceMappingURL=SinhVien.js.map