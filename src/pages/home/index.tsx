import Card from '../../componentes/card'
import Header from '../../componentes/header'
import Pedro from "../../assets/Pedro.png"
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
                    nome="Pedro"
                    img={Pedro}
                    email='rm553873@fiap.com.br'
                    rm={553873}
                    />

                    <Card
                    nome="Pedro"
                    img=''
                    email='rm553873@fiap.com.br'
                    rm={553873}
                    />

                    <Card
                    nome="Pedro"
                    img=''
                    email='rm553873@fiap.com.br'
                    rm={553873}
                    />

                    <Card
                    nome="Pedro"
                    img=''
                    email='rm553873@fiap.com.br'
                    rm={553873}
                    />

                    <Card
                    nome="Pedro"
                    img=''
                    email='rm553873@fiap.com.br'
                    rm={553873}
                    />
                </div>
            </section>
        </main>
    )
}

export default Home