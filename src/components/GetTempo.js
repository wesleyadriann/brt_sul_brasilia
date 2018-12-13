import React, { Component } from 'react';
import axios from 'axios';
import '../css/style.css'

class GetTempo extends Component {
    constructor() {
        super();
        this.state = {
            tempo : {},
            flag: false
        }
        this.getTime = this.getTime.bind(this);
        this.willReRender = this.willReRender.bind(this);
    };
    
    getTime(oni, est) {
        console.log(this.state.flag);
        let coords = `wp.0=${oni}&wp.1=${est}`;
        const bingKey = "AqxO5kBZ9WGyR8O4QlMb47TAlKui5SZoE2Ggm62NrD2CiCbWxu3c-j_o63uXEgnp";
        axios.get(`http://dev.virtualearth.net/REST/V1/Routes?${coords}&key=${bingKey}`)
        .then(response => {
            this.setState({
                tempo: response.data.resourceSets[0].resources[0].travelDurationTraffic,
                flag: true
            });
        })
    }

    willReRender(){
        console.log(this.state.flag);
        if(this.state.flag === true){
            this.setState({flag: false});
        }
    }

    componentDidMount(){
        if(this.state.flag === false){
            this.getTime(this.props.coordsOni, this.props.coordsEst);
        }
    }
    
    render() {
        let tempo = Number.parseInt(this.state.tempo/60) + " Min"
        window.setTimeout(this.willReRender,2000);
        return(
            <div> <i className="fs12">{tempo}</i> </div>
        )
    }
}
export default GetTempo;