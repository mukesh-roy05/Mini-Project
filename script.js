function label_create(tagName,attname,attval,content){
    var ele = document.createElement(tagName);
    ele.setAttribute(attname,attval);
    ele.innerHTML= content;
    return ele;
}

function br_create(){
    var break_ele = document.createElement("br")
    return break_ele;
}

function input_create(tagName,attname,attval,attname1,attval1){
    var input_ele = document.createElement(tagName);
    input_ele.setAttribute(attname,attval);
    input_ele.setAttribute(attname1,attval1);
    return input_ele;
}


function button_create(tagName,attname,attval,attname1,attval1,content){
    var button_ele = document.createElement(tagName);
    button_ele.setAttribute(attname,attval);
    button_ele.setAttribute(attname1,attval1);
    button_ele.innerHTML=content
    return button_ele;
}


function foo(){
    var fname = document.getElementById ("fname").value
    var mname = document.getElementById ("mname").value
    var lname = document.getElementById ("lname").value
    var email = document.getElementById ("email").value
    var pass = document.getElementById ("pass").value

console.log(fname , mname, lname, email, pass);
var input = document.createElement("p")
    input.innerText = (fname , mname, lname, email, pass);
}


var line_brk= br_create();

var fName = label_create("label","for","fname","FirstName");
var fname_inp = input_create("input","type","text","id","fname");
// document.body.append(fName,line_brk,fname_inp)

var mName = label_create("label","for","mname","MiddleName");
var mname_inp = input_create("input","type","text","id","mname");
// document.body.append(mName,line_brk,mname_inp)

var lName = label_create("label","for","lname","LastName");
var lname_inp = input_create("input","type","text","id","lname");
// document.body.append(lName,line_brk,lname_inp)

var email = label_create("label","for","email","Email");
var email_inp = input_create("input","type","email","id","email");
// document.body.append(email,line_brk,email_inp)

var password = label_create("label","for","pass","Password");
var pass_inp = input_create("input","type","text","id","pass");
// document.body.append(password,line_brk,pass_inp)

{/* <button type="button" onclick="foo()"> Click me</button> */}

var button = button_create("button","type","button","onclick","foo()","Click me")

document.body.append(
    fName,line_brk,fname_inp,line_brk,
    mName,line_brk,mname_inp,line_brk,
    lName,line_brk,lname_inp,line_brk,
    email,line_brk,email_inp,line_brk,
    password,line_brk,pass_inp,line_brk,
    button

)


