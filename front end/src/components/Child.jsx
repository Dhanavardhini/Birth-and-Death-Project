// import React from 'react'

// export default function Child ({Aksh}) {
//   return (
//     <div>
//         <div style={{backgroundcolor:"green",textShadow:"0px 0px 20px",color:"blue"}}>
//         <h1>{Aksh}</h1>
//         </div>
//     </div>
//   )
// }


import React from 'react'

export  function Child({Akshu}) {
  return (
    <div><p> <label for="Name">Name:{Akshu}  </label></p></div>
  )
}
export  function Child1({Akshu}) {
    return (
      <div><p> <label for="number">age:{Akshu}  </label></p></div>
    )
  }
  export  function Child2({Akshu}) {
    return (
      <div><p> <label for="Number">phoneno:{Akshu}  </label></p></div>
    )
  }
  export  function Child3({Akshu}) {
    return (
      <div><p> <label for="text number">email:{Akshu}  </label></p></div>
    )
  }

