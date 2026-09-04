<img src="/assets/teste.svg" width="100%">

# Aula 4 - 04/09/2026 - Javascript - O Retorno!

![](./assets/javascript.jpeg)

[Texto baseado na documentação do Mozilla](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript)


# Laços de repetição 

Os **laços de repetição** (loops) são estruturas que permitem executar um bloco de código várias vezes, evitando repetição manual de instruções.

Em javascript, duas das estruturas mais utilizadas são:

- `while`
- `for`

---

## Estrutura `while`

O `while` é utilizado quando a repetição depende de uma **condição**, e geralmente não sabemos exatamente quantas vezes o laço será executado.

Sua estrutura é:

~~~javascript
while (condicao) {
    // código a ser repetido
}
~~~

O bloco de código será executado **enquanto a condição for verdadeira**.

### Exemplo

~~~javascript
let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}
~~~

O `while` é mais indicado quando:
- a repetição depende de uma condição
- não há uma contagem fixa definida previamente

---

## Estrutura `for`

O `for` é utilizado quando sabemos exatamente **quantas vezes o laço deve se repetir**, sendo muito comum em contagens.

Sua estrutura é:

~~~javascript
for (inicializacao; condicao; incremento) {
    // código a ser repetido
}
~~~

### Exemplo

~~~javascript
for (int i = 1; i <= 5; i++) {
    console.log(i);
}
~~~

O `for` é mais indicado quando:
- há uma contagem definida
- queremos controlar início, fim e incremento em um único lugar

---

## Resumo

- `while` → usado para **repetições baseadas em condição (sem contagem definida)**  
- `for` → usado para **repetições com contagem definida**

Ambos podem resolver problemas semelhantes, mas escolher a estrutura correta torna o código mais claro e organizado.


# Vetores (Arrays)

Um **array** (ou vetor) em JavaScript é uma estrutura de dados de lista ordenada e indexada a partir de zero. Ele é utilizado para armazenar múltiplos valores em uma única variável de forma dinâmica.

---

## 1. Declaração e Sintaxe

Os arrays são criados utilizando colchetes `[]`, com os elementos separados por vírgulas. Eles podem armazenar diferentes tipos de dados simultaneamente (números, strings, booleanos, objetos, etc.).

```javascript
// Exemplo de array misto
const meuArray = [42, "Olá, Mundo", true, { nome: "Ana" }];

// Array vazio
const carrinho = [];
```

---

## 2. Acesso aos Elementos (Índices)

A contagem das posições (índices) em um array sempre começa em **`0`**.

```javascript
const frutas = ["Maçã", "Banana", "Uva"];

console.log(frutas); // Saída: "Maçã"
console.log(frutas); // Saída: "Banana"

// Descobrir o tamanho total do array
console.log(frutas.length); // Saída: 3
```

---

## 3. Principais Métodos de Manipulação

### Adicionar e Remover Elementos

| Método | Ação | Exemplo |
| :--- | :--- | :--- |
| `.push(item)` | Adiciona um ou mais itens ao **final** | `frutas.push("Laranja");` |
| `.pop()` | Remove o **último** item do array | `frutas.pop();` |
| `.unshift(item)` | Adiciona um ou mais itens ao **início** | `frutas.unshift("Morango");` |
| `.shift()` | Remove o **primeiro** item do array | `frutas.shift();` |

---

## 4. Iteração (Percorrendo o Array)

Formas comuns de passar por todos os elementos de um array:

### Usando `forEach`
```javascript
const numeros = [1, 2, 3];

numeros.forEach(function(numero) {
    console.log(numero * 2);
});
```

### Usando `for...of`
```javascript
for (let fruta of frutas) {
    console.log(fruta);
}
```

---

# Objetos em Javascript

Em JavaScript, um objeto é uma coleção dinâmica de propriedades, onde cada propriedade é uma associação entre um nome (ou chave) e um valor. Esse valor pode ser uma simples string, um número, um booleano, ou mesmo outra estrutura complexa como um array ou um outro objeto, permitindo a criação de estruturas de dados aninhadas e complexas.

A forma mais direta de definir um objeto é utilizando chaves ```{}``` para delinear o objeto e seus atributos descritos como ```nome_atributo: valor``` separados por vírgula ```,```

~~~js
let pessoa = {
    nome: "Maria",
    idade: 28
};

console.log(pessoa.nome) // imprime 'Maria'
~~~

~~~js
let pessoa = {
    nome: "Maria",
    idade: 28,
    endereco: {
        rua: "Rua dos Alfaces",
        numero: 123,
        cidade: "São Paulo"
    }
};

console.log(pessoa.endereco.cidade) // imprime 'São Paulo'
~~~