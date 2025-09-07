import { Link as ScrollLink, Element } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Participante from '../components/ui/Participante';
import Artigo from '../components/ui/Artigo';

function Home() {
    return (
        <>
            <Header/>
            <aside>
                <ul>
                    <li>
                        <ScrollLink to="introducao" smooth={true} duration={500}>Introdução ao projeto</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="definicao" smooth={true} duration={500}>O que é o SCSS?</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="utilidades" smooth={true} duration={500}>Utilidades do SCSS</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="participantes" smooth={true} duration={500}>Participantes do projeto</ScrollLink>
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
                                <li>Outras diversas funcionalidades presentes <ScrollLink to="artigos" smooth={true} duration={500}>nos artigos abaixo.</ScrollLink></li>
                            </ul>
                        </Element>
                        <p>Nós utilizamos o SCSS para agilizar e facilitar o processo de estilização, tornando o entendimento e o
                            visual da folha de estilo muito mais claros. É altamente recomendável utilizá-lo em projetos de grande
                            escala para aprimorar o seu andamento.</p>
                        <p>A linguagem necessita de ser compilada em CSS para funcionar no projeto, pois ela não é lida normalmente na web. Veja o processo completo de instalação <a href="#">neste artigo.</a></p>
                    </section>
                </Element>
                <Element name="participantes">
                    <section id="participantes">
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
                <Element name="artigos">
                    <section>
                        <Artigo
                            titulo="Como instalar e compilar o SCSS?"
                            descricao="Aprenda, neste artigo, a realizar a instalação e configuração completas para utilizar o SCSS em seu projeto web."
                            imagem="artigo1"
                        />
                        <Artigo
                            titulo="SCSS: Funcionalidades básicas e utilização."
                            descricao="Este artigo tem como objetivo ensinar a utilizar o SCSS da melhor forma e apresentar funcionalidades úteis da linguagem."
                            imagem="artigo2"
                        />
                        <Artigo
                            titulo="Mixin: Tornando o seu código mais compacto"
                            descricao="Neste artigo, será ensinado o mixin, um recurso do SCSS que serve como bloco de repetição, assim compactando bastante o seu código."
                            imagem="artigo3"
                        />
                        <Artigo
                            titulo="Como o SCSS pode ser dividido e organizado em vários arquivos?"
                            descricao="O SCSS tem uma funcionalidade de criar vários arquivos para dividir uma estilização em arquivos menores, compilando tudo em um arquivo final, para facilitar organização."
                            imagem="artigo4"
                        />
                        <Artigo
                            titulo="Funções e programação no SCSS"
                            descricao="A linguagem SCSS torna possível criar funções, como em linguagens de programação. Isso permite que algum atributo receba um valor de acordo com as suas especificações."
                            imagem="artigo5"
                        />
                    </section>
                </Element>
            </main>
            <Footer/>
        </>
    )
}

export default Home;