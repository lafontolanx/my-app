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
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            width={50}
            offColor="#333"
            onColor="#333"
            handleDiameter={14}
            activeBoxShadow="0 0 2px 3px #333"
        />
        </Container>
    );
}

export default Menu;