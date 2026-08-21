<img src="/assets/teste.svg" width="100%">

# Aula 6 - 26/03/2026 - Intro Javascript

![](./assets/javascript.jpeg)

[Texto baseado na documentação do Mozilla](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript)

JavaScript® (às vezes abreviado para JS) é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web, mas usada também em vários outros ambientes sem browser, como o node.js. O JavaScript é uma linguagem baseada em protótipos, multi-paradigma e dinâmica, suportando estilos de orientação a objetos, imperativos e declarativos (como por exemplo a programação funcional). 

O padrão JavaScript é ECMAScript. Desde 2012, todos os navegadores modernos possuem suporte total ao ECMAScript 5.1. Navegadores mais antigos suportam pelo menos ECMAScript 3. Em 17 de Junho de 2015, a ECMA International publicou a sexta versão do ECMAScript, que é oficialmente chamado de ECMAScript 2015, e foi inicialmente conhecido como ECMAScript 6 ou ES6. Desde então, as especificações do ECMAScript são lançadas anualmente. A última versão de referência, é atualmente a ECMAScript 2018.

# ANtes de começar:

> ESTUDAR OPERADORES ARITMÉTICOS
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

--- 

### Entrada de dados com HTML

Em aplicações reais, não utilizamos prompt(). Em vez disso, usamos elementos da página HTML, como campos de entrada (input).

Exemplo:

<input type="text" id="nome">
<button onclick="capturar()">Enviar</button>

~~~html
<input type="text" id="nome">
<button onclick="capturar()">Enviar</button>
~~~

Nesse exemplo, temos uma caixa de texto e um botão que executa uma função JavaScript.

### Mapeando elementos com id

O atributo id serve para identificar um elemento de forma única dentro da página.

~~~html
<input type="text" id="idade">
~~~

Aqui, o elemento possui o identificador "idade". Esse identificador será utilizado no JavaScript para acessar o elemento.


### Capturando valores com document.getElementById

Para acessar um elemento HTML no JavaScript, utilizamos:

~~~js
document.getElementById("idDoElemento")
~~~

Exemplo prático:

~~~js
function capturar() {
    let nome = document.getElementById("nome").value;
    console.log(nome);
}
~~~

Nesse caso:

`document.getElementById("nome")` localiza o elemento 
`.value` captura o valor digitado pelo usuário

O valor é armazenado na variável `nome`


### Convertendo valores de inputs

Assim como no prompt(), os valores capturados dos inputs também são strings. Portanto, se quisermos trabalhar com números, precisamos converter.

~~~js
function calcular() {
    let idade = parseInt(document.getElementById("idade").value);
    console.log(idade);
}
~~~

--- 

## Exibindo dados na página

Até agora vimos como **capturar dados do usuário**. Agora vamos aprender o caminho inverso: **como exibir dados na tela usando JavaScript**.

---

### Exibindo dados em caixas de texto (`.value`)

Quando queremos alterar o conteúdo de um campo de entrada (`input`), utilizamos a propriedade `.value`.

~~~html
<input type="text" id="nome">
<button onclick="preencher()">Preencher</button>
~~~

✔ Nesse caso:

Localizamos o input pelo id
Atribuímos um valor usando .value
O texto aparece dentro da caixa de texto

👉 Use .value sempre que estiver trabalhando com inputs, textareas ou campos de formulário


### Exibindo dados em elementos HTML (.innerText)

Quando queremos exibir informações em elementos como <p>, <div>, <span>, usamos .innerText.

~~~html
<p id="mensagem"></p>
<button onclick="mostrar()">Mostrar mensagem</button>
~~~

~~~js
function mostrar() {
    document.getElementById("mensagem").innerText = "Olá, mundo!";
}
~~~

✔ Nesse caso:

O conteúdo do elemento é substituído pelo texto informado
O texto aparece diretamente na página

Use .innerText para exibir textos em elementos HTML comuns

