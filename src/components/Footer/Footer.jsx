import './Footer.scss'

const Footer = () => {
	return (
		<div className="Footer">
			<div className="Footer-left">
				<p>Active tasks: 0</p>
				<p>Finished tasks: 0</p>
			</div>
			<div className="Footer-right">
				<p>React Kanban board by Igor Zakharov, 2021</p>
			</div>
		</div>
	)
};

export default Footer;