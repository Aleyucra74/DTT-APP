import './App.css';

import DttImg from './img/BlackBackgorundDeloitte.png';

function App() {
  return (
    <div>
      <header className="bgc-black flex flex-center min-h shadow-btm">
        <img className="h-auto" src="https://web.deloitte.com.br/sai/apontamentohorasweb/Images/BlackBackgorundDeloitte.png" alt="Profile" />
      </header>

      {/* section main */}
      <main className="container flex justify-between flex-rol">
        <form className="flex margin-top">
          <div className="w-75 flex flex-rol margin">
            <input 
              className="border rounded pl-inside text-size"
              style={{marginBottom: "10px"}}
              placeholder="Some text"
              type="text" 
            />
            <input 
              className="border roudend"
              type="file" 
            />
          </div>
          <div className="w-25">
            <input 
              className="border-none bgc-blue rounded text-white pl focus"
              value="Enviar" 
              type="button" 
            />
          </div>
        </form>

        {/* footer */}
        <footer>
          &copy; Deloitte - 2021
        </footer>
      </main>
    </div>
  );
}

export default App;
