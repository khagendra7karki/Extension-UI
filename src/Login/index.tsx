import { setServers } from 'dns/promises';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios'

let globalCounter = 0;

const getData = async () => {
    try{
        const res = await axios.get('https://dummyjson.com/products/1')
        console.log(res.data.id)
        return res.data.id
        // setData(res.data.id)
        // return res.data.id
    }catch(e){
        console.log(e)
        // setData(null)
        return null
    }
}

function CounterComponent() {

    
    // const refValue = useRef()
    let randomValue = 10

    useEffect( () => {
        if(refValue.current){
            console.log(refValue.current)
            const pTag = document.createElement('p')
            pTag.innerHTML = "Hello World"
            refValue.current.appedChild(pTag)
        }
    }, [])

    if (randomValue > 10){
        return <></>
    }else{
        
        return (
      
          <div>
      
              <div >
      
              </div>
          </div>
      
        );
    }
}

 
// sam@108capital.ltd







export default CounterComponent;


 



