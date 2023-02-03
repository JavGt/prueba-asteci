import { Container } from '@/components/Container';
import { TableHome } from '@/components/TableHome';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
	const { results } = useLoaderData();

	return (
		<Container>
			<main className='main'>
				<h1>
					Información de las condiciones <strong>atmosféricas</strong>
				</h1>

				<p>
					<strong>Nota:</strong> se puede agregar mas datos agregando un numero al final
					de la url, por ejemplo:
					<br />
					<Link to='/100'>
						<strong>http://127.0.0.1:3000/100</strong>
					</Link>
				</p>

				<TableHome
					caption={
						<>
							Tabla de condiciones <strong>atmosféricas</strong>
						</>
					}
					data={results}
				/>
			</main>
		</Container>
	);
};

export default Home;
