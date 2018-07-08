import React from "react";
import { Link } from "react-router-dom";

import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

const style_container = { 
    "position":"relative",
    "width":"100%",
    'minHeight':'100vh',  
    'color':'white', 
    'backgroundSize':'cover', 
    'backgroundImage':'url("https://foodoasis.la/assets/images/photos/farmers-market/santa-monica-downtown/7.jpg")',
    'textAlign': 'center',
}

const style_innerdiv = {
    "position":"absolute",
    "top":"50%",
    "left":"50%",
    "transform": "translate(-50%, -50%)",
    "width":"75%",
}

// const style_search = {

//     "display": "block",
//     "padding": "0.375em 5em 0.375em 0.75em",
//     "borderRadius": "0.25em",
//     "maxWidth": "100%",
//     "boxSizing": "borderBox",
//     "background": "white",
//     "color": "#B1B1B1",
//     "position": "relative",
//     "borderWidth": "0",
//     "textDecoration": "none",
//     "fontSize": "1.5em",
//     "textAlign": "left",
//     "fontFamily": "Reem Kufi, Helvetica Neue, Helvetica, sans-serif",
// }

// const style_icon_search = {
//     "content": "",
//     "background": "rgb(144, 194, 70)",
//     "backgroundImage": "url('https://foodoasis.la/assets/images/icons/search.svg')",
//     "backgroundSize": "contain",
//     "backgroundRepeat": "noRepeat",
//     "backgroundPosition": "center",
//     "borderTopRightRadius": "0.25em",
//     "borderBottomRightRadius": "0.25em",
//     "height": "100%",
//     "position": "absolute",
//     "paddingLeft": "0.75em",
//     "paddingRight": "0.75em",
//     "top": "0",
//     "right": "0",
// }
const style_span_input = {
    'marginTop':'50px',
    'marginBottom':'50px',
    'position':'relative',    
}

let input_font = '1.7em';
let style_search_icon_width = '10%';
if (/Mobi/.test(navigator.userAgent)) {
    input_font = '1.3em';
    style_search_icon_width = '20%';    
}

const style_input = {
    'display':'block',
    'width':'88%',
    'height':'65px',
    'borderTopLeftRadius': '10px',
    'borderBottomLeftRadius': '10px',
    'fontSize':input_font,
    'paddingLeft':'3%',
    'color':'#B1B1B1',
}

const style_search_icon = {
    'position':'absolute', 
    'height':'100%',
    'top': '0',
    'right':'0%',
    'background': 'rgb(144, 194, 70)',
    'borderTopRightRadius': '10px',
    'borderBottomRightRadius': '10px',
    'cursor':'pointer',
    'width':style_search_icon_width,
}

const style_paragraph = {
    'fontSize':'1.3em'
}

class _Main extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    componentDidMount(){
        this.scroll_event();
        let self = this;
        window.addEventListener('scroll', function(){
            self.scroll_event();
        })
    }

    scroll_event(){
        if(window.location.pathname === '/' && window.pageYOffset < 275){
            document.querySelector('header').style.backgroundColor = "transparent";
            document.querySelector('main').style.paddingTop = "";    
            document.querySelector('#logo-img').style.display = "none";
            document.querySelector('#header-title').style.display = "none";
            document.querySelector('#navigation').style.backgroundColor = "rgb(144, 194, 70)";
            
        }
        else if(window.location.pathname === '/') {
            document.querySelector('header').style.backgroundColor = "rgb(241, 241, 241)";
            document.querySelector('#logo-img').style.display = "block";
            document.querySelector('#header-title').style.display = "block";
        }
    }
    
    render(){
        return (
            <div style={ style_container }>
                <div style={ style_innerdiv }>
                    <img src="https://foodoasis.la/assets/images/fola.svg" width="100" alt="FOLA" />      
                    <div style={ style_paragraph } >Welcome to your Food Oasis, Los Angeles.</div>
                    {/* <p className="search"><a style={ style_search } href="/resources/">Find healthy food <span style={ style_icon_search }></span></a></p> */}
                    <div style={ style_span_input }><input style={ style_input } placeholder="Find Healthy Food"/><img style={ style_search_icon } src="https://foodoasis.la/assets/images/icons/search.svg" /></div>
                    <p  style={ style_paragraph } className="about">Food Oasis LA (FOLA) shows you places to find healthy food in Los Angeles&nbsp;– whether you are looking to buy, grow, or need access to free&nbsp;food. <Link to="/about">Learn more</Link></p>
                </div>
            </div>
        )
    }
};

const Main = withRouter(_Main)
export default Main;