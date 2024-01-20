class Input extends HTMLElement {
    constructor() {
        super();
    }


    handleEvent(event) {
        if (event.type === "click") {
            FileMaker.PerformScript(event.target.getAttribute("data-funcion-fm"), event.target.getAttribute("data-parametros-funcion"));

        }
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: "open"});
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
            pointer-events: none;
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
        this.label = this.shadowRoot.querySelector("label");
        // if (this.label.getAttribute("data-funcion-fm"))
        this.label.addEventListener("click", this)
    }
}

window.customElements.define("c-input", Input);
