class Input extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.innerHTML = `
      <style>
        :host {
      
        }
        .c-input{
            width: 100%;
            font-family: Arial, sans-serif;
            font-size: 14px;
            margin-bottom: 16px;
            
        }
        .c-input__box{
            /*box-shadow: 1px 1px 6px 3px rgb(185 185 185);*/
            border: 0;
            border-bottom: 1px solid #ccc;
            padding: 4px;
            width: 100%;
            box-sizing: border-box;
            background: transparent;
        }
        .c-input__label{
            margin-bottom: 4px;
            display: block;
            font-size: 14px;
        }
        
      </style>
      <div class="c-input">
        <label class="c-input__label">${this.getAttribute('label')}</label>
        <input class="c-input__box" type="text" data-fill="${this.getAttribute('data-fill')}">
      </div>
    `;
    }
}

window.customElements.define("c-input", Input);
