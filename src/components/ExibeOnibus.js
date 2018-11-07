import React, { Component } from 'react';
import 'bulma/css/bulma.css'

class ExibeOnibus extends Component {
    render() {
        
        // response.data.Dados.forEach(element => {
        //     console.log("Elemento[5]: " + element[5]);
        // });

        console.log("Aqui");
       
        return (
            <div>
                <div className="tags has-addons"><span className="tag is-warning is-medium">Linha:</span></div>
                <div className="columns has-text-centered">
                        <div className="column">Numero Onibus </div>
                        <div className="column">Ultima Atualização </div>
                        <div className="column">Local - Lat: Lng:</div>
                </div>
                <div className="columns has-text-centered">
                    <div className="column">Tempo para as estações</div>            
                </div>
                <div className="columns has-text-centered">
                    <div className="column">Gama</div>
                    <div className="column">Periquito</div>
                    <div className="column">CAUB II</div>
                    <div className="column">Catetinho</div>
                    <div className="column">Granja do Ipê</div>
                    <div className="column">SMPW Quadra 26</div>
                    <div className="column">Vargem Bonita</div>
                    <div className="column">Parkway</div>
                    <div className="column">Rod. Brasília</div>
                    
                </div>
            </div>
        )
    }
}
export default ExibeOnibus;