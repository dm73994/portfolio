import React from 'react'

interface props{
    style: {}
}

const Networks = ( {style}:props )=>{
  return (
    <div style={style} className='networks'>
        <a target="_blank" href='https://www.linkedin.com/in/carlos-david-mesa-martinez-107503224/'>
            <i className="bi bi-linkedin red"></i>
        </a>
        
        <a target="_blank" href='https://github.com/'>            
            <i className="bi bi-github red"></i>
        </a>

        <a target="_blank" href='https://api.whatsapp.com/send/?phone=%2B573122656289&text&type=phone_number&app_absent=0'>            
            <i className="bi bi-whatsapp red"></i>
        </a>
    </div>
  )
}

export default Networks