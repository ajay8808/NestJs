import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
    return (
      <div style={{diplay:"flex",paddingTop:20}}>
        <div style={{flex:"100px 0 0"}}>
        <img src="/images/image.png" style={{display:"block", width:80}} />
        <Header as="h1">코딩</Header>
        <Gnb/>
        </div>
        </div>
    )
  }