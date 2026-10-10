import React, { useRef } from 'react'

function TextInput() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter text..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default TextInput