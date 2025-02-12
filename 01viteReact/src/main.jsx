// import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'



// function myApp(){
//     return(
//         <div>
//             <h1>Custom App !</h1>
//         </div>
//     )
// }

// const anotherElement = (
//     <a href='https://google.com' target='_blank'>Visit Google</a>
// )

// const anotherUser = "Chai aur React"
// const reactElemet = React.createElement(
//     'a',
//     {href: 'https://google.com', target: '_blank'},
//     'Click me to visit google',
//      anotherUser
// )


createRoot(document.getElementById('root')).render(
  
    <App />
    // myApp()
    // anotherElement
    // reactElemet
  
)
