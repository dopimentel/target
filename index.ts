// 1)
function calcularSoma(): void {
    const INDICE: number = 12;
    let SOMA: number = 0;
    let K: number = 1;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }

    console.log("O valor final de SOMA é:", SOMA);
}

calcularSoma();
// O valor final de SOMA é: 77



// 2) Completar a sequência lógica

// a) 1, 3, 5, 7, 9
// (Números ímpares)

// b) 2, 4, 8, 16, 32, 64, 128
// (Potências de 2)

// c) 0, 1, 4, 9, 16, 25, 36, 49
// (Quadrados perfeitos)

// d) 4, 16, 36, 64, 100
// (n ao quadrado com n par)

// e) 1, 1, 2, 3, 5, 8, 13
// (Sequência de Fibonacci)

// f) 2, 10, 12, 16, 17, 18, 19, 20
// (dois múltiplos e um não múltiplos de 3)


// 3)

type Revenue = {
    value: number;
    day: Date;
};

class DistributorRevenue {
    private revenues: Revenue[];

    constructor(revenues: Revenue[]) {
        this.revenues = revenues;
    }

    private filterDaysWithRevenue(): Revenue[] {
        return this.revenues.filter(r => r.value > 0);
    }

    public getSmallestValue(): number {
        const daysWithRevenue = this.filterDaysWithRevenue();
        return Math.min(...daysWithRevenue.map(r => r.value));
    }

    public getLargestValue(): number {
        return Math.max(...this.revenues.map(r => r.value));
    }

    public calculateAverageRevenue(): number {
        const daysWithRevenue = this.filterDaysWithRevenue();
        return daysWithRevenue.reduce((acc, r) => acc + r.value, 0) / daysWithRevenue.length;
    }

    public countDaysAboveAverage(): number {
        const averageRevenue = this.calculateAverageRevenue();
        return this.revenues.filter(r => r.value > averageRevenue).length;
    }
}

// Example revenue array
const revenues: Revenue[] = [
    { value: 0, day: new Date('2023-01-01') }, // holiday
    { value: 100, day: new Date('2023-01-02') },
    { value: 200, day: new Date('2023-01-03') },
    { value: 150, day: new Date('2023-01-04') },
    { value: 230, day: new Date('2023-01-05') },
    { value: 140, day: new Date('2023-01-06') },
    { value: 0, day: new Date('2023-01-07') }, // Saturday
];

// Instantiate the class and calculate the values
const distributor = new DistributorRevenue(revenues);

console.log('Smallest revenue value:', distributor.getSmallestValue());
console.log('Largest revenue value:', distributor.getLargestValue());
console.log('Days above average revenue:', distributor.countDaysAboveAverage());


// 4) Banco de dados 

// Uma empresa solicitou a você um aplicativo para manutenção de um cadastro de clientes. Após a reunião de definição dos requisitos, as conclusões foram as seguintes: 

// - Um cliente pode ter um número ilimitado de telefones; 
// - Cada telefone de cliente tem um tipo, por exemplo: comercial, residencial, celular, etc. O sistema deve permitir cadastrar novos tipos de telefone; 
// - A princípio, é necessário saber apenas em qual estado brasileiro cada cliente se encontra. O sistema deve permitir cadastrar novos estados;  

// Você ficou responsável pela parte da estrutura de banco de dados que será usada pelo aplicativo. Assim sendo: 
 
// - Proponha um modelo lógico para o banco de dados que vai atender a aplicação. Desenhe as tabelas necessárias, os campos de cada uma e marque com setas os relacionamentos existentes entre as tabelas;  
// - Aponte os campos que são chave primária (PK) e chave estrangeira (FK); 
// - Faça uma busca utilizando comando SQL que traga o código, a razão social e o(s) telefone(s) de todos os clientes do estado de São Paulo (código “SP”); 


// Resposta: aquivo "database.sql" e ERD no arquivo "ERD.png" na raiz do projeto


// run: 
// npm i 
// npx ts-node index.ts


// 5) Estarão na mesma distância. Quando eles se cruzarem, a distância percorrida em relação ao referencial (Ribeirão Preto) será a mesma.