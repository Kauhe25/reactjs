import styled from "styled-components";
import MenuPersonalizado from ".";

const MenuCustomizado = styled(MenuPersonalizado)`
        display: flex;
        justify-content: start;
        background-color: #333;
        top: 0;
        width: 100%;
        padding: 10px 0;
        z-index: 1000;
        align-items: first baseline;
        
        a {
            color: white;
            text-decoration: none;
            padding: 10px 20px;
            transition: background-color 0.3s;
        }

        a:hover {
            background-color: #555;
        }
`;


export default MenuCustomizado;