class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'mago':
                ataque = 'magia';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
        }
        console.log(this.tipo + " atacou usando " + ataque);
    }
}

let heroi = new Heroi('mario', 25, 'guerreiro');

heroi.atacar();

