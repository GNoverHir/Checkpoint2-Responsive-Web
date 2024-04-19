import Card from '../../componentes/card'
import Header from '../../componentes/header'
import Pedro from "../../assets/Pedro.png"
import Cadu from "../../assets/Cadu.png"
import Jhemysson from "../../assets/Jhemysson.png"
import Fernando from "../../assets/Fernando.png"
import './style.css'

const Home = () => {

    return(
        <main>
            <Header/>
            <section>
                <div className='bloco1'>
                </div>

                <div className='bloco2'>
                    <h1>INTEGRANTES</h1>
                    <Card
                    nome="Pedro Lucca"
                    img={Pedro}
                    email='rm553873@fiap.com.br'
                    rm={553873}
                    />

                    <Card
                    nome="Jhemysson Moura Vieira"
                    img={Jhemysson}
                    email='RM552570@fiap.com.br'
                    rm={552570}
                    />

                    <Card
                    nome="Carlos Eduardo"
                    img={Cadu}
                    email='RM553461@fiap.com.br'
                    rm={553461}
                    />

                    <Card
                    nome="Fernando Shinji"
                    img={Fernando}
                    email='RM553587@fiap.com.br'
                    rm={553587}
                    />
                </div>
            </section>
        </main>
    )
}

export default Home