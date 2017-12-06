import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './modal_carousel/Modal';



const jumbotron = {
    paddingTop: "6rem",
    paddingBottom: "6rem",
    marginBottom: 0,
    backgroundcolor: "#fff"
}

const album = {
    paddingTop: "3rem",
    paddingBottom: "3rem",
}

const card = {
    float: "left",
    width: "33.333%",
    padding: ".75rem",
    marginBottom: "2rem",
    border: 0
  }
  
var thumbnail = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22356%22%20height%3D%22280%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20356%20280%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15f99d16b9b%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15f99d16b9b%22%3E%3Crect%20width%3D%22356%22%20height%3D%22280%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22117.34375%22%20y%3D%22148.1%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
let pics = [thumbnail, thumbnail, thumbnail, thumbnail, thumbnail]
class Services extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal: null
        }
        this.modal_carousel = this.modal_carousel.bind(this);
        this.modals_array = ['Modal1', 'Modal2', 'Modal3', 'Modal4', 'Modal5', 'Modal6', 'Modal7', 'Modal8', 'Modal9']
        this.la_pics = ['https://blogs.chapman.edu/wp-content/uploads/sites/26/2015/01/o-SANTA-MONICA-facebook.jpg', 'http://www.orangemover.com/wp-content/uploads/2015/12/florida-los-angeles.jpg', 'http://static.temblor.net/wp-content/uploads/2017/05/santa-monica-pier-santa-monica-earthquake-1.jpg'];
        this.thumbnail = [thumbnail, thumbnail, thumbnail]
    }
    modal_carousel(card){
        let modal = card.currentTarget.getAttribute('data-target').substring(1);
        console.log(modal);
        this.setState({modal: <Modal modal={ modal } pics={ this.if_modal(modal) } />});
    }
    if_modal(modal){
        if(modal === 'Modal1'){
            return this.thumbnail;
        }
        else if(modal === 'Modal2'){
            return this.la_pics;
        }
        else if(modal === 'Modal3'){
            return this.thumbnail;
        }
        else if(modal === 'Modal4'){
            return this.thumbnail;
        }
        else if(modal === 'Modal5'){
            return this.thumbnail;
        }
        else if(modal === 'Modal6'){
            return this.thumbnail;
        }
        else if(modal === 'Modal7'){
            return this.thumbnail;
        }
        else if(modal === 'Modal8'){
            return this.thumbnail;
        }
        else if(modal === 'Modal9'){
            return this.thumbnail;
        }
    }
    render(){
        return (
            <main role="main">
            { this.state.modal }
                <section className="jumbotron text-center" style={jumbotron}>
                    <div className="container" style={{ "maxWidth": "40rem" }}>
                        <h1 className="jumbotron-heading" style={{ "fontWeight": 300 }}>Lorem ipsum </h1>
                        <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur adipiscing elit senectus, urna penatibus tellus diam tristique himenaeos posuere, nisl habitasse duis aptent tortor lobortis dapibus. Bibendum quisque orci phasellus commodo, arcu laoreet.</p>
                        <p style={{ "marginBottom": 0 }}>
                            <Link className="btn btn-primary" to="/rosario_construction/contact">Contact</Link>
                        </p>
                    </div>
                </section>

                <div className="album text-muted" style={ album }>
                    <div className="container">
                        <div className="row">
                            <div className="card col-sm-12 col-md-4" style={{"width": "20rem"}}>
                                <img onClick={ this.modal_carousel } className="card-img-top" src={ thumbnail } alt="Card image cap" data-toggle="modal" data-target="#Modal1" />
                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card col-sm-12 col-md-4" style={{"width": "20rem"}}>
                                <img onClick={ this.modal_carousel } className="card-img-top" src={ this.la_pics[0] } alt="Card image cap" data-toggle="modal" data-target="#Modal2" />
                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card col-sm-12 col-md-4" style={{"width": "20rem"}}>
                                <img onClick={ this.modal_carousel } className="card-img-top" src={ thumbnail } alt="Card image cap" data-toggle="modal" data-target="#Modal3" />
                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="card col-sm-12 col-md-4" style={{"width": "20rem"}}>
                                <img onClick={ this.modal_carousel } className="card-img-top" src={ thumbnail } alt="Card image cap" data-toggle="modal" data-target="#Modal4" />
                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card col-sm-12 col-md-4" style={{"width": "20rem"}}>
                                <img onClick={ this.modal_carousel } className="card-img-top" src={ thumbnail } alt="Card image cap" data-toggle="modal" data-target="#Modal5" />
                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card col-sm-12 col-md-4" style={{"width": "20rem"}}>
                                <img onClick={ this.modal_carousel } className="card-img-top" src={ thumbnail } alt="Card image cap" data-toggle="modal" data-target="#Modal6" />
                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="card col-sm-12 col-md-4" style={{"width": "20rem"}}>
                                <img onClick={ this.modal_carousel } className="card-img-top" src={ thumbnail } alt="Card image cap" data-toggle="modal" data-target="#Modal7" />
                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card col-sm-12 col-md-4" style={{"width": "20rem"}}>
                                <img onClick={ this.modal_carousel } className="card-img-top" src={ thumbnail } alt="Card image cap" data-toggle="modal" data-target="#Modal8" />
                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card col-sm-12 col-md-4" style={{"width": "20rem"}}>
                                <img onClick={ this.modal_carousel } className="card-img-top" src={ thumbnail } alt="Card image cap" data-toggle="modal" data-target="#Modal9" />
                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Services;