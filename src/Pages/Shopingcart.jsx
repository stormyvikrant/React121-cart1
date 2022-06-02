import axios from "axios"
import { useEffect, useState } from "react"
export const ShoppingCart=()=>{

  const [data,setData]=useState([])
  const [list, setList]=useState(data)

  function handleRemove(id){
    console.log(id)
    const newList=data.filter((item)=>item.id!==id);
    console.log(newList)
    setData(newList)
    
    
  }
useEffect(()=>{

    axios({

        url:"http://localhost:3000/cart",
        method: "GET"
    })
    .then((res)=>{
        setData(res.data)
    })
},[])
//console.log(data)
return (
    <div  style={{gap:"2rem", marginTop:"10px"}}>
        {data.map((item)=>(<div key={item.id} >
            <div ><img src={item?.image} style={{width:"50px", height:"50px"}} /></div>
<div>{item?.details}</div> 
<div>{item?.model} <br /></div>
 <div> Rs{item?.price}<br /><br /> </div>  
<div style={{display:"flex",justifyContent:"flex-end"}}> <button  onClick={() => handleRemove(item.id)} style={{width:"100px",backgroundColor:"black",color:"white",borderRadius:"50px",fontSize:"15px"}}>Remove Item</button></div>
        </div>))}
</div>

)

}