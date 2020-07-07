//Vamos criar componentes
//Todo lugar que utilizarmos a SYNTAX de JSX (Que é a syntax de HTML), o REACT precisa estar presente
//no arquivo
import React from 'react';
import './App.css';//Importando o arquivo CSS
//import TechList from './components/TechList';//Vamos importar o TechList

import Header from './components/Header';//Im portando o arquivo Header.js
//Precisamos IMPORTAR o arquivo POSTAGENS
import Postagens from './components/Postagens';

//Vou importar a imagem toda imagem que eu importo eu preciso dar um NOME 
import marioBros from './assets/mario.jpg';


//import profile from './assets/profile.JPG';//Toda imagem que eu importo eu preciso dar um nome no caso (PROFILE)
//Jeito mais fácil de criar componentes e com uma FUNCTION
function App() {
  //E aqui podemos retornar qualquer coisa inclusive HTML
  //Vamos exibir a imagem no HTML, no src ao invez de fazer src="", faremos src={profile}
  //return <img width="400" src={profile} />//também podemos adicionar width="400" igual do HTML
  //return <TechList />
  //Aki no "App.js" no return que aparece na tela os RESULTADOS
  //Para por uma imagem no REACT colocamos aki no RETURN

  return (
    <>
      <Header />
      <Postagens />

    </>
  );
}

export default App;