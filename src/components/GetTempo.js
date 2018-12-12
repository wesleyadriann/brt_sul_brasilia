import React, { Component } from 'react';
import axios from 'axios';
import '../css/style.css'

class GetTempo extends Component {
    constructor() {
        super();
        this.state = {
            tempo : {}
        }
        this.getTime = this.getTime.bind(this);
    };

    getTime(oni, est) {
        
        let coords = `wp.0=${oni}&wp.1=${est}`;
        const bingKey = "AqxO5kBZ9WGyR8O4QlMb47TAlKui5SZoE2Ggm62NrD2CiCbWxu3c-j_o63uXEgnp";
        axios.get(`http://dev.virtualearth.net/REST/V1/Routes?${coords}&key=${bingKey}`)
        .then(response => {
          this.setState({
            tempo: response.data.resourceSets[0].resources[0].travelDurationTraffic
          });
        })
        
        return (Number.parseInt(this.state.tempo/60) + " Min");
    }
    
    
    render() {
        let tempo = this.getTime(this.props.coordsOni, this.props.coordsEst)
        return(
            <div> <i className="fs12">{tempo}</i> </div>
        )
    }
}
export default GetTempo;