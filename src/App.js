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
      linha: 0,
    };
    this.getOnibus = this.getOnibus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit(event) {
    console.log(event.target.value);
    event.preventDefault();
    this.getOnibus();

  }
 
  getOnibus() { 
    axios.get('http://00078.transdatasmart.com.br:7801/ITS-InfoExport/api/Data/VeiculosGTFS')
    .then(response => {
      // console.log("JSON: " + JSON.stringify(response.data));

        this.setState ({  
          Onibus: response.data.Dados
        });  
    },
    )
    .catch(error => {
      this.setState ({
        erro: true,
      })
    });
  }




  render() {
    return (
      <div>
        <section className="hero is-warning">
          <div className="hero-body">
            <div className="container">
            
            <h1 className="title"> <img src={icon} width="26px"/> BRT Sul Horários</h1>  
            
            </div>
          </div>
        </section>



        
          <div className="container" >
            <div className="columns box">       
              <div className="column is-2">
                <p className="title is-4">Linhas</p>
                <Buttons/>
              </div>
              <div className="column">
                <ExibeOnibus/> 
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
