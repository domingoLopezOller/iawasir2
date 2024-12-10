
export const MostrarHeroe = ({nombre}) => {
    const heroe = heroes.find ((h) => h.superhero.tolowerCase() === nombre.tolowerCase());
    if (!heroe){
        return <p>Heroe no encontrado</p>;
    }
    return (
        <div>
            <h2>{heroe.superhero}</h2>
            <p><strong>Publisher:</strong> {heroe.publisher}</p>
            <p><strong>Alter Ego:</strong> {heroe.alter_ego}</p>
            <p><strong>Primera Aparición:</strong> {heroe.first_appearance}</p>
            <p><strong>Personajes:</strong> {heroe.characters}</p>
        </div>
    );
    };