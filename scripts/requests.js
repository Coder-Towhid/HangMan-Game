//making an HTTP request


// const getpuzzle = (wordcount) =>
//     new Promise((resolve, reject)=>{
//       const request = new XMLHttpRequest()

//       request.addEventListener('readystatechange', e =>{
//           if(e.target.readyState === 4 && e.target.status === 200){
//               const data = JSON.parse(e.target.responseText)
              
              
//               resolve(data.puzzle)
          
//           }else if(e.target.readyState === 4){
//               reject('An error has taken place')
        
//           }
//       })
      
//       request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordcount}`)
//       request.send()
//     })
    
    


const getpuzzleold = (wordcount) =>{
   return fetch(`//puzzle.mead.io/puzzle?wordCount=${wordcount}`, {}).then((response)=>{
    if(response.status === 200){
      return response.json()
    }else{
      throw new Error(`Unable to fetch`)
    }
  }).then((data)=>{
    return data.puzzle
  })
}
const getpuzzle = async (wordcount) =>{
  const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordcount}`)
  if(response.status === 200){
    const data = await response.json()
    return data.puzzle
  }else{
    throw new Error(`Unable to fetch`)
  }
 
   
}



  // const getpuzzle = (callback) =>{

  

  
// fetch('http://puzzle.mead.io/puzzle?wordCount=3')
//   .then((response) => response.json())
//   .then((data) => callback(data));

    
// }