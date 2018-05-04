import React from "react";
import { Link } from "react-router-dom";

import PropTypes from 'prop-types'
import { withRouter } from 'react-router'


const header_style = { 
  'position':'fixed', 
  'backgroundColor': 'transparent',
  'height': '60px',
	'width': '100%',
	"zIndex":"1000",
}

const style_menu_icon = {
	"float":"left",
	"width":"10%",
	"height":"100%",
	"textAlign":"center",
};
const style_svg = {
	// "margin":"20px"
}

const style_anchor = {
	"display": "block",
	"marginTop": "20px",
}

const style_logo = {
	"positon":"relative",
	"float":"right",
	"width":"90%",
	"height":"100%",
};

class _Header extends React.Component {
	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	}

	componentDidMount(){
		console.log(this)
	}

	render(){
		const { match, location, history } = this.props;
		console.log(`You are now at ${location.pathname}`)

		return(
			<header style={ header_style }>
				<div style={ style_menu_icon }>
					<a style={ style_anchor } href="#navigation">
					<svg style={ style_svg } width="22" height="19" viewBox="0 0 22 19">
							<switch>
								<g>
									<polygon points="0.450127877 18.1050725 21.5498721 18.1050725 21.5498721 13.9746377 0.450127877 13.9746377"></polygon>
									<polygon points="0.450127877 5.02536232 21.5498721 5.02536232 21.5498721 0.894927536 0.450127877 0.894927536"></polygon>
									<polygon points="0.450127877 11.5652174 21.5498721 11.5652174 21.5498721 7.43478261 0.450127877 7.43478261"></polygon>
								</g>
								<foreignObject>
									Menu
								</foreignObject>
							</switch>
						</svg>
					</a>
				</div>
				<div style={ style_logo }>
					<Link to="/"><img id="logo-img" src="https://foodoasis.la/assets/images/fola.svg" width="100" alt="FOLA" /></Link>
				</div>
			</header>
		)
	}
};

const Header = withRouter(_Header)
export default Header;