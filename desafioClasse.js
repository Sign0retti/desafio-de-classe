class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    } 

    atacar(){

    let ataque;
        switch(this.tipo){
            case "mago":
            ataque = "magia";
            break;
        case "guerreiro":
            ataque = "espada";
            break;
        case "monge":
            ataque = "artes marciais";
            break;
        case "ninja":
            ataque = "shuriken";
            break;
        default:
            ataque = "um ataque desconhecido";

        }

            console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }

}

// Exemplo de uso da classe
const heroi1 = new heroi("Gabriel", 22, "ninja");
heroi1.atacar();