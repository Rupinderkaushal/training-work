import React from 'react';
import axios from 'axios';
import { Button } from "reactstrap";
const Newfile = () => {
    function xyz(){
        alert("you have pressed the button")
        
    }
    function abc (){
        console.log(5 + 6)
    }
    function ayc (){
        console.error("not found!")
    }
    function getapi (){
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/posts',
            responseType: 'stream'
          })
            .then(function (response) {
              console.log(response.data)
            });
    }
    return (
        <div>
      <button onClick={xyz} >Click</button><br/>
      <button onClick={abc}>button</button><br/>
      <button onClick={ayc}>button</button><br/>
      <button onClick={getapi}>Get Api</button><br/>
    
        </div>
    )
   
  
}

export default Newfile;
