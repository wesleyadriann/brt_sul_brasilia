import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import '../css/style.css'

class ExibeOnibus extends Component {
    
    render() {
        
        // response.data.Dados.forEach(element => {
        //     console.log("Elemento[5]: " + element[5]);
        // });
        
        const exibeBus = this.props.onibus.map((Bus, i) => {
            
             if(Bus[5] === this.props.linha && Bus[7] === this.props.dir) {
                
                return (
                    <div>
                        <div className="notification mt fs13">
                            <div className="columns">
                                <div className="column is-2">
                                    <strong>Ônibus</strong> <br/>
                                    Nº: {Bus[0]}<br/>
                                    Lat: {Bus[2]}<br/>
                                    Lng: {Bus[3]}<br/>
                                    Última Atualização: {Bus[1].substring(10,16)}
                                </div>
                                <div className="column has-text-centered bl"> 
                                    <strong>Tempo para  Estações</strong>
                                    <div className="columns">
                                        <div className="column">
                                            <strong>Gama</strong>
                                        </div>
                                        <div className="column">
                                            <strong>Periquito</strong>
                                        </div>
                                        <div className="column">
                                            <strong>CAUB II</strong>
                                        </div>
                                        <div className="column">
                                            <strong>Catetinho</strong>
                                        </div>
                                        <div className="column">
                                            <strong>Granja do Ipê</strong>
                                        </div>
                                        <div className="column">
                                            <strong>SMPW 26</strong>
                                        </div>
                                        <div className="column">
                                            <strong>Vargem Bonita</strong>
                                        </div>
                                        <div className="column">
                                            <strong>Parkway</strong>
                                        </div>
                                        <div className="column">
                                            <strong>Rod. Brasília</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }

        });
        
        
       
        return (
            <div>
                <div className="tags has-addons"><span className="tag is-medium">Linha: {this.props.linha}</span></div>
                {exibeBus}
            </div>
        )
    }
}
export default ExibeOnibus;