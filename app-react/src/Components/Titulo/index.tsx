interface TituloProps{
    nome: string;
    descricao?: string;
    data: string;
    children?: React.ReactNode;
}

// pode ser tipado de duas formas

//simples
//const Titulo = ({nome, descricao, data}: TituloProps) => {

//complexa
const Titulo: React.FC<TituloProps> = ({nome, descricao, data, children}) => {
    return (
        <>
            {children}
            <h1>Curso de {nome}</h1>
            <h2>Data {data}</h2>
            <h2>Descricao {descricao}</h2>
            
        </>
    );
};

export default Titulo