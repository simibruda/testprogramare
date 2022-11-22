import React from 'react'
import Wasp from './ImageBugs/Wasp@2x.png'
import Beetle from './ImageBugs/Beetle@2x.png'
import Centipede from './ImageBugs/Centipede@2x.png'
import Bee from './ImageBugs/Bee@2x.png'
import Tick from './ImageBugs/Tick@2x.png'
import Cricket from './ImageBugs/Cricket@2x.png'
import Silverfish from './ImageBugs/silverfish@2x.png'
import Roach from './ImageBugs/Roach@2x.png'

function AllPest() {
    const allpest=[
        {
           
            image:Wasp,
            text:'WASP'

        },
        {
           
            image:Beetle,
            text:'BEETLE'

        },
        {
           
            image:Centipede,
            text:'CENTIPEDE'

        },
        {
            
            image:Bee,
            text:'BEE'

        },
        {
           
            image:Tick,
            text:'TICK'

        },
        {
           
            image:Cricket,
            text:'CRICKET'

        },
        
        {
           
            image:Silverfish,
            text:'SILVERFISH'

        },
        {
           
            image:Roach,
            text:'ROACH'

        }
    ]
    const stylingbugs={
        display: 'inline-block',
        
        
    }
    const space={
        
            width: '25px',
            height: 'auto',
            display: 'inline-block'
         
    }
  return allpest.map((bugs,index) => (
    <>
    <div key={index} style={stylingbugs}>
        <img src={bugs.image} alt='dog'  style={{ width:'130px'}} />
        <h1 style={ {textAlign:'center',fontSize:'20px'}}><b>{bugs.text}</b></h1>
    </div>
    <div style={space}></div>
    </>
  ));
}

export default AllPest
