export class Produto{
    id: number = 0;
    tipo: string = "";
    descricao: string = "";
    imagem: string = "";
    valor: number = 0;

    constructor(id: number, descricao: string, imagem:string, tipo: string, valor: number){
        this.id = id;
        this.descricao = descricao;
        this.imagem = imagem;
        this.tipo =tipo;
        this.valor = valor;
    }
} 
