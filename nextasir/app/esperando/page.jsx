var sleep = function(ms){ return new Promise(resolve => setTimeout(resolve, ms));};
export default function Page() {

    return (
        <>
        {sleep(3000)}
        <h1>PÁGINA QUE ESPERARÁ 3 segundos PARA MOSTRARSE</h1>
        </>
    );
}