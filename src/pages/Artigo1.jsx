import { Link as ScrollLink, Element } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import CodePart from "../components/ui/CodePart";
import Artigo from "../components/ui/Artigo";

function Artigo1() {
    return (
        <>
            <Header />
            <aside>
                <section>
                    <div className="screen-mode">
                        <span></span>
                    </div>
                    <div className="menu-toggle">
                        <span></span>
                        <span></span>
                    </div>
                </section>
                <Nav />
                <ul>
                    <li>
                        <ScrollLink to="titulo" smooth={true} duration={500}>Como instalar o SCSS?</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="passo1" smooth={true} duration={500}>Instalando o Node.js</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="passo2" smooth={true} duration={500}>Instalando o Sass</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="passo3" smooth={true} duration={500}>Compilando o SCSS</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="dica" smooth={true} duration={500}>Dica extra</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="artigos" smooth={true} duration={500}>Nossas outras páginas</ScrollLink>
                    </li>
                </ul>
            </aside>
            <main>
                <Element name="titulo">
                    <section>
                        <h2>Como instalar e compilar o SCSS?</h2>
                        <p>Aprenda, neste artigo, a realizar a instalação e configuração completas para utilizar o SCSS em seu projeto web.</p>
                        <p>Para fazer o uso do SCSS, é necessário instalar o Sass em sua máquina. Porém, para a própria instalação do Sass, há outros passos a serem realizados antes.</p>
                    </section>
                </Element>
                <Element name="passo1">
                    <section>
                        <h3>1. Instalar o Node.js</h3>
                        <p>Dentre as diversas funcionalidades do Node.js, uma delas é rodar o compilador do Sass. Portanto, é essencial ter a tecnologia instalada para começar a utilizar o SCSS.</p>
                        <p>Você pode baixar o Node.js <a href="https://nodejs.org/pt/download" target="_blank">neste link</a>.</p>
                        <p>Após o download do instalador, fazemos a instalação padrão da tecnologia. E depois, é recomendado checar se o Node.js foi realmente instalado.</p>
                        <p>Para fazer a checagem, digitamos no terminal:</p>
                        <CodePart 
                            linguagem="terminal"
                            codigo="
                                <li> node -v </li>
                                <li> npm -v </li>
                            "                                                
                        />
                        <p>Isto deve fazer aparecer as versões, respectivamente, do Node.js e do npm (ferramenta gerenciadora das bibliotecas e ferramentas do Node.js).</p>
                    </section>
                </Element>
                <Element name="passo2">
                    <section>
                        <h3>2. Instalar o Sass</h3>
                        <p>Este passo é a própria instalação do Sass. Nós o instalamos via npm.</p>
                        <p>Para isto, abra o terminal e digite:</p>
                        <CodePart 
                            linguagem="terminal"
                            codigo="
                                <li> npm install -g sass </li>
                            "
                        />
                        <p>Feitos os passos, o Sass está instalado no seu computador. Para fazer a checagem, digite no terminal:</p>
                        <CodePart 
                            linguagem="terminal"
                            codigo="
                                <li> sass --version </li>
                            "
                        />
                        <p>Caso a versão da tecnologia apareça, o Sass foi instalado com sucesso e está pronto para uso.</p>
                    </section>
                </Element>
                <Element name="passo3">
                    <section>
                        <h3>3. Compilar o SCSS</h3>
                        <p>Por fim, agora faremos a utilização do SCSS. Você já deve ter a estrutura do seu projeto pronta e um arquivo .scss. Geralmente, criamos dois diretórios css e scss para dividir os arquivos, como na imagem abaixo:</p>
                        <img className="exemplo-pastas" src="./exemploPastas.webp" alt="Exemplo: Estrutura de pastas" />
                        <p>Com o seu arquivo .scss criado, abra o terminal e digite o comando:</p>
                        <CodePart 
                            linguagem="terminal"
                            codigo="
                                <li> sass --watch scss:css </li>
                            "
                        />
                        <p>No comando acima, 'scss' equivale ao caminho até seu arquivo .scss, e o mesmo vale para o arquivo .css, ele existindo ou não. Caso ele ainda não tenha sido criado, isto será feito automaticamente com o watch.</p>
                        <p>Veja abaixo um exemplo mais prático:</p>
                        <CodePart 
                            linguagem="terminal"
                            codigo="
                                <li> sass --watch scss/style.scss:css/style.css </li>
                            "
                        />
                        <p>Desta forma, cada alteração feita no arquivo .scss será compilada para CSS e digitada no arquivo .css. Caso queira parar isto, aperte Ctrl + C no terminal.</p>
                    </section>
                </Element>
                <Element name="dica">
                    <section>
                        <h3>Dica: Facilitar o processo de "watch"</h3>
                        <p>O comando do watch pode ser confuso para muitas pessoas e, de toda forma, é ineficiente escrever o comando toda vez que for fazer alterações na estilização.</p>
                        <p>Por outro lado, é possível criar um arquivo package.json na raiz do seu projeto. Nele, você vai definir um comando alternativo para fazer o watch.</p>
                        <p>Escreva no arquivo:</p>
                        <CodePart 
                            linguagem="json"
                            codigo='
                                <li>{</li>
                                <ul>
                                    <li><span class="blue">"scripts"</span><span class="pink">: {</span></li>
                                    <ul>
                                        <li><span class="blue">"sass"</span><span class="pink">: </span><span class="yellow">"sass --watch scss:css"</span></li>
                                    </ul>
                                    <li><span class="pink">}</span></li>
                                </ul>
                                <li>}</li>
                            '
                        />
                        <p>Desta forma, o programa entende que "sass" vai realizar o mesmo que "sass --watch scss:css". Para rodar o comando, digite, no terminal:</p>
                        <CodePart 
                            linguagem="terminal"
                            codigo="
                                <li> npm run sass </li>
                            "
                        />
                        <p>É claro que o comando pode ser nomeado com qualquer nome. Além disso, podemos fazer isto com qualquer comando de terminal, o que torna esta funcionalidade do Node.js muito eficiente.</p>
                    </section>
                </Element>
                <Element name="artigos">
                    <section>
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
            <Footer />
        </>
    )
}

export default Artigo1;