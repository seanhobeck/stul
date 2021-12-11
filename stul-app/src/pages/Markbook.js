import React from 'react';
import '../App.css';

import { Chart, registerables } from 'chart.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

Chart.register(...registerables);


function Markbook() {
    return (
        <div className="markbook-section">
            <header className="stul-header">
                <header className="top-header">Markbook</header>

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

                        document.getElementById('txtf').textContent = "Your average is a: " + val + "%";

                        reloadcanvas();
                    }
                }>My Average</button>
                <h4 id="txtf" className="txt-av">No average calculated</h4>

                <button className="btn-simple1" onClick={ 
                    function(e) { 
                        vnumbers = [];
                        vdts = [
                            {
                                label: 'Average Grade',
                                data: [],
                                backgroundColor: [
                                    'rgba(255, 206, 86, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 206, 86, 1)'
                                ],
                                borderWidth: 2
                            }
                        ];
                        vdata.datasets = vdts;
                        vdata.labels = [];

                        if (myChart != undefined || myChart != null)
                                myChart.destroy();

                        reloadcanvas();
                    }
                }>Clear Table</button>


                <canvas id="markCanvas" className="maincanvas" width="800" height="600"/>
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
    labels: [],
    datasets: vdts
};

var vtype = 'bar';

var myChart = new Chart();


window.onload = reloadcanvas;
window.open = reloadcanvas;

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