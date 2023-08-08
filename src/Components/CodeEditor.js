import React from 'react'
import { Controlled } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

const CodeEditor = ({head, icon, value, onChange}) => {

  const handleChange = (editor, data, value)=>{
    onChange(value);
  }

  return (
    <>
    <div className="flex gap-5 flex-col w-[30%] h-[320px]">
      <div className='flex items-center'>
        <span className='bg-red-500  px-2 grid place-items-center w-fit'>{icon}</span>
        {head}
      </div>
      <Controlled 
      className='controlled-editor'
      value={value}
      onBeforeChange={handleChange}
      options={{
        mode: 'xml',
        theme: 'material',
        lineNumbers: true
      }}
      >
    
      </Controlled>
    </div>
    </>
  )
}

export default CodeEditor
