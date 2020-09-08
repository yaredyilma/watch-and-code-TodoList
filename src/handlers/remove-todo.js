'use strict';

const removeToDoHandler = (event) => {
    debugger;
    // event delegation!
    const target = event.target;
    if (target.nodeName !== 'SPAN' && target.nodeName !== 'I') {
      return;
    }
      
      // update state using app method
      let todoIndex = 0;
      if (target.nodeName === 'SPAN'){
  
        todoIndex = Number(target.parentElement.id);
      }
      else {
         todoIndex = Number(target.parentElement.parentElement.id);
      }
  
      const removedToDo = app.state.todos[todoIndex].text;
      app.removeToDo(todoIndex);
      
      const todosView = renderTodos(app._state.todos);
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
      action: 'remove todo',
      event,
      removedToDo,
      state: app.state
    });
  
  };