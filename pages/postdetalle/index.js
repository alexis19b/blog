import styles from '../../styles/post.module.css';
import Link from 'next/link';


export const getStaticProps = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    
    return {
        props: {
            datos: data
        }
    }
}

const Postblog = ({datos}) => {
    return (
        <div className={styles.containerblog}>
            <h1 className={styles.title}>Listado de Articulos</h1>
        
            { datos.map(dato => (
                <Link href={'/postdetalle/' + dato.id} key={dato.id}>
                    
                    <a className= {styles.single}>
                        <h3>{dato.id}.- {dato.title}</h3>
                    </a>
                </Link>

            ))}
        
        </div>
    );
}

export default Postblog;