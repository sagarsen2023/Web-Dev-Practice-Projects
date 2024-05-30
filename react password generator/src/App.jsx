import React, { useCallback, useEffect, useRef, useState } from 'react'

const App = () => {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [hasCharacter, setCharacter] = useState(true)
  const [defaultPasswords, setDefaultPasswords] = useState("")
  const [buttonText, setButtonText] = useState("Copy");
  const [buttonColor, setButtonColor] = useState("bg-blue-500")

  const passwordRef = useRef(null) // Implementing useRef() hook here

  // Implementing useCallback() hook here
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy"
    let number = "0123456789"

    if (numberAllowed) str += number;
    if (hasCharacter) str += ",./;'[]>?:{}|";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setDefaultPasswords(pass)

  }, [length, numberAllowed, hasCharacter, setDefaultPasswords])
  // The setDefaultPasswords is used as dependency here to improve performance


  const copyPassword = useCallback(() => {
    // Here we are using the reference to the password: 
    // passwordRef.current?.select() // Optional : Just used for practice
    window.navigator.clipboard.writeText(defaultPasswords)
  }, [defaultPasswords])

  // Implementation of useEffect() hook:
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator, length, numberAllowed, hasCharacter])

  return (
    <main className='bg-zinc-800 text-white w-full h-screen'>
      <h1 className='text-4xl text-center pt-4'>Password Generator</h1>
      <div className='w-full flex justify-center items-center flex-col gap-5'>

        <div>
          <input className='outline-none px-2 py-2 bg-slate-300 rounded-l-lg mt-8 w-72 text-black font-bold' type="text" ref={passwordRef} readOnly value={defaultPasswords} />
          <button className={`px-2 py-2 ${buttonColor} rounded-r-lg`} onClick={()=>{
            copyPassword()
            setButtonText("Copied")
            setButtonColor("bg-green-500")
            setTimeout(() => {
              setButtonText("Copy")
              setButtonColor("bg-blue-500")
            }, 1000)
          }}>{buttonText}</button>
        </div>

        <div className='flex gap-2 items-center'>
          <input type="range" min={6} max={100} value={length} onChange={(e)=>{
            setLength(e.target.value)
          }}/> 
          <span className='text-md'>{length}</span>
        </div>

        <div className='flex gap-2'>
          <input type="checkbox" id="numbers" defaultChecked={numberAllowed} onChange={()=>{
            setNumberAllowed((prev) => !prev)
          }}/>
          <label htmlFor="numbers" className='text-md'>Numbers</label>
        </div>

        <div className='flex gap-2'>
          <input type="checkbox" id="character" defaultChecked={hasCharacter} onChange={()=>{
            setCharacter((prev) => !prev)
          }}/>
          <label htmlFor="character" className='text-md'>Special Characters</label>
        </div>

      </div>
    </main>
  )
}

export default App