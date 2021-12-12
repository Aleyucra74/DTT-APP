import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

//import DttImg from './img/BlackBackgorundDeloitte.png';

function App() {
  const [file, setFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [nota, setNota] = useState({});
  let x = "";

  async function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios({
        method: "post",
        url: "http://8367-35-221-3-11.ngrok.io/",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((resposta) => {
        console.log(resposta);
        x = resposta.data;
      })
    } catch (error) {
      console.log(error)
    }
    console.log(x);
  }

  const changeHandler = (event) => {
    setFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  function renderPrediction() {
    if(x.predict == 0){
      return <h3>Macae</h3>
    } else if (x.predict == 1){
      return <h3>Rio de janeiro</h3>
    } else if(x.predict ==2){
      return <h3>São Paulo</h3>
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
          {renderPrediction()}
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
