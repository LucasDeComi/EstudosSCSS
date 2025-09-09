import { Link } from "react-router-dom";

function Artigo({titulo, imagem, descricao}) {
    return (
        <>
            <Link to={`/${imagem}`}>
                <article className="artigos">
                    <div id={imagem} className="imagem-artigo"></div>
                    <div className="informacoes-artigo">
                        <h4>{titulo}</h4>
                        <p>{descricao}</p>
                    </div>
                </article>
            </Link>
        </>
    )
}

export default Artigo;