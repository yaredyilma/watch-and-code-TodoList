'use strict';

const addToDoHandler = (event) => {
  
  //console.log('ik ook ik ook');
    event.preventDefault(); 
  // event delegation!
  const target = event.target;
  if (target.nodeName !== 'INPUT' ) {
    return;
  }
  if(event.keyCode === 13){
    
    // update state using app method
    const inputEl = document.getElementById('todo-input');
    const userInput = inputEl.value;
    app.addToDo(userInput);

    localStorage.setItem('app', JSON.stringify(app));
    inputEl.value = '';
    inputEl.focus();
    
    const todosView = renderTodos(app._state.todos);
  //todosView.addEventListener('change', toggleCompletedHandler); // event delegation!
  document.getElementById('root').innerHTML = '';
  document.getElementById('root').appendChild(todosView);

  const lis = document.querySelectorAll('li');
  for (const li of lis){
   const index = li.id;
   if (app.state.todos[index].completed){
     li.classList.add('completed');
   }
  }
  
  logger.push({
    action: 'add todo',
    event,
    userInput,
    state: app.state
  });

  }
  

};