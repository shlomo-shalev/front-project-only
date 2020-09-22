//בודק האם השדות מלאים ואם הטקסט שהוזן בשדה של המייל תקין

function bdika(){
    var arreyclassvalue = ["div.left input.name","div.left input.lastname","div.left input.email","div.right textarea"];
    var arreyclass404value = ["div.left span.textname","div.left span.textlastname","div.left span.textemail","div.right span.textextarea"];
    var textage = ["Write your name!","Write your last name","Write your email","What is the reason for referral?"];
    var machv404v = 0;
    for (var i = 0; i <4;i++){
    var tagee = document.querySelector("section.form form " + arreyclassvalue[i]).value;
    if(tagee == "" || tagee == undefined){
        machv404v++;
        document.querySelector("section.form form " + arreyclass404value[i]).innerHTML = textage[i];
    }else {
        document.querySelector("section.form form " + arreyclass404value[i]).innerHTML = "";
    }
}
var tagemail = document.querySelector("section.form form div.left input.email").value;
var tagespanmail = document.querySelector("section.form form div.left span.textemail").innerHTML;
if(tagemail != ""){
    var gg = tagemail.indexOf("@");
    var ff = tagemail.indexOf(".");
    if(gg == -1 || ff == -1){
        machv404v++;
        document.querySelector("section.form form div.left span.textemail").innerHTML = "Email is incorrect!";
    }
}
if(machv404v == 0){
    document.querySelector("section.form form div.right span.Approval").innerHTML = "The message was sent successfully We will contact you within the next 48 hours!";
}else{
    document.querySelector("section.form form div.right span.Approval").innerHTML = "";
}
}

document.querySelector("section.form form div.right input[type=button]").addEventListener("click",bdika);