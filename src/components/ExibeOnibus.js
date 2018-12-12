import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import '../css/style.css'
import GetTempo from './GetTempo';

class ExibeOnibus extends Component {
    
    latlngOnibus = 0;

    verificaLocal(est) {
        let latEst = Number.parseFloat(est.substring(0,10));
        let latOni = Number.parseFloat(this.latlngOnibus.substring(0,10));
        
        switch(this.props.dir) {
            case "0":
                    if(latOni < latEst) {
                       
                        let tempo = <GetTempo coordsOni={this.latlngOnibus} coordsEst={est}/>
                        return tempo;
                    } else return "-";
                            
            case "1":
                    if(latOni < latEst) return "-";
                    else {
                        let tempo = <GetTempo coordsOni={this.latlngOnibus} coordsEst={est}/>
                        return tempo;
                    }

                    
        }
    }

    filtraEstacao(gama, stMaria, pWay, est) {
        
        let estacoes = "";
        if(this.props.linha.substring(4,5) === "G") estacoes = gama;
        else if (this.props.linha.substring(4,5) === "S") estacoes = stMaria;
        else return pWay[0].map((x, i) => {
            return (
                <div className="column">
                    <strong>{pWay[0][i]}</strong> <br/>
                    {pWay[1][i]}<p/>
                    Tempo
                </div> 
            )
        });
        
        let estacoesNor = est[0].map((x, i) => {
            let nomeEst = est[0][i];
            let latlngEst = est[1][i];
            let tempoEst = [];
            tempoEst[i] = this.verificaLocal(latlngEst);
            return (
                <div className="column">
                    <strong>{nomeEst}</strong> <p/>
                    
                     {tempoEst}
                </div>
            )
        })

        let estaçõesEsp =  estacoes[0].map((x, i) => {
            let nomeEst = estacoes[0][i];
            let latlngEst = estacoes[1][i];
            let tempoEst = [];
            tempoEst[i] = this.verificaLocal(latlngEst);
            return (
                <div className="column">
                    <strong>{nomeEst}</strong> <p/>
                    {tempoEst}
                </div>                    
            );
        })
        return [estaçõesEsp, estacoesNor];
    }  


    render() {
        
        const gama = [["Gama", "Periquito", "CAUB II"], ["-15.991743,-48.049292", "-15.967605,-48.022491", "-15.954534,-48.007817"]];
        const stMaria = [["Santa Maria", "S. Dumont"], ["-16.002359,-47.986283", "-15.992820,-47.986125"]];
        const pWay = [["Park Way", "Pátio Brasil"],["-15.880099,-47.959782", "-15.796208 -47.891297"]]
        const est = [["Catetinho", "Gran. Ipê", "SMPW 26", "Varg. Bon.","Park Way", "Brasília"], ["-15.941982,-47.988077", "-15.922987,-47.975404", "-15.911208,-47.967636", "-15.890606,-47.961361","-15.880099, -47.959782", "-15.794059,-47.882798"]];
        
        

        const exibeBus = this.props.onibus.map((Bus, i) => {   
             if(Bus[5] === this.props.linha.substring(0,4) && Bus[7] === this.props.dir) {
                this.latlngOnibus = Bus[2].replace(",",".") + "," + Bus[3].replace(",",".");
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
                                    <div className="mb"><strong >Tempo aproximado para Estações</strong></div>
                                    <div className="columns">
                                        
                                        {this.filtraEstacao(gama, stMaria, pWay, est)}
                                        

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
                <div className="tags has-addons"><span className="tag is-medium">Linha: {this.props.linha.substring(0,4)}</span></div>
                {exibeBus}
            </div>
        )
    }
}
export default ExibeOnibus;