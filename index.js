const button = document.querySelector('button');
//  let inputForm = document.querySelector('.js-submit form');
//  let inputBox = inputForm.querySelector('input');
//querySelector는 DOM id, class에 상관없이 이름주면 됨.
//getElementByClassName은 안됨.
//getElementsByTagName 안됨.
const elInput = document.querySelector('#input');

const elUl = document.querySelector('#list');  

function paintTodo(text){
    const elLi = document.createElement("li");    
    const delBtn = document.createElement('button');
    delBtn.innerText = 'x';    
   // const delBtnDom = document.querySelector('#del');
   // elLi.innerHTML = text + delBtnDom;
   const span = document.createElement("span");
   span.innerText = text +" ";
   elLi.appendChild(span);
   elLi.appendChild(delBtn);

   elUl.prepend(elLi); //appendChild하고 반대기능. 

   delBtn.addEventListener("click", deleteTodo);    
}

function deleteTodo(){
    
    const btn = event.target;   //클릭하는  li 엘리먼트를 나타낸다.
    const li = btn.parentNode;  //console.dir(btn)으로 확인해보면 부모노드가 li로 나타남.
    elUl.removeChild(li); //ul에 li달려있으니 삭제.
}

function handleClick(){
    const currentVal = elInput.value;
    console.log("3");
    paintTodo(currentVal);
    elInput.value =''; //값 넣고 제출했을때 공백으로 보이게.    
}



elInput.onchange = handleClick;





//delBtn.onclick = deleClick;


// button.onchange = handleClick;
//elInput.onchange = handleClick;   //onchange부분은 엔터쳤을때 들어간다. 위에꺼 둘다 해줘야함.

// $('#button').click(function(){

// })
// button1.onclick = function(){
//     alert("버튼클릭 시방!!");
// }