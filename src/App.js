import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { render } from '@testing-library/react';

//import DttImg from './img/BlackBackgorundDeloitte.png';

function App() {
  const [file, setFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [nota, setNota] = useState(0);

  async function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData();
    // formData.append("file", !file ? {
    //   name: "",
    //   type: "",
    //   size: "",
    //   lastModifiedDate: ""
    // } : file);
    formData.append("file", file);
    try {
      const response = await axios({
        method: "post",
        url: "http://7497-34-90-77-26.ngrok.io/",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((resposta) => {
        console.log(resposta);
        setNota(resposta.data.predict);
      })
    } catch (error) {
      console.log(error)
    }
    console.log(nota);
  }

  const changeHandler = (event) => {
    setFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const renderPrediction = (nota) => {
    if(nota === 2){
      return <h3>CAMPINAS</h3>
    } else if (nota === 3) {
      return <h3>FORTALEZA</h3>
    } else if (nota === 4) {
      return <h3>HORTOLANDIA</h3>
    } else if (nota === 5) {
      return <h3>JUNDIAI</h3>
    } else if (nota === 6) {
      return <h3>MACAE</h3>
    } else if (nota === 7) {
      return <h3>POUSO ALEGRE</h3>
    }else if (nota === 8) {
      return <h3>SAO PAULO</h3>
    } else if (nota === 9) {
      return <h3>RIO DE JANEIRO</h3>
    } else if (nota === 10) {
      return <h3>SANTOS</h3>
    } else if (nota === 12) {
      return <h3>SAO CAETANO DO SUL</h3>
    } else if (nota === 14) {
      return <h3>SOROCABA</h3>
    } else if (nota === 15) {
      return <h3>VITORIA</h3>
    } else {
      return <h3>Nao existe no modelo</h3>
    }
  }

  return (
    <div>
      <header className="bgc-black flex flex-center min-h shadow-btm">
        <img className="h-auto" src="https://web.deloitte.com.br/sai/apontamentohorasweb/Images/BlackBackgorundDeloitte.png" alt="Profile" />
      </header>

      {/* section main */}
      <main className="container flex justify-between flex-rol">
        <form className="flex margin-top" onSubmit={(e) => handleSubmit(e)} encType="multipart/form-data">
          <div className="w-75 flex flex-rol margin">
            {isFilePicked ? (
              <div>
                <p>Filename: {file.name}</p>
                <p>Filetype: {file.type}</p>
                <p>Size in bytes: {file.size}</p>
                <p>
                  lastModifiedDate:{' '}
                  {file.lastModifiedDate.toLocaleDateString()}
                </p>
              </div>
            ) : (
              <p>Select a file to show details</p>
            )}
            <input
              className="border roudend"
              onChange={(e) => changeHandler(e)}
              type="file"
              name="file"
            />
          </div>
          <div className="w-25">
            <input
              className="border-none bgc-blue rounded text-white pl focus"
              value="Enviar"
              type="submit"
            />
          </div>
        </form>
        <div>
          {renderPrediction(nota)}
        </div>
        {/* footer */}
        <footer>
          &copy; Deloitte - 2021
        </footer>
      </main>
    </div>
  );
}

export default App;
