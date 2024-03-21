export interface Jogadores{
    id: number;
    nomePersonagem: string;
    nomeJogador: string;
    nivel: number;
    raca: string;
    classe: string;
    origem: string;
    divindade: string;
    atributos: Atributo
    pericias: Array<Pericia>;
    PVMax: number;
    PVAtual: number;
    PMMax: number;
    PMAtual: number;
    ataques: Array<Ataque>;
    defesa: Defesa;
    proficiencia: Array<string>;
    habilidadesMagias: Array<HabilidadeMagia>;
    equipamentos: Array<Item>;
    descricao: string;
    anotações: string;
    historias: Array<Historias>;
}

export interface Pericia {
    nome: string;
    total: number;
    atributo: Atributos;
    metadeNivel: number;
    treino: number;
    outros: number;
    treinada: boolean;
    penalidadeArmadura: boolean;
}

export enum Pericias {
    acrobacia = "Acrobacia",
    adestramento = "Adestramento",
    atletismo = "Atletismo",
    atuacao = "Atuação",
    cavalgar = "Cavalgar",
    conhecimento = "Conhecimento",
    cura = "Cura",
    diplomacia = "Diplomacia",
    enganacao = "Enganação",
    fortitude = "Fortitude",
    furtividade = "Furtividade",
    guerra = "Guerra",
    iniciativa = "Iniciativa",
    intimidacao = "Intimidação",
    intuicao = "Intuição",
    investigacao = "Investigação",
    jogatina = "Jogatina",
    ladinagem = "Ladinagem",
    luta = "Luta",
    misticismo = "Misticismo",
    nobreza = "Nobreza",
    percepcao = "Percepção",
    pilotagem = "Pilotagem",
    pontaria = "Pontaria",
    reflexao = "Reflexão",
    religiao = "Religião",
    sobrevida = "Sobrevivência",
    vontade = "Vontade",
    oficioAlfaiate = "Ofício (Alfaiate)",
    oficioAlquimia = "Ofício (Alquimia)",
    oficioArmeiro = "Ofício (Armeiro)",
    oficioArtesanato = "Ofício (Artesanato)",
    oficioCulinaria = "Ofício (Culinária)",
    oficioEscriba = "Ofício (Escriba)",
    oficiofazedeiro = "Ofício (Fazendeiro)",
    oficioMinerador = "Ofício (Minerador)",
    oficioOutros = "Ofício (Outros)"
}

export interface Atributo {
    forca: number;
    destreza: number;
    constituicao: number;
    inteligencia: number;
    sabedoria: number;
    carisma: number;
}

export enum Atributos {
    forca = "FOR",
    destreza = "DES",
    constituicao = "CON",
    inteligencia = "INT",
    sabedoria = "SAB",
    carisma = "CAR"
}

export interface Ataque {
    nome: string;
    teste: string;
    dano: string;
    critico: string;
    tipo: string;
    alcance: number;
    observacao: string;
}

export interface Defesa {
    CA: number;
    destreza : number;
    armadura: ItemDefesa;
    escudo: ItemDefesa;
    outros: number;
}

export interface ItemDefesa {
    nome: string;
    defesa: number;
    penalidade: number;
}

export interface HabilidadeMagia {
    nome: string;
    descricao: string;
    nivel: number;
    escola?: string;
    tempoConjuracao?: string;
    alcance?: string;
    alvo: string;
    duracao: string;
    resistencia?: string;
    observacao: string;
}

export interface Item {
    nome: string;
    descricao: string;
    preco: number;
    peso: number;
    observacao: string;
    tipo: string;
}

export interface Historias {
    titulo: string;
    data: string;
    seção: string;
    aventura: string;
    descricao: string;
    observacao: string;
}