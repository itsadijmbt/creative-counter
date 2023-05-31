
const addbtn = document.querySelector('.btnadd');
const subbtn = document.querySelector('.btnsub');
const entryFeilds = document.querySelector('.entry-feilds');
const backdrop1 = document.querySelector('.menu-controller-1');
const backdrop2 = document.querySelector('.menu-controller-2');
const switchBtn = document.querySelector('.clock-layout-after');
const changeTheme =document.querySelector('.change-theme');

const addbtn2 = document.querySelector('.addbtn2');
const subbtn2 = document.querySelector('.subbtn2');

const display_2 = document.querySelector('.display-2-tt');
let answer=0;
let c=0;





function display(mod){

if(mod==='add'){
  answer++;
}else if(mod==='sub' && answer!==0){
  answer--;
}
console.log(answer)
entryFeilds.textContent=answer;
display_2.textContent=answer;

}




addbtn.addEventListener('click',()=>{
  let mod='add';
  display(mod);
  addbtn.style.backgroundColor='yellow';
  subbtn.style.backgroundColor='red';  switchBtn.style.backgroundColor='lightgreen';
});
subbtn.addEventListener('click',()=>{
  let mod='sub';
  display(mod);
  subbtn.style.backgroundColor='yellow';
  addbtn.style.backgroundColor='red';
});

addbtn2.addEventListener('click',()=>{
  let mod='add';
  display(mod);
  addbtn2.style.backgroundColor='yellow';
  subbtn2.style.backgroundColor='red';  
});
subbtn2.addEventListener('click',()=>{
  let mod='sub';
  display(mod);
  subbtn2.style.backgroundColor='yellow';
  addbtn2.style.backgroundColor='red';
});

switchBtn.addEventListener('click',reset)
function reset(){
  answer=0;
  entryFeilds.textContent=answer;
  switchBtn.style.backgroundColor='red';
  addbtn.style.backgroundColor='red';
  subbtn.style.backgroundColor='red'; 
};

changeTheme.addEventListener('click',()=>{
 
   answer=0;
   entryFeilds.textContent=0;
   display_2.textContent=0;
  
  console.log(c);

  if(c%2===0){
    backdrop2.style.display='none';
    backdrop1.style.display='block';
  }
  else if(c%2!==0){
    backdrop2.style.display='block';
   backdrop1.style.display='none';
  }
  c++; 

   reset();
  subbtn2.style.backgroundColor='black';  
  addbtn2.style.backgroundColor='black';

});
