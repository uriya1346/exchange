import React ,{useContext }from 'react';
import { arcontext } from '../context/arcontext';


function ScoreEX(props){
    let {ar}  = useContext(arcontext)
    let first =ar[0].first;
    let upper= first.toLowerCase();
    let end =ar[0].end;
    let lower = end.toLowerCase();
    let elseupper=""
    let elselower=""
    if(upper == "thb"){elseupper="THB"}else if(upper == "cad"){elseupper="CAD"} else{elseupper=""}
    if(lower == "thb"){elselower="THB"}else if(lower == "cad"){elselower="CAD"} else{elselower=""}

    return(
        <div className='col-md-6 mx-auto shadow text-center score'>
           <h2 className='mb-3'>{ar[0].amount}  {elseupper}<i className={"fa fa-"+upper} aria-hidden="true"></i> = {ar[0].total.toFixed(2)}  {elselower}<i className={"fa fa-"+lower} aria-hidden="true"></i></h2> 
           <h3>date: <span style={{color:"silver"}}>{new Date().toLocaleString()}</span></h3>
        </div> 
    )
}

export default ScoreEX