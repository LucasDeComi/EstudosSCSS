function CodePart({ linguagem, codigo }) {
    return (
        <>
            <article className="code-part">
                <div className="code-header">
                    <h2 className="code-language">{linguagem}</h2>
                    <button className="fullscreen-button"><img src="/fullscreen.webp" alt="fullscreen"/></button>
                </div>
                <div className="code">
                    <ul dangerouslySetInnerHTML={{ __html: codigo }} />
                </div>
            </article>
        </>
    )
}

export default CodePart;