import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import '../css/style.css'

class ExibeOnibus extends Component {
    
    

    filtraEstacao(estacoes) {
        
        // if(this.props.linha === "2201" || this.props.linha === "2202" || this.props.linha === "2203" || this.props.linha === "2205") {
        const retorna = estacoes[0].map((x, i) => {
            
            return (
                
                    <div className="column">
                        <strong>{estacoes[0][i]}</strong> <br/>
                        {estacoes[1][i]}
                    </div>


                
            );



        })

        return retorna;
        // }else if(this.props.linha === "2301" ||  this.props.linha === "2302" || this.props.linha === "2301") {
        
        
        
    
    }
    



    render() {
        
        var gama = [["Gama", "Periquito", "CAUB II"], ["-15,991743, -48,049292", "-15,967605, -48,022491", "-15,954534, -48,007817"]];
        var stMaria = [["Santa Maria", "S. Dumont"], ["-16,002359, -47,986283", "-15,992820, -47,986125"]];
        
        

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
                                    <div className="mb"><strong >Tempo para  Estações</strong></div>
                                    

                                    <div className="columns">
                                        
                                        {
                                        this.filtraEstacao(gama)

                                        // if(this.props.linha === "2201" || this.props.linha === "2202" || this.props.linha === "2203" || this.props.linha === "2205") {
                                        //     gama.map(() => {
                                        //         return(
                                                    
                                        //         );
                                        //     })
                                        // }else{
                                        //     stMaria.map(() => {
                                        //         return(
                                        //             <div className="column">
                                        //                 <strong>{stMaria[0][i]}</strong> <br/>
                                        //                 {stMaria[1][i]}
                                        //             </div>
                                        //         );
                                        //     })
                                        // }
                                        }
                                        
                                        {/* <div className="columns">    
                                            <div className="column">
                                                <strong>Catetinho</strong> <br/>
                                                    -15,941982, -47,988077

                                            </div>
                                            <div className="column">
                                                <strong>Gran. do Ipê</strong> <br/>
                                                    -15,922987, -47,975404
                                            </div>
                                            <div className="column">
                                                <strong>SMPW 26</strong> <br/>
                                                    -15,911208, -47,967636

                                            </div>
                                            <div className="column">
                                                <strong>Varg. Bonita</strong> <br/>
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
                                        </div> */}

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