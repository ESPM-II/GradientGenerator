import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";
import { IoCopyOutline } from "react-icons/io5";
import { Tooltip } from 'react-tippy';

import 'react-tippy/dist/tippy.css';


import './Gradient.css';

const Gradient = () => {
    const [color1, setColor1] = useState(randomcolor());
    const [color2, setColor2] = useState(randomcolor());
    const [output, setOutput] = useState('');

    useEffect(() => {
        const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
        document.body.style.background = gradient;
        setOutput(`background: ${gradient};`);
    }, [color1, color2]);

    const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "color1") {
            setColor1(value);
        } else if (name === "color2") {
            setColor2(value);
        }
    };

    const handleRandomClick = () => {
        setColor1(randomcolor());
        setColor2(randomcolor());
    }

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(output)
            .then(() => {
                alert("¡Texto copiado al portapapeles!");
            })
            .catch((err) => {
                console.error('Error al copiar al portapapeles: ', err);
            });
    }

    return (
        <div className="gradient">
            <h1> Tittle </h1>
            <div className="colorPicker">
                <input type='color' name='color1' value={color1} onChange={handleChangeColor} />
                <input type='color' name='color2' value={color2} onChange={handleChangeColor} />
            </div>
            <button className="btnRandomGradient" onClick={handleRandomClick}>Generar gradiente aleatoria</button>
            <div className="outputCode">
            <code style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

            <Tooltip title="Copiar al portapapeles" position="bottom">
                <div onClick={handleCopyToClipboard}>
                    {output}
                    &nbsp;<IoCopyOutline className="icon" style={{color: "gray", cursor: "pointer", fontSize: "20px", marginTop: "10px" }} />
                </div>
            </Tooltip>
</code>

            </div>
        </div>
    );
}

export default Gradient;
