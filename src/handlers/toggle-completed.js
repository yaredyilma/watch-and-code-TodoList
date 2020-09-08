'use strict';

const toggleCompletedHandler = (event) => {
  debugger;
  // event delegation!
  const target = event.target;
  if (target.nodeName !== 'LI') {
    return;
  }
  
  // update state using app method
  const todoIndex = Number(target.id);
  app.toggleCompleted(todoIndex);
  const toggledToDo = app.state.todos[todoIndex];
  target.classList.toggle('completed')
  logger.push({
    action: 'toggle todo',
    event,
    todoIndex,
    toggledToDo,
    state: app.state
  });

};
