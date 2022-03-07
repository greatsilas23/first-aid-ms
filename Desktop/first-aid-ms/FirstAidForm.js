import React from 'react'
import Gender from './res/Gender.jpg'
import Height from './res/Height.jpg'
import Weight from './res/Weight.png'
const FirstAidForm = () => {
	return(
    <div style={{width: '50vw', backgroundColor: 'white', margin: 'auto', borderRadius: '10px', padding: '10px'}}>

            <h2 style={{color: 'yellow'}}>Information</h2>
            <form>
                <ul style={{listStyle: 'none'}}>
                    <li>
                        <img src={Gender} style={{width: '7vw', height: '5vh'}} alt="gender"/><br/>
                        <label>Male </label><input type="radio"/>
                        <label>Female </label><input type="radio"/>
                    </li>
                    <li>
                        <img src={Height} style={{width: '5vw', height: '5vh'}} alt="height"/>
                        <br/>
                        <input type="number" placeholder="110cm"/>
                    </li>
                    <li>
                        <img src={Weight} style={{width: '7vw', height: '5vh'}} alt="weight"/>
                        <br/>
                        <input type="number" placeholder="50kg"/>
                    </li>
                    <li>Tick any underlying conditions: </li>
                    <ul style={{listStyle :'none'}}>
                        <li>
                            <label htmlFor="hypertension">hypertension</label>
                            <input id="hypertension" type="checkbox" /><br/>
                        </li>
                        <li>
                            <label htmlFor="diabetes">diabetes</label>
                            <input id="diabetes" type="checkbox" /><br/>
                        </li>
                        <li>
                            <label htmlFor="acidity">acidity</label>
                            <input id="acidity" type="checkbox" /><br/>
                        </li>
                        <li>
                            <textarea placeholder="Other"></textarea>
                        </li>
                    </ul>
                    <li>
                        <label htmlFor="vaccinated">Tick if vaccinated</label>
                        <input type="checkbox" id="vaccinated" name="vaccinated"/>
                    </li>

                </ul>
            <center>
            <input style={{borderRadius: '10px', backgroundColor: 'yellow', color: 'white', border: 'none', width: '15vw', height: '5vh'}} type="submit" value="Submit"/>
            <input style={{borderRadius: '10px', backgroundColor: 'white', color: 'yellow', border: 'none', width: '15vw', height: '5vh'}} type="reset" value="Clear"/>
            </center>
        </form>
    </div>
    )
}
export default FirstAidForm


