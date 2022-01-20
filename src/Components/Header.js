import '../css/header.css'

function Header({title}) {
	return (
		<header>
			<a href="#" className="button-back">‹</a>
			<h1>{title}</h1>
		</header>
	)
}

export default Header;