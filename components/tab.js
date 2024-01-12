class Tab extends HTMLElement {
    static observedAttributes = ["selected-index"];
    #selectedIndex = 0;

    constructor() {
        super();
        this.bind(this);
    }

    bind(element) {
        element.render = element.render.bind(element);
        element.attachEvents = element.attachEvents.bind(element);
        element.cacheDom = element.cacheDom.bind(element);
        element.onTabClick = element.onTabClick.bind(element);
        element.selectTabByIndex = element.selectTabByIndex.bind(element);
        element.onContentSlotChange = element.onContentSlotChange.bind(element);
        element.onTabSlotChange = element.onTabSlotChange.bind(element);
    }

    connectedCallback() {

        this.render();
        this.cacheDom();
        this.attachEvents();
        this.dom.tabs[this.#selectedIndex]?.classList.add("selected");
        this.dom.contents[this.#selectedIndex]?.classList.add("selected");

    }

    render() {
        this.shadow = this.attachShadow({mode: "open"});
        this.shadow.innerHTML = `
                <style>
                    :host { display: flex; flex-direction: column; }
                    .tabs { display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0;border: 1px solid #ccc;  }
                    
                    .tabs ::slotted(*) { padding: 10px; user-select: none; cursor: pointer; }
                    .tabs ::slotted(.selected) { background: #cacaca; }
                    .tab-contents  {border: 1px solid #ccc;; border-top: 0; padding-top:16px; }
                    .tab-contents ::slotted(*) {display: none;padding:10px;border: 1px solid; border-top: 0}
                    .tab-contents ::slotted(.selected) { display: block;  }
                    .c-tab{
                        background-color: #efefef;
                    }
                </style>
                <div class="c-tab">
                    <div class="tabs">
                        <slot id="tab-slot" name="tab"></slot>
                    </div>
                    <div class="tab-contents">
                        <slot id="content-slot" name="content"></slot>
                    </div>
                </div>
            `;


    }

    cacheDom() {
        this.dom = {
            tabSlot: this.shadow.querySelector("#tab-slot"),
            contentSlot: this.shadow.querySelector("#content-slot")
        };
        this.dom.tabs = this.dom.tabSlot.assignedElements();
        this.dom.contents = this.dom.contentSlot.assignedElements();

    }

    attachEvents() {
        this.dom.tabSlot.addEventListener("click", this.onTabClick);
        this.dom.tabSlot.addEventListener("slotchange", this.onTabSlotChange);
        this.dom.contentSlot.addEventListener("slotchange", this.onContentSlotChange);
    }

    onTabSlotChange() {
        this.dom.tabs = this.dom.tabSlot.assignedElements();
    }

    onContentSlotChange() {
        this.dom.contents = this.dom.contentSlot.assignedElements();
    }

    onTabClick(e) {
        const target = e.target;
        if (target.slot === "tab") {
            const tabIndex = this.dom.tabs.indexOf(target);
            this.selectTabByIndex(tabIndex);
        }
    }

    selectTabByIndex(index) {
        const tab = this.dom.tabs[index];
        const content = this.dom.contents[index];
        if (!tab || !content) return;
        this.dom.contents.forEach(p => p.classList.remove("selected"));
        this.dom.tabs.forEach(p => p.classList.remove("selected"));
        content.classList.add("selected");
        tab.classList.add("selected");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            if (name === "selected-index") {
                this.#selectedIndex = newValue;
            } else {
                this[name] = newValue;
            }
        }
    }

    set selectedIndex(value) {
        this.#selectedIndex = value;
    }

    get selectedIndex() {
        return this.#selectedIndex;
    }


}

customElements.define("c-tab", Tab);
