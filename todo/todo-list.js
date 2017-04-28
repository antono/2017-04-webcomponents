class TodoList extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }
  
  render() {
    const template = `
      <div class='todo-list'>
        <div class='todo-items'>
          <h1> Todo </h1>
          <slot name='todo'> no todo items </slot>
        </div>
        <div class='done-items'>
          <h1> Done </h1>
          <slot name='done'> no items done </slot>
        </div>
      </div>
    `;
    
    this.shadow.innerHTML = template;
  }
}

customElements.define('todo-list', TodoList);
