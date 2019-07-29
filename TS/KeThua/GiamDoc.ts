class GiamDoc extends NhanVien{
    public quyen;
    constructor(hoTen,_quyen){
        super(hoTen);
        this.quyen=_quyen;
    }
    public tinhLuong(){
        return super.tinhLuong()*4;
    }
}