let task =document.getElementById('task');
let input =document.getElementById('input');
let button=document.getElementById('button');
let outputtext=document.getElementById('outputtext');
let but=document.getElementById('but');

button.addEventListener('click',()=>{
    
    // const paragraph=document.createElement('p');
    const paragraph=document.createElement('p');

    // <p style="color:white;border:2px solid green;"></p>
    paragraph.innerText=input.value;
    outputtext.appendChild(paragraph);
    input.value=" ";
    paragraph.addEventListener('click',()=>{
        paragraph.style.textDecoration="line-through";
        paragraph.style.textDecorationColor=red;
        

    })
    paragraph.addEventListener('dblclick',()=>{
        outputtext.removeChild(paragraph);
    })
   
    
})
but.addEventListener('click',()=>{
    // const para=createElement('p');
    // para.innerText="Yeah Congrats";
    // outputtext.appendChild(para);
    // console.log("hi");
    alert("yfy");
    })