function sure(){
    var x=5;
}

//Khai báo biến
function foo(){
    var x=10;
    if(true){
        var x=20;
        console.log(x);
    }
    console.log(x);
}
function foo2(){
    let x=10;
    if(true){
        let x=20;
        console.log(x);
    }
    console.log(x);
}
foo();
foo2();

for(let i=0;i<4;i++)
    console.log(i);
console.log(i);

for(var i=0;i<4;i++)
    console.log(i);
console.log(i);

//Hằng số
const pi=3.14;
pi=10;
const obj={lanme:'nguyen',fname:'duc'};
obj.lanme='cong';
obj={name:'duc'}

//kiểu dữ liệu
//Boolean
let bl:boolean=true;

// Number 
let decimal:number=10;
let hex:number=0x123;
let binary:number=0b1010;
let octal:number=0o744;
console.log(decimal,hex,binary,octal);

//String
let str:string='duc';

//Array
let list:number[]=[1,2,3,4];
console.log(list);
let list2:Array<number>=[1,2,3,4];
console.log(list2);

//Tuple: Kiểu dữ liệu mang giá trị là một mảng hỗn hợp
let list3:[string,number,number]=['duc',1,0];
console.log(list3)

// Enum: Kiểu dữ liệu mang các giá liệt kê. Thường dùng để gán các giá trị tham số với một tên mang ý nghĩa tường minh hơn
enum color{red=1,green=2,blue=3};
let c:color=color.red;
console.log(c);

//Any
let notSure:any=4;
console.log(notSure);
notSure='duc dep trai';
console.log(notSure);
notSure=false;
console.log(notSure);

//Null And Undefined
let u:undefined=undefined;
let n:null=null;
console.log(u,n);

//function
function hello(name){
    console.log(`hello: ${name}`);
}
hello('duc');

//Arrow function
let hello2=(name,name2)=>{
    console.log(name,name2);
}
let hello3=name=>console.log(name);


hello2('cong','duc');
hello3('duc');

let getParent=()=>10;
console.log(getParent());
let getBonus=(value=getParent()*10,bonus=value*2)=>console.log(value,bonus);
getBonus();

//Resparameter (Truyền nhiều tham số)
let display=function(...colors:string[]){
    for(let i=0;i<colors.length;i++)
        console.log(colors[i]);
    for(let item of colors)
        console.log(item);
    for(let index in colors)
        console.log(index);
}
display('red','green','blue');

// Spread operator (Truyền tham số là mảng)
let display2=function(...colors){
    for(let i=0;i<colors.length;i++)
        console.log(colors[i]);
    for(let item of colors)
        console.log(item);
    for(let index in colors)
        console.log(index);
}
let colors=['red','green','blue']
display2(colors);

// Destructuring Array (Bóc tách phần tử trong mảng)
let date=[10,11,1999];
let [d,m,y]=date;
console.log(d,m,y);
let [,,year]=date;
console.log(year);

//Destructuring Object (Bóc tách thuộc tính của đối tượng)
let fullname={
    lname:'nguyen',
    fname:'duc',
    level:'14'
}
let {lname:ln,fname:fn,level:lv}=fullname;
console.log(ln,fn,lv);

// OOP
//class
let SV=new SinhVien('duc',14);
SV.Xuat();
SinhVien.gioiThieu();

//ke thua
let GD=new GiamDoc('duc','sep');
console.log(`Ten: ${GD.hoTen}\nQuyen: ${GD.quyen}\nLuong:${GD.tinhLuong()}`);

//Interface
let NV_ThietKe=new NhanVienThietKe();
NV_ThietKe.congViec();

//DOM
var title=<HTMLInputElement>document.getElementById("title");
var input=(<HTMLInputElement>document.getElementById("text")).value;
(<HTMLInputElement>document.getElementById("btn")).adsdEventListener("click",function(){
    console.log("ok");
})
