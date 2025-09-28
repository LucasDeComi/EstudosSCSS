import { Link } from "react-router-dom";

function Artigo({titulo, imagem, descricao}) {
    return (
        <>
            <article className="artigos">
                <Link to={`/${imagem}`}>
                    <span id={imagem} className="imagem-artigo"></span>
                    <div className="informacoes-artigo">
                        <h4>{titulo}</h4>
                        <p>{descricao}</p>
                    </div>
                </Link>
            </article>
            
        </>
    )
}

export default Artigo;