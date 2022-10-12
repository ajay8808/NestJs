import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
    return (
      <div> 
        <img src="/images/image.png" />
        <Header as="h1">코딩</Header>
        <Gnb/>
        </div>
    )
  }