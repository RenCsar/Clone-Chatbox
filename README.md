<h1 align="center">Clone Chatbot</h1>

<p align="center">Clone do layout do chatbot da TakeBlip.</p>

<p align="center">
 <a href="#Descrição">Descrição</a> •
 <a href="#Tecnologias">Tecnologias utilizadas</a> •
 <a href="#autor">Autor</a>
</p>

---

<br>

<p align="center">Chatbot da TakeBlip <b><i>à esquerda</i></b> e clone <b><i>à direita</i></b>.</p>
 
 <h1 align="center">  
  <p align="center">
  <img width="700" height="400" src="Assents/Clone-chat.gif"><br><br>
</p>

</h1>

<a id="Descrição"></a>
### Descrição

A fim de por em prática meus estudos de frontend, decidi clonar o layout do chat box da [Take Blip](https://www.take.net/).
Gostaria de destacar que apenas o layout foi clonado, **não há interação e nem troca de mensagens**.

Ao longo dessa tarefa pude exercitar, relembrar e aprender coisas como: `box model`, `containers` e `Flexbox`, também importei fonte do google fonts, fiz um pequeno `reset` em algumas propriedades do CSS e usei `variáveis` CSS para facilitar a alteração de cores.

Para conseguir as informações sobre os estilos aplicados no chatbot e me aproximar o máximo possível do layout original utilizei o inspecionar elementos do navegador. Porém, alguns estilos como as animações para abrir e fechar o chat tive que buscar na internet.

No que tange ao funcionamento nos restringimos apenas às ações de abrir e fechar o chat e a mudança de botão caso algo seja digitado no `input` de texto.

A princípio o chat fica oculto através da propriedade `display: none`, e quando clicamos no balão ocorrem duas ações: primeiro o desenho do botão muda de balão para um “x” ao mesmo tempo que acrescentamos uma classe que habilita o display e torna o chat visível. No JS utilizamos o `addEventListener` para detectar o evento “click” e executar as `Arrow Function` assim que o evento ocorrer.

De forma semelhante o botão de enviar, que é alterado assim que escrevemos alguma coisa, também funciona com `addEventListener` e adiciona uma classe com `display: none`. A diferença é que fazemos uma verificação (`if` e `else`) para saber se algo foi digitado no input de texto.

Pendências do projeto:

- Responsividade;
- Tornar o CSS menos verboso;
- Melhorar os nomes de classes e id’s;
- Tentar usar um pre-processador CSS para torná-lo menos verboso;
- Reaproveitar classes;
- Consertar o box-shadow da parte inferior do container do chat.


Caso tenha alguma dica ou conselho, fique à vontade para contribuir.


<a id="Tecnologias"></a>
### Tecnologias utilizadas

As seguintes ferramentas foram usadas na construção do projeto:

- [![html5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element)
- [![css3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [![javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

---

### Autor

Made with 💜 by Renan Cesar 👋

[![LinkedIn Badge](https://img.shields.io/badge/-Renan_Cesar-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/renan-cesar/)](https://www.linkedin.com/in/renan-cesar/)
