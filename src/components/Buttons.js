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
                        <form>
                        <input type="radio" name="sentido" value="0"/> - IDA<br/>
                        
                        <input type="radio" name="sentido" value="1"/> - VOLTA
                        </form>
                        <br/>
                        <p className="title is-5">Gama</p>
                            
                        <button className="button is-warning ma is-fullwidth" type="submit" value="2201">TR20 - Expressa</button>
                        <button className="button is-warning ma is-fullwidth" type="submit" value="2202">TR21 - Paradora</button>
                        <button className="button is-warning ma is-fullwidth" type="submit" value="2203">TR22 - L2 Sul/Norte</button>
                        <button className="button is-warning ma is-fullwidth" type="submit" value="2205">2205 - W3 Sul</button><br/><br/>

                        <p className="title is-5">Santa Maria</p>
                        <button className="button is-warning ma is-fullwidth" type="submit" value="2301">TR25 - Expressa</button>
                        <button className="button is-warning ma is-fullwidth" type="submit" value="2302">TR26 - Paradora</button>
                        <button className="button is-warning ma is-fullwidth" type="submit" value="2203">2301 - W3 Sul</button><br/><br/>

                        <p className="title is-5">ParkWay</p>
                        <button className="button is-warning ma is-fullwidth" type="submit" value="2207">2207 - W3 Sul</button>

                    </div>
                
            </div>


        )
    }
}
export default Buttons;