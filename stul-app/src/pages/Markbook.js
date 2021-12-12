import React from 'react';
import '../App.css';

import { Chart, registerables } from 'chart.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { flushSync } from 'react-dom';

Chart.register(...registerables);


function Markbook() {
    return (
        <div className="markbook-section">
            <header className="stul-header">
                <header className="top-header">Markbook</header>
                <div class="dropdown">
                <button className="dropbtn">Types of Graphs</button>
                <div class="dropdown-content">
                <button className="btn-simple2" id="btn-6" onClick={ 
                    function(e) { 
                        vtype = 'line';

                        if (myChart != undefined || myChart != null)
                                myChart.destroy();

                        reloadcanvas();
                    }
                }>Line Graph</button>
                <button className="btn-simple2" id="btn-6" onClick={ 
                    function(e) { 
                        vtype = 'bar';

                        if (myChart != undefined || myChart != null)
                                myChart.destroy();

                        reloadcanvas();
                    }
                }>Bar Graph</button>
                <button className="btn-simple2" id="btn-6" onClick={ 
                    function(e) { 
                        vtype = 'radar';

                        if (myChart != undefined || myChart != null)
                                myChart.destroy();

                        reloadcanvas();
                    }
                }>Radar Graph</button>
                </div>
                </div>

                <input type="text" id="addmark" className="iptfld"></input>
                <button className="btn-simple1" onClick={ 
                    function(e) { 
                        var val = document.getElementById('addmark').value;

                        if(val != undefined && val != null && val != '' && vnumbers.length != vdata.labels.length && parseFloat(val) > 0) {
                            vnumbers.push(parseFloat(val));
                        }
                        else {
                            if(vnumbers.length == vdata.labels.length)
                                alert("There is no more available labels to add to, make another.");
                            else if(typeof(val) != Number)
                                alert("Please make sure to input a number.");
                            else
                                alert("There is no Labels to add values to, please make one.");

                            if (myChart != undefined || myChart != null)
                                myChart.destroy();
                        }

                        reloadcanvas();
                    }
                }>Add a Mark</button>

                <input type="text" id="addlabel" className="iptfld"></input>
                <button className="btn-simple1" onClick={ 
                    function(e) { 
                        var val = document.getElementById('addlabel').value;

                        if(val != undefined && val != null && val != '')
                            vdata.labels.push(val);
                        else {
                            alert("Please enter a value.");

                            if (myChart != undefined || myChart != null)
                                myChart.destroy();
                        }

                        reloadcanvas();
                    }
                }>Add a Label</button>

                <button className="btn-simple1" onClick={ 
                    function(e) { 
                        var val = 0;

                        if (vnumbers.length == 0)
                        {
                            alert("There is no marks to calculate a average for.");
                            return;
                        }

                        for (const v of vnumbers) 
                        {
                            val += v;
                        }

                        val /= vnumbers.length;

                        document.getElementById('txtf').textContent = "Your average is a: " + Math.round(val) + "%";

                        if (myChart != undefined || myChart != null)
                                myChart.destroy();

                        reloadcanvas();
                    }
                }>My Average</button>
                <button className="btn-simple3" id="btn-4" onClick={ 
                    function(e) { 
                        vnumbers = [];
                        vdata.labels = [];
                        myChart.data.labels = [];
                        myChart.data.datasets = [{
                            label: 'Average Grade',
                            data: vnumbers,
                            backgroundColor: [
                                'rgba(255, 206, 86, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 206, 86, 1)'
                            ],
                            borderWidth: 2
                        }];

                        if (myChart != undefined || myChart != null)
                                myChart.destroy();

                        reloadcanvas();
                    }
                }>Clear Graph (Reset)</button>
                <h4 id="txtf" className="txt-av">No average calculated</h4>

                <canvas id="markCanvas" className="maincanvas" width="1200" height="700"/>
            </header>
        </div>
    );
}


var vnumbers = [
    
];

var vdts = [
    {
        label: 'Average Grade',
        data: vnumbers,
        backgroundColor: [
            'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
            'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 2
    }
];

var vdata = {
    labels: [ "Science", "Math", "English", "Careers", "Civics" ],
    datasets: vdts
};

var vtype = 'bar';

var myChart = new Chart();


window.onload = reloadcanvas();
window.open = reloadcanvas();
window.onfocus = reloadcanvas();

function reloadcanvas() 
{
    if (myChart != undefined || myChart != null)
        myChart.destroy();

    const ctx = document.getElementById('markCanvas');

    myChart = new Chart(ctx, {
        type: vtype,
        data: vdata,
        options: {
            responsive: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

export default Markbook;