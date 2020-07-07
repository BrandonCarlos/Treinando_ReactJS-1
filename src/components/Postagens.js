import React, { Component } from 'react';//Estou importando o { Componente } também porque vou
//usar pra fazer o "EXTENDS Component"
import PostandoTudo from './PostandoTudo';

class Postagens extends Component {
  //Aki dentro que criamos nosso STATE
  state = {//nosso STATE
    postagem: [//Aki é a postagem a pergunta da pessoa
      {
        id: 1,
        author: {
          nome: 'Vanessa Romero',
          avatar: 'https://i.pravatar.cc/150?img=36'
        },
        data: '04 Jun 2019',
        conteudo: 'Olá, como posso consultar o frete? ',
        comentarios: [//Aki é o comentário de uma outra pessoa
          {
            id: 2,
            author: {
              nome: 'Rafaela',//Nome da pessoa que está comentando
              avatar: 'https://i.pravatar.cc/150?img=29'
            },
            data: '04 Jun 2019',
            conteudo:
              'Vá em ferramentas, buscar CEP (funcionalidade que ainda não tem hehe)',
          }
        ]
      },
    ]
  }

  //Antes de fechar a ultima CHAVE usamos o método RENDER()
  render() {
    const { postagem } = this.state;//Aki é o mesmo que -> const postagens = this.state.postagens
    //só que aki { postagens } estou usando DESESTRUTURAÇÃO
    //{ postagem } irá ser usado abaixo com o .map

    return (//Usando PARÊNTESES () porque vou usamos mais que uma LINHA
      //Aqui no REACT não usamos "CLASS" e sim "className"
      <div className="postagens">
        {
          postagem.map(post => (//Vamos percorrer o ARRAY de "postagem", para cada POSTAGEM ...
            <PostandoTudo key={post.id} {...post} />//<PostandoTudo /> está pegando as INFORMAÇÔES
            //ID E TODO O RESTO COMO NOME, DATA, COMENTARIOS
          ))
        }
      </div>
    );
  }

}

export default Postagens;//Exportando o COMPONENTE "Postagens"