import React from "react";
import Header from "../../Components/Header";
import { Background, Imagem, Title} from "./styles";


function Home() {
    return (
        <div>
            <Header />
            <Background>
             <Title>DELÍCIAS <br/>SALGADOS</Title>
            </Background>
        </div>
    )
}
export default Home;