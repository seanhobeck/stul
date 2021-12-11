import React from 'react';
import '../App.css';


function printwebpage(page) 
{
   fetch(page).then(response => response.headers).catch(error => alert("Unable to get webpage, bad link?"));
}


function Outliner() {
    return (
        <div className="markbook-section">
            <header className="stul-header">
                <header className="top-header">Outliner</header>

                <input type="text" id="getlnk" className="iptfld2"></input>
                <button className="btn-simple1" onClick={ 
                    function(e) { 
                        var val = document.getElementById('getlnk').value;

                        if(val != undefined && val != null && val != '') {
                            printwebpage(val);
                        }
                        else 
                            alert("Not a link, please paste one in the input field.");
                    }
                }>Open Link</button>

                <h4 id="txtf" className="txt-empty">No Web Page Chosen</h4>
            </header>
        </div>
    );
}

export default Outliner;