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
            let nomeEst = pWay[0][i];
            let latlngEst = pWay[1][i];
            let tempoEst = [];
            tempoEst[i] = this.verificaLocal(latlngEst);
            return (
                <div className="column">                    
                    <strong>{nomeEst}</strong> <br/>
                    {tempoEst}<p/>
                </div> 
            )
        });
        
        if ((this.props.linha === "2205G" || 
            this.props.linha ===  ("2301S") || 
            this.props.linha === ("2203G")) &&
             (est[0].length === 6)) {
            
            est[0].pop();
            est[1].pop();
        } 

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
        
        const gama = [["Gama", "Periquito", "CAUB II"], ["-15.992090,-48.049689", "-15.967508,-48.022323", "-15.954395,-48.007614"]];
        const stMaria = [["Santa Maria", "S. Dumont"], ["-16.002359,-47.986283", "-15.992820,-47.986125"]];
        const pWay = [["Park Way", "Pátio Brasil"],["-15.880099,-47.959782", "-15.796208 -47.891297"]]
        const est = [["Catetinho", "Gran. Ipê", "SMPW 26", "Varg. Bon.","Park Way", "Brasília"], ["-15.942191,-47.988256", "-15.922938,-47.975383", "-15.910007,-47.966856", "-15.891087, -47.961368","-15.880174, -47.959804", "-15.793889,-47.882765"]];
        
        

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