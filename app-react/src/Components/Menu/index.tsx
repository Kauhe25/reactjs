
import { Link } from "react-router-dom";

interface ClasseMenu {
    className?: string;
}
const MenuPersonalizado = ({className}: ClasseMenu) => {
    return (
        
        <div className={className}>
            <Link to="/">HOME</Link>
            <Link to="/formulario">Formulário</Link>
            <Link to="/listagem">Listagem</Link>
        </div>
    );
  };

  export default MenuPersonalizado;