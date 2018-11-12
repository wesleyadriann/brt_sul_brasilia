import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import '../css/style.css'

class ExibeOnibus extends Component {



    filtraEstacao() {
        if(this.props.linha === ("2201" || "2202" || "2203" || "2205")) {
            return(
                <div>
                    <div className="column">
                        <strong>Gama</strong>   <br/>
                            -15,991743, -48,049292
                    </div>
                    <div className="column">
                        <strong>Periquito</strong> <br/>
                            -15,967605, -48,022491
                    </div>
                    <div className="column">
                        <strong>CAUB II</strong> <br/>
                            -15,954534, -48,007817

                    </div>
                </div>
            );
        }else if(this.props.linha === ("2301" || "2302" || "2203")) {
            return (
                <div>
                    <div className="column">
                        <strong>Santa Maria</strong> <br/>
                            -16,002359, -47,986283
                    </div>
                    <div className="column">
                        <strong>Santos Dumont</strong> <br/>
                            -15,992820, -47,986125
                    </div>
                </div>
            );
        }else {
            return 
        }

    }



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

                                        

                                        {
                                            









                                            
                                        }



                                        



                                        <div className="column">
                                            <strong>Catetinho</strong> <br/>
                                                -15,941982, -47,988077

                                        </div>
                                        <div className="column">
                                            <strong>Granja do Ipê</strong> <br/>
                                                -15,922987, -47,975404
                                        </div>
                                        <div className="column">
                                            <strong>SMPW 26</strong> <br/>
                                                -15,911208, -47,967636

                                        </div>
                                        <div className="column">
                                            <strong>Vargem Bonita</strong> <br/>
                                                -15,890606, -47,961361
                                        </div>
                                        <div className="column">
                                            <strong>Parkway</strong> <br/>
                                                -15,880099, -47,959782
                                        </div>
                                        <div className="column">
                                            <strong>Rod. Brasília</strong> <br/>
                                                -15,794059, -47,882798
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