import React from "react";

class Resources extends React.Component {
    componentDidMount(){
        document.querySelector('header').style.backgroundColor = "rgb(241, 241, 241)";
        document.querySelector('main').style.paddingTop = "60px";
        document.querySelector('#logo-img').style.display = "block";
    }
    render(){
        return(
            <div>Resources</div>
        )
    }
};

export default Resources;