### Diferença entre .value e .innerText
.value → usado para campos de entrada (input)
.innerText → usado para elementos de exibição (p, div, span, etc.)

### Dica

Uma prática comum é:

> Capturar um valor de um input (.value)
> Processar esse valor
> Exibir o resultado em um elemento usando .innerText

Isso permite criar interfaces interativas simples.

---

## Resumo Entrada e Saída
prompt() → forma simples de entrada de dados (retorna string)
parseInt() → converte para número inteiro
parseFloat() → converte para número decimal
id → identifica elementos HTML
document.getElementById() → acessa elementos da página
.value → obtém o valor digitado pelo usuário

---

# Desvios Condicionais

antes...Como representar expressões lógicas?

## Operadores Relacionais

Os operadores **relacionais** na linguagem Javascript adotados são:

| Operador | Descrição |
| -- | -- |
| > | maior |
| >= | maior ou igual |
| > | menor |
| <= | menor ou igual |
| == | igualdade |
| != | diferente |
</p>


Os operadores **lógicos** na linguagem Javascript adotados são:

| Operador | Descrição |
| -- | -- |
| && | conjunção (E) |
| \|\| | disjunção (OU) |
| ! | negação (NÃO) |

Exemplos dos **operadores / expressões lógicas** na vida real:

#### E (Conjunção): &&

> Se amanha tiver: **```SOL```** **E** **```CHUVA```** então **```SaioDeCasa```**

> ```SOL = true```  ```CHUVA = true``` 
> Vou sair de casa? **```SaioDeCasa``` = ???**

> ```SOL = false```  ```CHUVA = true``` 
> Vou sair de casa? **```SaioDeCasa``` = ???**

> ```SOL = false```  ```CHUVA = false``` 
> Vou sair de casa? **```SaioDeCasa``` = ???**

#### OU (Disjunção): ||

> Se amanha tiver: **```SOL```** **OU** **```CHUVA```** então **```SaioDeCasa```** **```SaioDeCasa``` = ???**

> ```SOL = true```  ```CHUVA = true``` 
> Vou sair de casa? **```SaioDeCasa``` = ???**

> ```SOL = false```  ```CHUVA = true``` 
> Vou sair de casa? **```SaioDeCasa``` = ???**

> ```SOL = false```  ```CHUVA = false``` 
> Vou sair de casa? **```SaioDeCasa``` = ???**


#### Tabela verdade Conjunção (E) &&:

| V2| V1 | V1 && V2 |
| -- | -- | -- |
| false | false | false |
| true | false | false |
| false | true | false |
| true | true | true |

#### Tabela verdade Disjunção (OU) ||:

| V2| V1 | V1 \|\| V2 |
| -- | -- | -- |
| false | false | false |
| true | false | true |
| false | true | true |
| true | true | true |


### Estrutura if..else

<p align="justify">

A Linguagem Javascript, como qualquer outra linguagem de programação, suporta desvios condicionais utilizando a estrutura **`if`..`else`**. Quando temos mais de um comando a ser executado para um determinada condição, devemos agrupar estes comandos em um bloco delimitado por chaves, conforme indicado no Exemplo abaixo.
</p>

> caso 1
~~~java
if( /*CONDIÇÃO*/ ) 
   comando1();
~~~


> caso 2
~~~java
if( /*CONDIÇÃO*/ ) {
   comando1();
   comando2();
   // ...
} 
~~~

> caso 3
~~~java
if( /*CONDIÇÃO*/ ) 
  comando1();
else
  comando2();
~~~

> caso 4
~~~java
if( /*CONDIÇÃO*/ ) {
  comando1();
  comando2();
   // ...
} else
  comando3();
~~~

> caso 5
~~~java
if( /*CONDIÇÃO*/ ) 
  comando1();
else {
  comando2();
  comando3();
   // ...
}
~~~

> caso 6
~~~java
if( /*CONDIÇÃO*/ ) {
  comando1();
  comando2();
   // ...
} else {
  comando3();
  comando4();
   // ...
}
~~~