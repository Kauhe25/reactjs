import BotaoCustom from "../../Components/Botao/botao.styled";

interface FormularioProps {
    //label: string;
    //severity: "danger" | "primary" | "secondary" | "warning";
    //onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
  }
  
  const Formulario = ({ className }: FormularioProps) => {
    return (
        
        <div className={className}>
            <h1>Formulário</h1>
            <div>
                <label>
                    Nome
                    <input type="text" id="nome" name="nome" placeholder="Digite seu nome" ></input>
                </label>
            </div>
            <div>
                <label>
                    Sobrenome
                    <input type="text" id="sobrenome" name="sobrenome" placeholder="Digite seu sobrenome" ></input>
                </label>
            </div>
            <div>
                <label>
                    Idade
                    <input type="number" id="idade" name="idade" placeholder="Digite sua idade" min="0" ></input>
                </label>
            </div>
            <BotaoCustom label="Enviar" severity="primary"/>
        </div>
    );
  };
    
export default Formulario;