import { Container } from '@/components/Container';
import { ListDetails } from '@/components/ListDetails';
import { Stack } from '@/components/Stack';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
	const { results } = useLoaderData();

	return (
		<Container>
			<main className='main'>
				<Stack direction='column'>
					<Link title='Regresar' to='/' className='back'>
						Regresar
					</Link>

					<Stack direction='column'>
						<h1 className='title'>Detalles del estado de {results.name}</h1>

						<ListDetails results={results} />
					</Stack>
				</Stack>
			</main>
		</Container>
	);
};

export default Details;
