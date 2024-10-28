import React from 'react';
import './Coches.css';

const Coches = () => {
    const coches = [
        { Matricula: '1425BTY', Marca: 'Peugeot', Modelo: '3008', Tipo: 'híbrido' },
        { Matricula: '1762MNY', Marca: 'Mercedes', Modelo: 'EQS', Tipo: 'Diesel' },
        { Matricula: '9882TPK', Marca: 'Renault', Modelo: '4 E-Tech', Tipo: 'Eléctrico' },
        { Matricula: '6634TRV', Marca: 'Volkswagen', Modelo: 'Golf', Tipo: 'Gasolina' },
        { Matricula: '2285RPL', Marca: 'Toyota', Modelo: 'RAV4', Tipo: 'híbrido' },
        { Matricula: '1782PRT', Marca: 'Peugeot', Modelo: '5008', Tipo: 'diesel' },
    ];

    return (
        <div className="mt-3">
            {coches.map((coche, index) => (
                <div key={index} className="StyledTextComponent">
                    {`${coche.Matricula} - ${coche.Modelo} ${coche.Marca} (${coche.Tipo.toLowerCase()})`}
                </div>
            ))}
        </div>
    );
};

export default Coches;