import dayjs from 'dayjs';
import 'dayjs/locale/zh-tw';
import '../css/components/datepicker.css'

function DatePicker({isActive, date, setCurrentDate}) {
	return (
		<div className={`datepicker__item${isActive ? ' datepicker__item-active' : ''}`} onClick={() => {
			document.querySelector('.schedule').scrollTo({left: 0, behavior: 'smooth'})
			setCurrentDate(date)
		}}>
			{dayjs(date).format('YYYY年MM月')}
		</div>
	)
}

export default DatePicker;