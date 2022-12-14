import Head from 'next/head'
import { useEffect } from 'react';
import { Divider, Header } from 'semantic-ui-react';
import ItemList from '../src/component/ItemList';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [list,setList] = useState([]);

  const API_URL = 
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

    const getData = () =>{ 
      Axios.get(API_URL).then(res =>{
       
        setList(res.data);
      });
    }
    useEffect(()=>{
      getData();
    },[]);
  return (
    <div>
    <Head> Home </Head>
    <Header as="h3" style={{paddingTop:40}}>베스트 상품 </Header>
    <Divider/>
    <ItemList list={list}/>
    </div>
  )
}
