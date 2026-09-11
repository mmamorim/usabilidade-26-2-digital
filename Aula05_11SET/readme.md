<img src="/assets/teste.svg" width="100%">

# Aula 5 - 11/09/2026 - Javascript - Funções

![](./assets/javascript.jpeg)

[Texto baseado na documentação do Mozilla](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript)

---

# Funções em Javascript

As funções em JavaScript são blocos de código reutilizáveis que permitem agrupar instruções e executá-las quando necessário. Elas desempenham um papel crucial na criação de código modular, organizado e eficiente. 

Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

# Declaração básica de uma função Javascript

A definição (declaração) da função consiste no uso da palavra chave ```function```, seguida por:

* ```IDENTIFICADOR```: Nome da Função.
* ```ARGUMENTOS``` variáveis que recebem os valores passados na chamada da função. São descritos dentro dos parênteses e separados por vírgulas.
* ```BLOCO_DE_COMANDOS``` sequência de comandos a serem executados. São descritos entre chaves { }.

~~~js
function IDENTIFICADOR(ARGUMENTOS) {
  //BLOCO_DE_COMANDOS
  comando1()
  comando2()
  ...
  comandoN()
} 
~~~

A declaração ```return VALOR```, quando existir, especifica parar a execução do bloco de comandos devolvendo o ```VALOR``` especificado.

~~~js
function fatorial(num) {
  let fat = 1
  for(let i=1; i<=num; i++) {
    fat = fat * i
  }
  return fat
}
~~~

# O que são funções que devolvem objetos?

~~~js
let user = newUser('Ana', 20)
~~~

Isso lembra um método construtor?

# Funções anônimas

Funções também podem ser criadas por uma expressão de função sem indicar um identificador. Essa função é conhecida como uma **'função anônima'**. Neste caso, a função pode ser armazenada em uma variável ou ser passada como parâmetro para outra função.

~~~js
let raizQuadrada = function (numero) {
  return numero * numero;
};
let x = raizQuadrada(4); //x recebe o valor 16
~~~

Passando a função para outra função

~~~js
function raizCubica(f, numero) {
  return f(numero) * numero;
};
let x = raizCubica(raizQuadrada, 3); //x recebe o valor 27
~~~

# Arrow functions 

As **arrow functions** foram introduzidas no ES6 como uma maneira mais curta e simples de escrever funções. Elas eliminam a necessidade da palavra-chave ```function``` e têm uma sintaxe mais enxuta:

~~~js
const raizQuadrada = (numero) => numero * numero;
~~~

ou

~~~js
const fatorial = (num) => {
  let fat = 1
  for(let i=1; i<=num; i++) {
    fat = fat * i
  }
  return fat
}
~~~

# Funções Callback

As funções de **callback** em JavaScript são funções passadas como argumentos para outras funções. Elas são executadas após a conclusão de uma operação, permitindo um fluxo de trabalho assíncrono. Isso é crucial em operações que dependem de tempo, como solicitações de rede ou eventos de usuário.

## Fetch

https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch

> https://geek-jokes.sameerkumar.website/api?format=json

## SetInterval e SetTimeout

* SetInterval: chama uma função a cada período de tempo https://www.w3schools.com/jsref/met_win_setinterval.asp
* SetTimeout: chama uma função uma vez após um período de tempo https://www.w3schools.com/jsref/met_win_settimeout.asp

---

# Persistência de Dados no Navegador com LocalStorage

## 📌 Introdução

Em aplicações web modernas, muitas vezes precisamos armazenar dados no navegador do usuário para manter informações mesmo após o recarregamento da página. Esse tipo de armazenamento é chamado de **persistência de dados no cliente**.

Uma das formas mais simples de fazer isso em JavaScript é utilizando a API **LocalStorage**, que faz parte do objeto `window`.

O LocalStorage permite armazenar dados no formato **chave-valor**, de maneira persistente, ou seja, os dados continuam disponíveis mesmo após fechar o navegador.

