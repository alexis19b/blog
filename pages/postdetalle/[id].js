export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    const paths = data.map(dato => {
        return {
            params: {id: dato.id.toString()}
        }
    })

    return {
        paths,
        respaldo: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id);
    const data = await res.json();

    return {
        props:  {datos: data}
    }


}

const Detalle = ({datos}) => {
    return (
        <div>
            <h1>Detalles del Artículo</h1>
            <hr />
            <h2>Articulo: {datos.title}</h2>
            <br />
            <br />
            <p>{datos.body}</p>
            
        </div>
    );
}

export default Detalle;