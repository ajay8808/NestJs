import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import ItemList from '../src/component/ItemList';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [list,setList] = useState([]);

  const API_URL = 
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

    const getData = () =>{
      Axios.get(API_URL).then(res =>{
        console.log(res);
        setList(res.data);
      });
    }
    useEffect(()=>{
      getData();
    },[]);
  return (
    <div>
    <Head> Home </Head>
    <div> create-next-app</div>
    <ItemList list={list}/>
    </div>
  )
}
