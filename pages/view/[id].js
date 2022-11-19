import { useRouter } from "next/router"
import { useEffect, useState } from "react";



export default function About() {
  const router = useRouter();
  const {id} = router.query;
  const [data,setData] = useState();

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/product/${id}`
  
  function getData() {
    Axios.get(API_URL).then((res)=>{
      setData(res.data);
    });
  }
  useEffect(()=>{
    if(id && id>0){
      getData();
    }
  },[id])
  
  return (
      <div> Post :{id}</div>
    )
  }
