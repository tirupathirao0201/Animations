var imgEle = document.getElementById("imgA");
var titleEle =document.getElementById("title");
var lineEle = document.getElementById("line");
var contentEle = document.getElementById("content");
var subHeadingEle =document.getElementById("sub-heading")
var articleHeadingEle = document.getElementById("article1__heading");
var article1SideHeadingEle = document.getElementById("article1__side-heading");
var article1ContentEle = document.getElementById("article1__content");
var articleImageEle = document.getElementById("article1__image");
var articleEle =document.getElementById("article1");


// each animation starts after sometime
console.log(imgEle);
setTimeout(()=>{
    titleEle.style.display="block";
},50);
setTimeout(()=>{
    lineEle.style.display="block";
},1050);

setTimeout(()=>{
    imgEle.style.display="block";
 },1000);
setTimeout(()=>{
    subHeadingEle.style.visibility="visible";
},1400)
setTimeout(()=>{
    contentEle.style.display="block";
    
},1500);
setTimeout(()=>{
    articleEle.style.display="block";
},3000)
setTimeout(()=>{
    articleHeadingEle.style.display="block";
},3100);

setTimeout(()=>{
    article1SideHeadingEle.style.display="block";
},3200);

setTimeout(()=>{
    article1ContentEle.style.display="block";
},3300);

setTimeout(()=>{
    articleImageEle.style.display="block";
},3350);