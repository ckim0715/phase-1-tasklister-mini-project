document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');
  const list = document.querySelector('#tasks');

// add priorities:

  let addPriority = document.createElement('select');
  let opt1 = document.createElement('option')
  let opt2 = document.createElement('option')
  let opt3 = document.createElement('option')

  opt1.text = 'High'
  opt2.text = 'Medium'
  opt3.text = 'Low'

  opt1.value = 'high'
  opt2.value = 'medium'
  opt3.value = 'low'

  form.appendChild(addPriority);

  addPriority.add(opt1)
  addPriority.add(opt2)
  addPriority.add(opt3)

  
// function to set color of output based on priority:
const option = document.querySelector('option')

function targetColor(){
  if (addPriority.value === 'high'){
    return 'red'
  } else if (addPriority.value === 'medium'){
    return 'yellow'
  } else if (addPriority.value === 'low'){
    return 'green'
  }
}
  
 // submit event listener: 
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const targetValue = e.target["new-task-description"].value
    toDoAction(targetValue);
    
    
  
  })
//function carried out in submit event listener:
  function toDoAction (action){
    let p = document.createElement('p');
    let btn = document.createElement('button');
    btn.addEventListener('click', deleteAction)
    p.textContent = `${action} `;
    p.style.color = targetColor();
    list.appendChild(p);
    btn.textContent = 'x';
    p.appendChild(btn);
    
  
  }
// function to delete (used by button click event listener):
  function deleteAction(e) {
    e.target.parentNode.remove();
  }  

  
}
);





