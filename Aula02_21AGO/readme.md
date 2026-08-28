<img src="/assets/teste.svg" width="100%">

# Aula 2 - 21/08/2026 - Intro Javascript

![](./assets/javascript.jpeg)

[Texto baseado na documentação do Mozilla](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript)

JavaScript® (às vezes abreviado para JS) é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web, mas usada também em vários outros ambientes sem browser, como o node.js. O JavaScript é uma linguagem baseada em protótipos, multi-paradigma e dinâmica, suportando estilos de orientação a objetos, imperativos e declarativos (como por exemplo a programação funcional). 

O padrão JavaScript é ECMAScript. Desde 2012, todos os navegadores modernos possuem suporte total ao ECMAScript 5.1. Navegadores mais antigos suportam pelo menos ECMAScript 3. Em 17 de Junho de 2015, a ECMA International publicou a sexta versão do ECMAScript, que é oficialmente chamado de ECMAScript 2015, e foi inicialmente conhecido como ECMAScript 6 ou ES6. Desde então, as especificações do ECMAScript são lançadas anualmente. A última versão de referência, é atualmente a ECMAScript 2018.

# ANtes de começar:

> ESTUDAR OPERADORES ARITMÉTICOS
> 
> ESTUDAR O OPERADOR DE RESTO DA DIVISÃO - MOD

---

# Variáveis

**Variáveis** são contêineres que armazenam valores. Você começa declarando uma variável com a palavra-chave ```let```, seguida do nome que você dá à variável:

~~~js
let myVariable;
~~~

## Regras para identificadores

* Sempre começar com letras [a..zA..Z]
* Apenas usar letras [a..zA..Z], números [0..9], underscore _
* Não usar ```palavras reservadas```
* JavaScript diferencia maiúsculas de minúsculas

## Tipos de dados

| Tipo   |      Explicação      |
|----------|:-------------:|
| String |  Sequência de caracteres conhecida como string. Dese estar entre aspas simples, aspas duplas ou tick. |
| Number |    Representa Números (inteiros ou reais)   |
| Boolean | Representa um valor Verdadeiro/Falso. As palavras ```true``` e ```false``` são palavras reservadas |
| Array | Esta é uma estrutura que representa um vetor |
| Object | Representa um Objeto |

---

# Entrada de Dados em JavaScript

Agora que já entendemos o conceito de **variáveis**, vamos dar o próximo passo: aprender como **receber dados do usuário** em JavaScript. Essa é uma etapa essencial, pois praticamente todo sistema precisa interagir com o usuário.

Nesta aula, veremos duas formas principais de entrada de dados:
- Usando `prompt()` (forma simples e rápida)
- Usando elementos HTML (forma utilizada em aplicações reais)

---

## Entrada de dados com `prompt()`

O `prompt()` é uma função do JavaScript que exibe uma caixa de diálogo no navegador, permitindo que o usuário digite alguma informação.

~~~javascript
let nome = prompt("Digite seu nome:");
console.log(nome);
~~~

Nesse exemplo, uma caixa será exibida com a mensagem solicitando o nome. O valor digitado será armazenado na variável nome e depois exibido no console.

⚠️ Importante: o valor retornado pelo prompt() sempre será uma string (texto), mesmo que o usuário digite números.

---

### Conversão de Tipos

Como o prompt() sempre retorna texto, muitas vezes precisamos converter esse valor para número, principalmente quando queremos realizar cálculos.

Para isso, utilizamos funções de conversão:

#### parseInt() → número inteiro

~~~javascript
let idade = parseInt(prompt("Digite sua idade:"));
console.log(idade);
~~~

Essa função converte o valor para um número inteiro (sem casas decimais).

#### parseFloat() → número decimal

~~~javascript
let altura = parseFloat(prompt("Digite sua altura:"));
console.log(altura);
~~~

Essa função converte o valor para um número com casas decimais.

⚠️ Atenção: se o valor digitado não for numérico, o JavaScript retorna NaN (Not a Number). Mais adiante veremos como validar essas entradas.

