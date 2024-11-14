import StyledTitulo from "./titulo.styled";

interface TituloProps{
    nome: string;

}

// pode ser tipado de duas formas

//simples
//const Titulo = ({nome, descricao, data}: TituloProps) => {

//complexa
const Titulo: React.FC<TituloProps> = ({nome}) => {
    return (
        <>   
            <h1>{nome}</h1>
            <StyledTitulo>{nome}</StyledTitulo>
        </>
    );
};

export default Titulo