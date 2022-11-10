import React from 'react'
import background from'./Dog-image.png'

function HomeDog() {
    const dogHome={
        backgroundImage: `url(${background})`,
        backgroungColor:'black, 0.5',
        width:'590px',
        padding: '140px 456px 140px 456px',
        height:'380px'
       
    }
    const writeDog={
       
        border:'solid'
    }
    const ShadowBlock={
       
        width:'590px',
        height:'380px',
        
    }
  return (
    <div style={ShadowBlock}>
        <div style={dogHome}>
            <div style={writeDog}>
                <h1>hdsds</h1>
            </div>
        </div>
    </div>
  )
}

export default HomeDog
