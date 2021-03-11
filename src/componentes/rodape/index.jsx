import React from 'react';

const Rodape = ({texto}) => {
    return (
        <footer className="text-center" style={{ marginTop : '70px'}}>
                <h1>{texto === undefined ? "Classificados" : texto}</h1>
                <small>Desenvolvido por <a>Grupo 3 Senai</a></small>
        </footer>
    )
}

export default Rodape;