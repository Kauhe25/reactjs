import styled from "styled-components";
import Formulario from ".";

const FormularioCustom = styled(Formulario)`

        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: green;
        }
        input, select, button {
            width: 140px;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
            display: block;
        }

`;

export default FormularioCustom;