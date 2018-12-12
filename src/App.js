import React, { Component } from 'react';
import axios from 'axios';
import Buttons from './components/Buttons';
import ExibeOnibus from './components/ExibeOnibus';
import 'bulma/css/bulma.css'
import icon from './icons/icon.svg'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Onibus: [],
      erro: false,
      linha: "",
      direcao: "0",
    };
    this.getOnibus = this.getOnibus.bind(this);
    this.handleLinha = this.handleLinha.bind(this);
    this.handleDirecao = this.handleDirecao.bind(this);
    
  }

  handleLinha(event) {
    this.setState({
      linha: event.target.value
    })
    event.preventDefault();
    this.getOnibus();
  }
 
  getOnibus() { 
    axios.get("http://00078.transdatasmart.com.br:7801/ITS-InfoExport/api/Data/VeiculosGTFS")
    .then(response => {
        
      this.setState ({  
          Onibus: response.data.Dados
        });  
    })
  }

  handleDirecao(event){
    console.log(event.target.value);
    this.setState({
      direcao: event.target.value
    })
  }

  render() {
     
    return (
      <div>
        <section className="hero is-warning">
          <div className="hero-body">
            <div className="container">
            
            <h1 className="title"> <img src={icon} width="26px" height="26px"/> BRT Sul Horários</h1>  
            
            </div>
          </div>
        </section>



        
          <div className="container" >
            <div className="columns box">       
              <div className="column is-2">
                
                <Buttons getBus={this.handleLinha}  getDir={this.handleDirecao}/>
              </div>
              <div className="column">
                  {/* <div>Tempo Total: {tempoViagem.substring(0,2)} Minutos</div> */}
                 
                  <ExibeOnibus onibus={this.state.Onibus} linha={this.state.linha} dir={this.state.direcao}/> 

              </div>
            </div>
          </div>
        

        <footer className="footer">
          <div className="content has-text-centered">
            Asd
            
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
