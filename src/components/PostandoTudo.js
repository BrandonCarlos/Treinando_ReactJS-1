import React from 'react';

function PostagemHeader({ author, data }) {

  return (
    <div className="post-header">
      <img className="avatar" src={author.avatar} />
      <div className="details">
        <span>{author.nome}</span>
        <span>{data}</span>
      </div>
    </div>
  );

}

//Aki é tantp a pergunta da Vanessa quanto o comentário da Rafaela
function PostagemComentarios({ comentarios }) {
  return (
    <div className="post-comments">
      <div className="divider" />
      {comentarios.map(comentario => (//Estamos percorrendo um ARRAY de COMENTARIOS, para cada COMENTARIO
        //Irá mostrar na DIV os COMENTARIOS atrávez do ID
        <div key={comentario.id} className="comment">
          <img className="avatar" src={comentario.author.avatar} />
          <p>
            <span>{comentario.author.name}</span>
            {comentario.conteudo}
          </p>
        </div>
      ))}
    </div >
  )
}

//Aki é toda a estrutura aki não tem author, data, conteudo, comentarios nem NADA e apenas estrutura
function PostandoTudo({ author, data, conteudo, comentarios }) {
  return (
    <div className="post">
      <PostagemHeader author={author} data={data} />
      <p className="post content">{conteudo}</p>
      <PostagemComentarios comentarios={comentarios} />
    </div>
  );
}

export default PostandoTudo;