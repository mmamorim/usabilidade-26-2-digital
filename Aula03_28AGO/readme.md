<img src="/assets/teste.svg" width="100%">

# Aula 3 - 28/08/2026 - Intro Javascript

![](./assets/javascript.jpeg)

[Texto baseado na documentação do Mozilla](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript)


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