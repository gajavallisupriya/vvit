//0--> no request and no responce
//1-->request sent,
//2-->request sent and accepted by destination
//3-->request sent,evaluating the response
//4-->request sent,ready to respond
//100-->data errors/information errors
//200-->success error
//300-->navagational errors
//400-->client side errors
//500-->internal server error
//fail
//fullfill
//block
fetch("data.json")
.then((response)=>{
   return response.json();
}).then((data)=>{
    console.log(data);
    display_info(data.basics);
})
var bodyElement=document.querySelector("#root");
function display_info(info){

    let heading=document.createElement("h2");
    heading.textContent=info.name;

    bodyElement.appendChild(heading);
    let card=document.createElement("div");
    card.classList.add("card");

    card.append(heading);
    

    let line=document.createElement("hr");
    card.append(line);
    bodyElement.append(card);
    
    let role=document.createElement("h3");
    role.textContent=info.role;
    card.append(role);
    let mail=document.createElement("a");
    mail.setAttribute("href","mailto:"+info.email)
    //mail.href="mailto:"+info.email;
    mail.textContent=info.email;
    card.append(mail);
     let phonenumber=document.createElement("h4");
     phonenumber.textContent=info.mobile;
     card.append(phonenumber);
    // card.append(link);
    let br=document.createElement("br");
    let br1=document.createElement("br");
    card.append(br);
    card.append(br1);
     let mobile = document.createElement("a");
     mobile.href="tel:"+info.mobile;
     mobile.textContent=info.mobile;
     card.append(mobile);
     var button=document.createElement("a");
     button.textContent="viewprofile";
     button.classList.add("btn");
     card.append(button);
   
}