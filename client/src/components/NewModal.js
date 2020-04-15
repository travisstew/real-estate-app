import React, {useEffect, useState, useRef} from 'react';

function NewModal(){  
      const [isOpen , setIsOpen] = useState(false);

  return (
    <>
      <button onClick={()=> setIsOpen()}>Toggle</button>

      
      {isOpen ? (
        <div className="modal"><p>modal is open</p></div>
      ): null}
    </>
  )
}

export default NewModal;