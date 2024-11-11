import './Botao.scss'

enum Severities{
    primary,
    secondary,
    warning
}

interface BotaoProps {
    label: string;
    severity: keyof typeof Severities;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}



const Botao = ({label, severity, onClick}: BotaoProps ) => {
    return(
        <button className={severity} onClick={onClick}>
            {label}
        </button>
    )
}

export default Botao;