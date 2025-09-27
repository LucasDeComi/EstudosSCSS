function Participante({ nome, imagem, descricao, participacao, github, linkedin }) {
    return (
        <article className="participante">
            <div className="social">
                <div className="foto-perfil">
                    <span id={imagem}></span>
                </div>
                <div className="redes">
                    <a className="link-linkedin" href={linkedin} target="_blank"></a>
                    <a className="link-github" href={github} target="_blank"></a>
                </div>
            </div>
            <div className="descricao-participante">
                <h4 className="nome">{nome}</h4>
                <h5 className="participacao">{participacao}</h5>
                <p>{descricao}</p>
            </div>
        </article>
    )
}

export default Participante;