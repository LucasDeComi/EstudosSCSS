import { Link, Element } from 'react-scroll';
import Header from '../components/layout/Header';
import Participante from '../components/ui/Participante';

function Home() {
    return (
        <>
            <Header/>
            <aside>
                <ul>
                    <li>
                        <Link to="introducao" smooth={true} duration={500}>Introdução ao projeto</Link>
                    </li>
                    <li>
                        <Link to="definicao" smooth={true} duration={500}>O que é o SCSS?</Link>
                    </li>
                    <li>
                        <Link to="utilidades" smooth={true} duration={500}>Utilidades do SCSS</Link>
                    </li>
                    <li>
                        <Link to="participantes" smooth={true} duration={500}>Participantes do projeto</Link>
                    </li>
                </ul>
            </aside>
            <main>
                <Element name="introducao">
                    <section>
                        <h2>Bem-vindo ao site de anotações e documentação do SCSS!</h2>
                        <p>Esta página tem como objetivo documentar a linguagem e facilitar o seu aprendizado e desenvolvimento.</p>
                    </section>
                </Element>
                <Element name="definicao">
                    <section>
                        <h3>O que é SCSS?</h3>
                        <p>O SCSS é uma linguagem de estilização em projetos web. A sua função é trabalhar e facilitar o processo de estilização de um site, tornando possíveis:</p>
                        <Element name ="utilidades">
                            <ul>
                                <li>O aninhamento de tags, classes, identificadores, atributos e comportamentos;</li>
                                <li>Criação de funções para atribuição de parâmetros;</li>
                                <li>Manipulação mais ampla de variáveis;</li>
                                <li>Outras diversas funcionalidades presentes <a href="#">nos artigos abaixo.</a></li>
                            </ul>
                        </Element>
                        <p>Nós utilizamos o SCSS para agilizar e facilitar o processo de estilização, tornando o entendimento e o
                            visual da folha de estilo muito mais claros. É altamente recomendável utilizá-lo em projetos de grande
                            escala para aprimorar o seu andamento.</p>
                        <p>A linguagem necessita de ser compilada em CSS para funcionar no projeto, pois ela não é lida normalmente na web. Veja o processo completo de instalação <a href="#">neste artigo.</a></p>
                    </section>
                </Element>
                <Element name="participantes">
                    <section>
                        <h3>Participantes do projeto</h3>
                        <Participante
                            nome="Lucas de Comi Côrte"
                            imagem="lucas"
                            descricao="Estudante de Desenvolvimento de Sistemas, 1o Ano do Ensino Médio"
                            participacao="Fullstack - Coordenador - Designer"
                            github="https://github.com/LucasDeComi"
                            linkedin="https://www.linkedin.com/in/lucas-de-comi-côrte-7090ba363"
                        />
                        <Participante
                            nome="João Pedro Tirso"
                            imagem="tirso"
                            descricao="Estudante de Desenvolvimento de Sistemas, 1o Ano do Ensino Médio"
                            participacao="Backend - HTML - JavaScript"
                            github="https://github.com/JPTirso"
                            linkedin="https://www.linkedin.com/in/jp-tirso-844859380"
                        />
                        <Participante
                            nome="Lorena Correia da Silva"
                            imagem="lorena"
                            descricao="Estudante de Programação de Jogos Digitais, 1o Ano do Ensino Médio"
                            participacao="Frontend - Estilização - Designer"
                            github="https://github.com/lohkk-exe"
                            linkedin="#"
                        />
                        <Participante
                            nome="Matheus do Nacimento Alves Barreto"
                            imagem="matheus"
                            descricao="Estudante de Programação de Jogos Digitais, 1o Ano do Ensino Médio"
                            participacao="Backend - JavaScript"
                            github="https://github.com/Kaisernbt"
                            linkedin="https://www.linkedin.com/in/matheus-do-nascimento-alves-barreto-6aaa26278"
                        />
                    </section>
                </Element>
            </main>
        </>
    )
}

export default Home;