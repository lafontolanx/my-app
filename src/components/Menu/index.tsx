import React, { useEffect, useState } from "react";

import { Container } from "./styles";

import Switch from 'react-switch'

interface IProps {
    onChange: (checked: boolean) => void;
}

const Menu: React.FC<IProps> = ({ onChange }) => {

    const [check, setCheck] = useState(false);

    const toggleSwitch = () => {
        let newValue = !check;
        setCheck(newValue);
        onChange(newValue);
    }

    return (
        <Container>
        <h3>Tutorial de temas com React</h3>
        <Switch 
            onChange={toggleSwitch}
            checked={check}
        />
        </Container>
    );
}

export default Menu;