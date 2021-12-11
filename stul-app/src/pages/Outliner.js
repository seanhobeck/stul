import React from 'react';
import '../App.css';
import wget from 'node-wget-js';


function Outliner() {
    return (
        <div className="outliner-section">
            <header className="stul-header">
                <header className="top-header">Outliner</header>

                <input type="text" id="getlnk" className="iptfld2"></input>
                <button className="btn-simple1" onClick={ 
                    function(e) { 
                        var val = document.getElementById('getlnk').value;

                        if(val != undefined && val != null && val != '') {
                            document.getElementById('txtf').data = val;
                        }
                        else 
                            alert("Not a link, please paste one in the input field.");
                    }
                }>Open Link</button>
            </header>

            <object type="text/html" data="" id="txtf" className="txt-empty"></object>
        </div>
    );
}

export default Outliner;