import { DOMInjector } from "../decorator/DOMInjector.js";

export class PesquisaView {
    
    @DOMInjector('app-principal')
    private elemento: HTMLElement;

    constructor(){
        this.update();
    }

    template(): string {

        return `
            <p> pesquisa </p>
        `;
    }

    update(): void {
        if (this.elemento) {
            const template = this.template();
            this.elemento.innerHTML = template;
        }
    }
}