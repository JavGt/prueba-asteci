import { isProbablyToRain, formatterDate } from '@/utils';
import { Link } from 'react-router-dom';

const TableHome = ({ data, caption }) => {
	return (
		<div>
			<table>
				<caption>{caption}</caption>
				<thead>
					<tr>
						<th>_id</th>
						<th>cityid</th>
						<th>name</th>
						<th>state</th>
						<th>probabilityof precip</th>
						<th>relativehu midity</th>
						<th>Lastreportt ime</th>
						<th>LLUEVE</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={item._id}>
							<td>
								<Link to={`/details/${item._id}`}>{item._id}</Link>
							</td>
							<td>{item.cityid}</td>
							<td>{item.name}</td>
							<td>{item.state}</td>
							<td>{item.probabilityofprecip}</td>
							<td>{item.relativehumidity}</td>
							<td>{formatterDate(item.lastreporttime)}</td>
							<td>
								{isProbablyToRain(item.probabilityofprecip, item.relativehumidity)
									? 'Lloverá'
									: 'No lloverá'}
							</td>
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr>
						<td colSpan='8'>
							Total de registros: <strong>{data.length}</strong>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
};

export default TableHome;
