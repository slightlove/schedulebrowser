import dayjs from 'dayjs';
import 'dayjs/locale/zh-tw';
import '../css/components/schedule.css';

function Schedule({data}) {
	const {datetime, place, teams, type, icon} = data;
	return (
		<div className="schedule__item">
			<div className="schedule__item__header">
				<h5 className='title'>{dayjs(datetime).format('MM月DD日（dd）HH:mm')}</h5>
				<div className="type">{type}</div>
				<div className="place">{place}</div>
			</div>
			<div className="schedule__item__body">
				{ teams.length != 0 && teams.map((team, index) => 
					<div className="schedule__list__item" key={index}>
						<div className="image">
							<img className="img-fluid" src={`../images/${team.icon}`} alt="" />
						</div>
						<div className="text">
							<h5>{team.name}</h5>
							<span>{team.score}</span>
						</div>
					</div>
				)}
			</div>
			<div className="schedule__item__footer">
				<div className="buttons">
					<button className="btn btn-main" type="button">查看詳情</button>
					<button className="btn btn-danger" type="button">購票</button>
				</div>
			</div>
		</div>
	)
}

export default Schedule;