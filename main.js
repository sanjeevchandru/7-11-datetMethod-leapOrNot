document.write("leap or not using date method"+"<br>");
document.write("--------------------------------------------"+"<br>");

var dt=new Date();

b=dt.getFullYear();
document.write("This year :"+b+"<br>");

if(b%400==1){
    document.write(b+" is leap year");
}
else{
    document.write(b+" is not leap year");
}