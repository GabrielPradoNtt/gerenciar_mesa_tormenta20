export class TiposFichasView {
    private elemento: HTMLElement | null = null;

    constructor(seletor:string){
        this.elemento = document.querySelector(seletor);
        this.update();
    }

    template(): string {
        return `
            <h1>Tipos de Fichas</h1>
            <p>Lista de tipos de fichas</p>
            <ul>Ficha Jogadores</ul>
            <ul>Ficha personagens</ul>
            <ul>Ficha Ameaças</ul>
        `
    }

    update(): void {
        if(this.elemento){
            this.elemento.innerHTML = this.template();
        }
    }       
}