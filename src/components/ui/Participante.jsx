function Participante({ nome, imagem, descricao, participacao, github, linkedin }) {
    return (
        <article>
            <div class="foto-perfil">
                <div id={imagem}></div>
            </div>
            <div class="descricao-participante">
                <h4 class="nome">{nome}</h4>
                <h5 class="participacao">{participacao}</h5>
                <p>{descricao}</p>
            </div>
            <div class="redes">
                <a class="link-linkedin" href={linkedin} target="_blank"></a>
                <a class="link-github" href={github} target="_blank"></a>
            </div>
        </article>
    )
}

export default Participante;