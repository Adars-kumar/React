import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  // userRef hook
  const passwordRef = useRef(null)


  // useCallback is a React Hook that lets you cache a function definition between re-renders.
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}?`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);   // Concatenate or append value
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,51)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed,charAllowed,passwordGenerator])

  

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-20 text-orange-500 bg-gray-800">

        <h1 className="text-white
        text-center my-3">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-8 bg-white text-gray-800">
          <input
           type="text"
           value={password}
           className="outline-none w-full py-1 px-3"
           placeholder="Password"
           readOnly
           ref={passwordRef}
           />
           <button
           onClick={copyPasswordToClipboard}
           className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
           >copy</button>

        </div>
        <div className="flex text-sm gap-x-6">

           {/* Length */}
          <div className="flex items-center gap-x-1">
            <input
             type="range"
             min={8}
             max={50}
             value={length}
             className="cursor-pointer"
             onChange={(e) => {setLength(e.target.value)}}
             />
             <label htmlFor="">Length: {length}</label>
          </div>

          {/* Numbers */}
          <div className="flex items-center gap-x-1">
            <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() =>{
              setNumberAllowed((prev) => !prev)  // make reverse of previous value
            }}
            />
             <label htmlFor="numberInput">Numbers</label>
          </div>

          {/* Characters */}
          <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  );
}

// difference between useEffect and useCallback

// Do something when the component renders/updates, Side-effect hook	-- useEffect  
// Memoize functions from being re-created on rerenders, Performance optimization hook	-- useCallback


export default App;
