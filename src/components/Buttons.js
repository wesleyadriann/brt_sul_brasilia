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
                        <input type="radio" name="sentido" value="0" defaultChecked onClick={this.props.getDir}/> - IDA<br/>
                        
                        <input type="radio" name="sentido" value="1" onClick={this.props.getDir}/> - VOLTA
                        </form>
                        <br/>
                        {/* <p className="title is-5">Gama</p>
                            
                        <button className="button is-warning ma is-fullwidth" value="2201" onClick={this.props.getBus}>TR20 - Expressa</button>
                        <button className="button is-warning ma is-fullwidth" value="2202" onClick={this.props.getBus}>TR21 - Paradora</button>
                        <button className="button is-warning ma is-fullwidth" value="2203" onClick={this.props.getBus}>TR22 - L2 Sul/Norte</button>
                        <button className="button is-warning ma is-fullwidth" value="2205" onClick={this.props.getBus}>2205 - W3 Sul</button><br/><br/> */}
                        <p className="title is-5">Linha</p>
                        <div className="select is-fullwidth is-warning ">
                            <select onChange={this.props.getBus} >
                                
                                <option className="it" disabled selected>Gama</option>
                                <option className="sl" value="2201" >TR20 - Expressa</option>
                                <option value="2202" >TR21 - Paradora</option>
                                <option value="2203" >TR22 - L2 Sul/Norte</option>
                                <option value="2205" >2205 - W3 Sul</option>
                                <option className="it"disabled>Santa Maria</option>
                                <option value="2301" >TR25 - Expressa</option>
                                <option value="2302" >TR26 - Paradora</option>
                                <option value="2301" >2301 - W3 Sul</option>
                                <option className="it" disabled>ParkWay</option>                                
                                <option value="2207" >2207 - W3 Sul</option>
                                                                
                            </select>
                        </div>


                        

                        {/* <p className="title is-5">Santa Maria</p>
                        <button className="button is-warning ma is-fullwidth" type="submit" value="2301" onClick={this.props.getBus}>TR25 - Expressa</button>
                        <button className="button is-warning ma is-fullwidth" type="submit" value="2302" onClick={this.props.getBus}>TR26 - Paradora</button>
                        <button className="button is-warning ma is-fullwidth" type="submit" value="2301" onClick={this.props.getBus}>2301 - W3 Sul</button><br/><br/> */}
                            
                        
                        {/* <p className="title is-5">ParkWay</p>
                        <button className="button is-warning ma is-fullwidth" type="submit" value="2207" onClick={this.props.getBus}>2207 - W3 Sul</button> */}
                           

                         
                    </div>
                
            </div>


        )
    }
}
export default Buttons;