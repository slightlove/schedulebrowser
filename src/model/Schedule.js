import Schedule from '../cached/schedule.json';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-tw'

dayjs.locale('zh-tw');

const indexMonth = () => {
	let temp = {};
	Schedule.forEach(item => {
		let date = dayjs(item.datetime).format('YYYY-MM');
		if (typeof temp[date] == 'undefined') temp[date] = [item]
		else temp[date].push(item);
	});
	return temp;
}

const indexByDate = (date) => {
	let data = indexMonth();
	return data[date];
}


export {indexMonth, indexByDate}