import { Link } from "react-router-dom";

interface ListagemProps {
    //label: string;
    //severity: "danger" | "primary" | "secondary" | "warning";
    //onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
  }
  
  const Listagem = ({ className }: ListagemProps) => {
    return (
        <div className={className}>
            <h1>Listagem</h1>
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>Idade</th>
                </tr>
                
                
                <tr>
                    <td><Link to="111">Fulano</Link></td>
                    <td>Silva</td>
                    <td>16</td>
                </tr>
                <tr>
                    <td><Link to="222">Beltrano</Link></td>
                    <td>Silva</td>
                    <td>17</td>
                </tr>
                <tr>
                    <td><Link to="333">Ciclano</Link></td>
                    <td>Silva</td>
                    <td>18</td>
                </tr>
                
            </table>
        </div>
    );
  };
    
export default Listagem;