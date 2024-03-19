export class NavBarView {
    private elemento: HTMLElement | null = null;
    private listaLinks: LinkNavBar[] = [
        {
            id: 'search',
            icon: 'fas fa-search',
            texto: 'Pesquisar',
            path: '/search'
        },
        {
            id: 'tormenta20',
            icon: 'fa-brands fa-fort-awesome',
            texto: 'Tormenta 20',
            path: '/post?tag=tormenta20'
        },
        {
            id: 'jogadores',
            icon: 'fas fa-user',
            texto: 'Jogadores',
            path: '/player'
        },
        {
            id: 'npcs',
            icon: 'fas fa-users-line',
            texto: 'Não Jogadores (NPCs)',
            path: '/npc'
        },
        {
            id: 'monster',
            icon: 'fas fa-hand-fist',
            texto: 'Ameaças',
            path: '/monster'
        },
        {
            id: 'monster',
            icon: 'fas fa-book-open',
            texto: 'Historia',
            path: '/history'
        },
        {
            id: 'copnfig',
            icon: 'fas fa-gear',
            texto: 'Config.',
            path: '/copnfiguration'
        }

    ];

    constructor(){
        this.elemento = document.querySelector('app-nav-bar');
        this.update();
    }

    template(): string {

        return `
            <nav id="main-nav-bar" class="d-flex flex-column justify-content-center align-items-center pt-3">
                ${ this.listaLinks.map(link => `
                    <ul class="p-0 m-0 mb-1 ${link.id == "search" ? 'search-button' : ''}">
                        <button onclick="window.location.href='${link.path}'">
                            <span>
                                <i class="${link.icon}" id="${link.id}"></i>
                            </span>
                            <br>
                            <label for="${link.id}">${link.texto}</label>
                        </button> 
                    </ul>`
                ).join('') }
            </nav>
        `;
    }

    update(): void {
        if (this.elemento) {
            const template = this.template();
            this.elemento.innerHTML = template;
        }
    }
}