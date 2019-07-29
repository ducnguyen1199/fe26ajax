class SinhVien{
    public name:string;
    public level:number;
    constructor(_name,_level){
        this.name=_name;
        this.level=_level;
    }
    public Xuat=()=>{
        console.log(`Ten: ${this.name}\nLevel: ${this.level}`);
    }
    static gioiThieu(){
        console.log("hello");
    }
}