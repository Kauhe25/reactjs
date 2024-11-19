import styled from "styled-components";
import Listagem from ".";

const ListagemCustom = styled(Listagem)`
        
        table {
            width: 100%;
            border-collapse: collapse;
            border-radius: 8px;
            overflow: hidden;
            margin: 20px 0;
        }
        th, td {
            padding: 10px;
            text-align: left;
            border: 1px solid #ddd;
        }
        th {
            background-color: #333;
            color: #fff;
        }
        tr:nth-child(even) {
            background-color: #f0f8ff; /* Azul bem clarinho */
        }
        tr:nth-child(odd) {
            background-color: #ffffff;
        }
        tr:hover {
            background-color: #e3f2fd; /* Azul um pouco mais forte para hover */
        }
`;

export default ListagemCustom;