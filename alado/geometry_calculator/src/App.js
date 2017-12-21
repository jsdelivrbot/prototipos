import React from 'react';
//import 'semantic-ui-css/semantic.min.css'; // in index.html
// import { Select } from 'semantic-ui-css'
const calculator_div_style = {
    'maxWidth':'560px', 
    'height':'360px', 
    'border':'solid 2px black',
    'margin':'0 auto',
    'textAlign':'center',
}

const select_shape_style = {
    'float':'left',
    'width':'49.5%'
}

const select_formula_style = {
    'float':'right',
    'width':'49.5%'
}

const clearfix = {
    'clear':'both'
}

const image_formula_div_style = {
    'height':'59px',
    'verticalAlign': 'middle',
    'lineHeight': '59px',
    'border': 'solid 0.5px'
}

const image_formula = {
    'width':'78px', 
    'height':'22px'
}

const details_div_style = {
    'height':'233px'
}

const image_shape_div = {
    'float':'left',
    'border': 'solid 0.5px',
    'width':'50%',
    'height':'100%',
    'verticalAlign': 'middle',
    'lineHeight': '233px'
}

const image_shape = {
    'maxHeight': '95%',
    'maxWidth': '95%'
}

const input_data = {
    'float':'right',
    'border': 'solid 0.5px',
    'width':'50%',
    'height':'100%',
    'textAlign':'left'
    // 'verticalAlign': 'middle',
    // 'lineHeight': '155px'
}

const input_div = {
    // 'textAlign':'left'
}

const result_label = {
    // marginTop: '10%',
    // marginBottom: '10%',
    // textAlign: 'center'
}


const inputs = number => {
    // array of inputs[area, volume, perimeter] will be looped
    let divs = [];
    for(let i = 0; i < number; i++) {
        let width = '49%';
        if(number === 1 || number === 2) {
            width = '99%';
        }
        let style = { 'display':'inline-block', 'height':'25px', 'marginTop':'2.5%', 'marginLeft':'0.5%', 'marginRight':'0.5%', 'width': width }
        var div =   <div key={ i } style={ style }>
                        <label className="label">{ 'Circumference' }: </label>
                        <input className='input'/>
                    </div>
        divs.push(div);
    }
    return (
        <div>
            { divs }
        </div>
    )
}
const url = '/calculate';
let formData = new FormData();
    formData.append('name', 'Ever')
    formData.append('age', 24)
$.ajax({
    url: url,
    type: 'POST',
    data: formData,
    contentType: false,
    processData: false,
    success:function(data){
        const response = JSON.parse(data);
        console.log('SUCCEsS: ', response)
    },
    error:function(){
        // failed request; give feedback to user
        console.log('ERROR')
    }
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shape: null,
            formula: null,
            needed_values: null,
        }
        this.calculate = this.calculate.bind(this);
        this.calculate_success = this.calculate_success.bind(this);
    }
    calculate(event){
        let shape = 'circle'
        let formula = event.target.value;
            console.log(event.target.parentNode)
        //this.setState({ 'formula':event.target.value })
        // make it work with a promise 
        $.ajax({
            url: '/static/shapes.json',
            success: this.calculate_success
        })
    }

    calculate_success(data){
        let response = JSON.parse(data);
        Object.keys(response).forEach(key => {
            if(shape === key){
                // console.log(key, response[key]);
                response = response[key]
                Object.keys(response).forEach(key => {
                    if(formula === key) {
                        console.log(response[key]);
                        this.setState({ 'needed_values':  response[key] })
                        console.log(this.state.needed_values)
                    }
                })
            }
        });
    }
    render(){
        return (
            <div>
                <div style={ calculator_div_style }>
                    <div>
                        <h1 className="title is-3">Geometry Calculator</h1>
                    </div>
                    <div>
                        <select className="select" style= { select_shape_style }>
                            <option>Circle</option>
                        </select>
                        <select className="select" style={ select_formula_style } onChange={ this.calculate }>
                            <option defaultValue></option>
                            <option value='area'>Area</option>
                            <option value='circumference'>Circumference</option>
                            <option value='diameter'>Diameter</option>
                            <option value='radius'>Radius</option>
                        </select>
                        <div style={ clearfix }></div>
                    </div>
                    <div style={ image_formula_div_style }>
                        <img style={ image_formula }src="https://i.ytimg.com/vi/riNAA-jx0u8/maxresdefault.jpg" />
                    </div>
                    <div style={ details_div_style }>
                        <div style={ image_shape_div } >
                            <img style={ image_shape } src="http://store-images.s-microsoft.com/image/apps.26251.13510798883213349.c74c048e-8bf5-42b5-9825-57104efe5ff6.058ff6e5-b6b5-4bd6-9fcc-4fda6bc214ec?w=180&h=180&q=60" />
                        </div>
                        <div style={ input_data } >
                            <label className="label" style = { result_label }>{ 'Area' }: {'?'}</label>
                            {/* <div>{ 'Area' }: {'?'}</div> */}
                            <div style={{ 'textAlign':'center', 'marginTop':'8%', 'marginBottom':'8%' }}>
                                { inputs(this.state.needed_values) } 
                            </div>
                        </div>
                        <div style={ clearfix }></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;