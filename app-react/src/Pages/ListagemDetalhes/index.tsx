import { useParams, useNavigate, Link } from "react-router-dom";
import BotaoCustom from "../../Components/Botao/botao.styled";

const ListagemDetalhes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h1>Detalhes do Item {id}</h1>
      <BotaoCustom 
        severity="primary" 
        label="Voltar"
        onClick={() => {
            navigate("/listagem");
        }}
        />
    </>
  );
};

export default ListagemDetalhes;