---

## 🧠 O que é o LocalStorage?

O **LocalStorage** é um mecanismo de armazenamento local que:

- Armazena dados no navegador
- Não possui data de expiração automática
- Persiste mesmo após fechar a aba ou navegador
- Armazena apenas **strings**

Ele faz parte da API Web Storage e pode ser acessado diretamente em JavaScript.

---

## ⚙️ Estrutura básica

O LocalStorage funciona com pares de chave e valor:

> chave → valor

Exemplo:

> "nome" → "Marcelo"


---

## ✍️ Salvando dados (setItem)

Para armazenar um valor, utilizamos o método `setItem`:

~~~javascript
localStorage.setItem("nome", "Marcelo");
~~~

Neste caso:
- `"nome"` é a chave
- `"Marcelo"` é o valor armazenado

---

## 🔎 Recuperando dados (getItem)

Para recuperar um valor salvo:

~~~javascript
let nome = localStorage.getItem("nome");
console.log(nome);
~~~

Se a chave não existir, o retorno será `null`.

---

## ❌ Removendo dados

### Remover um item específico:
~~~javascript
localStorage.removeItem("nome");
~~~

### Limpar todo o armazenamento:
~~~javascript
localStorage.clear();
~~~

⚠️ Atenção: `clear()` remove **todos os dados** do LocalStorage.

---

## 🔄 Trabalhando com tipos de dados

O LocalStorage armazena **apenas strings**. Portanto, quando precisamos trabalhar com objetos ou arrays, devemos converter os dados.

### 📤 Convertendo para string (JSON.stringify)

~~~javascript
let usuario = {
    nome: "Marcelo",
    idade: 40
};

localStorage.setItem("usuario", JSON.stringify(usuario));
~~~

---

### 📥 Convertendo de volta para objeto (JSON.parse)

~~~javascript
let usuarioRecuperado = JSON.parse(localStorage.getItem("usuario"));

console.log(usuarioRecuperado.nome);
~~~

---

## 💡 Exemplo prático: Salvando nome do usuário

### HTML

~~~html
<input type="text" id="nome">
<button onclick="salvar()">Salvar</button>
<button onclick="carregar()">Carregar</button>

<p id="resultado"></p>
~~~

---

### JavaScript

~~~javascript
function salvar() {
    let nome = document.getElementById("nome").value;
    localStorage.setItem("nome", nome);
}

function carregar() {
    let nome = localStorage.getItem("nome");
    document.getElementById("resultado").innerText = nome;
}
~~~

---

## 🧪 Exemplo prático: Lista de itens

### Objetivo:
Salvar uma lista de produtos no LocalStorage.

~~~javascript
function adicionarProduto() {
    let produto = document.getElementById("produto").value;

    let lista = JSON.parse(localStorage.getItem("produtos")) || [];

    lista.push(produto);

    localStorage.setItem("produtos", JSON.stringify(lista));
}
~~~

---

## 📊 Quando usar LocalStorage?

O LocalStorage é ideal para:

- Preferências do usuário (tema, idioma)
- Carrinho de compras simples
- Dados temporários de interface
- Aplicações pequenas sem backend

---

## ⚠️ Limitações

Apesar de útil, o LocalStorage possui limitações:

- Armazena apenas strings
- Limite de espaço (~5MB por domínio)
- Não é seguro para dados sensíveis
- Não possui suporte a consultas (como banco de dados)

---

## 🔐 Segurança

Nunca armazene:

- Senhas
- Tokens sensíveis
- Dados pessoais críticos

O LocalStorage pode ser acessado via JavaScript e não é protegido contra ataques como XSS.

---

## 🧩 Comparação rápida

| Recurso        | LocalStorage | SessionStorage |
|----------------|------------|---------------|
| Persistência   | Permanente | Até fechar aba |
| Capacidade     | ~5MB       | ~5MB          |
| Escopo         | Domínio    | Aba           |

---

