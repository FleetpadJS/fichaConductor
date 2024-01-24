class Input extends HTMLElement {
    constructor() {
        super();
    }


    handleEvent(event) {
        if (event.type === "click") {
            try {
                const funcionFM = event.target.getAttribute("data-funcion-fm");

                if (funcionFM && funcionFM.trim() !== "") {
                    const parametrosFuncion = event.target.getAttribute("data-parametros-funcion") || "";
                    FileMaker.PerformScript(funcionFM, parametrosFuncion);
                } else {
                    console.error("El valor de 'data-funcion-fm' es vacío o nulo.");
                }
            } catch (error) {
                console.error("Error al ejecutar FileMaker.PerformScript:", error);
            }
        }
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
            background-color: white;      
            display: block;
            box-shadow: 1px 1px 6px 3px rgb(185 185 185);
            border: 0;
            border-bottom: 1px solid #ccc;
            padding: 2px 5px 2px 5px;
            width: 100%;
            height: 20px;
            font-size: 0.9em;
            box-sizing: border-box;
            cursor: text; // Cambia el cursor a uno por defecto 
        }
        .c-input__label{
            margin-bottom: 4px;
            display: block;
            font-size: 14px;
            cursor: pointer;
        }
        
      </style>
      <div class="c-input">
        <label class="c-input__label">${this.getAttribute('label')}</label>
        <!-- <input class="c-input__box" type="readonly" data-fill="${this.getAttribute('data-fill')}"> -->
        <span class="c-input__box" data-fill="${this.getAttribute('data-fill')}"></span>

      </div>
    `;
        this.label = this.shadowRoot.querySelector("label");
        // if (this.label.getAttribute("data-funcion-fm"))
        this.label.addEventListener("click", this)
    }
}

window.customElements.define("c-input", Input);
