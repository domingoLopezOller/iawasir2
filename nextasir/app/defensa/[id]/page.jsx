import { fetchData } from "@/componentes/funciones";
import { notFound } from "next/navigation";
import ModalComponent from "@/componentes/Modal"; // Ajusta la ruta si es necesario

export const metadata = {
  title: "Detalle del POkEMON",
  icons: { icon: '/pokeball.png' }
}

export default async function Page({ params }) {
  const { id } = await params;
  if (id <= 0 || id > 1000) {
    return notFound();
  }
  let pokemon = null;
  try {
    pokemon = await fetchData({ id });
  } catch (error) {
    console.error("Error fetching data: ", error);
    return notFound();
  }

  // Definir las variables para el modal
  const numero= pokemon.numero;
  const modalTitle = `Número: ${pokemon.numero} - ${pokemon.nombre}`;
  const modalBodyContent = (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <img src={pokemon.img} alt={pokemon.nombre} />
      <h4>HP:{pokemon.hp} - Ataque:{pokemon.ataque} - Defensa:{pokemon.defensa}</h4>
    </div>
  );
  

  return (
    <>
      
      <ModalComponent 
        numero={numero}
        title={modalTitle}
        bodyContent={modalBodyContent}
      />
    </>
  );
}
