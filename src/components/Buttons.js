import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import '../css/style.css'

class Buttons  extends Component {
    render() {
        return(
            <div>
                
                {/* <input className="button is-info" type="submit" value="X">X</input> */}
                
                   <div className="field">
                        <p className="title is-5">Sentido</p>
                        <form >
                        <input type="radio" name="sentido" value="0" onClick={this.props.getDir}/> - IDA<br/>
                        
                        <input type="radio" name="sentido" value="1" onClick={this.props.getDir}/> - VOLTA
                        </form>
                        <br/>
                        <p className="title is-5">Gama</p>
                            
                        <button className="button is-warning ma is-fullwidth" type="submit" value="2201" onClick={this.props.getBus}>TR20 - Expressa</button>
                        <button className="button is-warning ma is-fullwidth" type="submit" value="2202" onClick={this.props.getBus}>TR21 - Paradora</button>
                        <button className="button is-warning ma is-fullwidth" type="submit" value="2203" onClick={this.props.getBus}>TR22 - L2 Sul/Norte</button>
                        <button className="button is-warning ma is-fullwidth" type="submit" value="2205" onClick={this.props.getBus}>2205 - W3 Sul</button><br/><br/>

                        <p className="title is-5">Santa Maria</p>
                        <button className="button is-warning ma is-fullwidth" type="submit" value="2301" onClick={this.props.getBus}>TR25 - Expressa</button>
                        <button className="button is-warning ma is-fullwidth" type="submit" value="2302" onClick={this.props.getBus}>TR26 - Paradora</button>
                        <button className="button is-warning ma is-fullwidth" type="submit" value="2203" onClick={this.props.getBus}>2301 - W3 Sul</button><br/><br/>

                        <p className="title is-5">ParkWay</p>
                        <button className="button is-warning ma is-fullwidth" type="submit" value="2207" onClick={this.props.getBus}>2207 - W3 Sul</button>
                        
                    </div>
                
            </div>


        )
    }
}
export default Buttons;