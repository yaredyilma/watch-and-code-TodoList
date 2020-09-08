'use strict';

const showInputToDoHandler = (event) => {
  debugger;
  // event delegation!
  const target = event.target;
  if (target.nodeName !== 'I') {
    return;
  }
  const inputEl = document.getElementById('todo-input');
  inputEl.classList.toggle('show');
  inputEl.value = '';
    inputEl.focus();
  logger.push({
    action: 'show input todo',
    event,
    state: app.state
  });

};