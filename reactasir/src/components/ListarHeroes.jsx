import React from 'react';

const HeroList = () => {
    const heroes = [
        {
            "superhero": "Batman",
            "publisher": "DC Comics",
            "alter_ego": "Bruce Wayne",
            "first_appearance": "Detective Comics #27",
            "characters": "Bruce Wayne"
        },
        {
            "superhero": "Superman",
            "publisher": "DC Comics",
            "alter_ego": "Kal-El",
            "first_appearance": "Action Comics #1",
            "characters": "Kal-El"
        },
        {
            "superhero": "Flash",
            "publisher": "DC Comics",
            "alter_ego": "Jay Garrick",
            "first_appearance": "Flash Comics #1",
            "characters": "Jay Garrick, Barry Allen, Wally West, Bart Allen"
        },
        // Agrega el resto de los héroes aquí...
    ];

    return (
        <div>
            <h2>Lista de Superhéroes</h2>
            <ul>
                {heroes.map((hero, index) => (
                    <li key={index}>
                        <h3>{hero.superhero}</h3>
                        <p><strong>Editorial:</strong> {hero.publisher}</p>
                        <p><strong>Identidad Secreta:</strong> {hero.alter_ego}</p>
                        <p><strong>Primera Aparición:</strong> {hero.first_appearance}</p>
                        <p><strong>Personajes:</strong> {hero.characters}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HeroList;
