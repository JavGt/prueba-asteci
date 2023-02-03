import styles from './ListDetails.module.scss';
import { clsx } from 'clsx';

const ListDetails = ({ results }) => {
	return (
		<ul className={clsx(styles['list-details'])}>
			<li>
				name : <strong>{results.name}</strong>
			</li>
			<li>
				state : <strong>{results.state}</strong>
			</li>
			<li>
				lastreporttime : <strong>{results.lastreporttime}</strong>
			</li>
			<li>
				skydescriptionlong : <strong>{results.skydescriptionlong}</strong>
			</li>
			<li>
				latitude : <strong>{results.latitude}</strong>
			</li>
			<li>
				windspeedkmh : <strong>{results.windspeedkmh}</strong>
			</li>
			<li>
				iconcode : <strong>{results.iconcode}</strong>
			</li>
			<li>
				AGUA : <strong>{results.agua}</strong>
			</li>
			<li>
				skydescriptionlong : <strong>{results.skydescriptionlong}</strong>
			</li>
			<li>
				date-insert : <strong>{results['date-insert']}</strong>
			</li>
			<li>
				ID de la ciudad: <strong>{results.cityid}</strong>
			</li>
			<li>
				validdateutc : <strong>{results.validdateutc}</strong>
			</li>
			<li>
				winddirectioncardinal : <strong>{results.winddirectioncardinal}</strong>
			</li>
			<li>
				probabilityofprecipitation : <strong>{results.probabilityofprecip}</strong>
			</li>
			<li>
				relativehumidity : <strong>{results.relativehumidity}</strong>
			</li>
			<li>
				longitude : <strong>{results.longitude}</strong>
			</li>
		</ul>
	);
};

export default ListDetails;
