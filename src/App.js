import { useState, useEffect } from 'react';

// Components
import Header from './Components/Header';
import DatePicker from './Components/DatePicker';
import Schedule from './Components/Schedule';

/**
 * 預設資料格式如： cached/schedule.json
 * models：取 json 資料用
 */
import {indexMonth, indexByDate} from './model/Schedule';

const WEBSITE_TITLE = '新竹街口攻城獅'

const App = () => {
	const [currentDate, setCurrentDate] = useState('2020-12');
	const history = JSON.parse(sessionStorage.getItem('history')) || [];
	const [paidTicketList, setPaidTicketList] = useState(history);

	useEffect(() => {
		sessionStorage.setItem('history', JSON.stringify(paidTicketList));
	}, [paidTicketList])

	return (
		<div className="container">
			<Header title={WEBSITE_TITLE}/>
			<section className="card__header">
				<h2>賽程表</h2>
				<a href="#">
					聯盟戰況
					<span className="icon">›</span>
				</a>
			</section>
			<div className="datepicker" style={{visibility: Object.keys(indexMonth()).length == 0 ? 'hidden' : ''}}>
				<div className="datepicker__list" style={{width: 133.03 * Object.keys(indexMonth()).length + 'px'}}>
					{ Object.keys(indexMonth()).map((month) => <DatePicker isActive={currentDate == month} date={month} setCurrentDate={setCurrentDate} key={month}/>) }
				</div>
			</div>
			<div className="schedule" style={{visibility: indexByDate(currentDate).length == 0 ? 'hidden' : ''}}>
				<div className="schedule__list" style={{width: 267 * indexByDate(currentDate).length + 'px'}}>
					{ indexByDate(currentDate).map((item) => <Schedule data={item} key={item.id} paidTicketList={ paidTicketList }  setPaidTicketList={ setPaidTicketList }/>)}
				</div>
			</div>
		</div>
	)
}


export default App;