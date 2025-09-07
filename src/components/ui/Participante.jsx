function Participante({ nome, imagem, descricao, participacao, github, linkedin }) {
    return (
        <article>
            <div className="foto-perfil">
                <div id={imagem}></div>
            </div>
            <div className="descricao-participante">
                <h4 className="nome">{nome}</h4>
                <h5 className="participacao">{participacao}</h5>
                <p>{descricao}</p>
            </div>
            <div className="redes">
                <a className="link-linkedin" href={linkedin} target="_blank"></a>
                <a className="link-github" href={github} target="_blank"></a>
            </div>
        </article>
    )
}

export default Participante;