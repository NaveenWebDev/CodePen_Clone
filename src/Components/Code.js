import React from 'react';
import CodeEditor from './CodeEditor';
import { useContext } from 'react';
import { Datacontext } from '../Context/DataProvider';


const Code = () => {

  const {html, sethtml, css, setCss,js, setJs} = useContext(Datacontext)

  return (
    <React.Fragment>
    <div className='flex justify-between'>
    <CodeEditor head="Html" icon="/" value={html} onChange={sethtml}></CodeEditor>
    <CodeEditor head="Css" icon="*" value={css} onChange={setCss}></CodeEditor>
    <CodeEditor head="Js" icon="()" value={js} onChange={setJs}></CodeEditor>
    </div>
    
    </React.Fragment>
  )
}

export default Code