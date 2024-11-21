import { Link } from "react-router-dom";

interface ListagemProps {
    //label: string;
    //severity: "danger" | "primary" | "secondary" | "warning";
    //onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
  }
  
  const Listagem = ({ className }: ListagemProps) => {

    const itens = [
        {
            id_departamento: 1,
            nome: "Rec Humanos",
            sigla: "RH"
        },
        {
            id_departamento: 2,
            nome: "Tecnologia",
            sigla: "TI"
        },
        {
            id_departamento: 3,
            nome: "Almoxerifado",
            sigla: "AL"
        }
    ];

    return (
        <div className={className}>
            <h1>Listagem</h1>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Setor</th>
                    <th>Sigla</th>
                </tr>

                {itens.map((item) => (
                    <tr>
                        <td><Link to={`${item.id_departamento}`}>{item.id_departamento}</Link></td>
                        <td><Link to={`${item.id_departamento}`}>{item.nome}</Link></td>
                        <td><Link to={`${item.id_departamento}`}>{item.sigla}</Link></td>
                    </tr>
                ))}
            </table>
        </div>
    );
  };
    
export default Listagem;