const btn= document.querySelector(".button");
btn.addEventListener("click",()=>{
    fetch("https://dummyjson.com/quotes")
.then((data)=>data.json())
.then((result)=>{
     const output=result.quotes[7].quote
    document.getElementById("document").innerHTML=output
    
})
.catch((error)=>
    console.log(error)
);
    
  })

