import React from 'react';
//import 'semantic-ui-css/semantic.min.css'; // in index.html
// import { Select } from 'semantic-ui-css'
const calculator_div_style = {
    'maxWidth':'560px', 
    'height':'360px', 
    // 'border':'solid 2px black',
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
    // 'border': 'solid 0.5px'
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
    // 'border': 'solid 0.5px',
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
    // 'border': 'solid 0.5px',
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

const Inputs = (props) => {
    // console.log(props)
    return(
        <div>
            {
                props.values.map( (value, index) => {
                    let width = '49%';
                    if(props.values.length === 1 || props.values.length === 2) {
                        width = '99%';
                    }
                    let style = { 'display':'inline-block', 'height':'25px', 'marginTop':'2.5%', 'marginLeft':'0.5%', 'marginRight':'0.5%', 'width': width }
                    let div =   <div key={ index } style={ style }>
                                    <label className="label">{ value }: </label>
                                    <input className='input'/>
                                </div> 
                    return div     
                })
            }
        </div>
    )
}


const Select = (props) => {
    if(!props.options){
        return (
            <div></div>
        )
    }
    return (
        <select className="select" style={ select_shape_style } onChange={ props.method }>
            {
                props.options.map((option, index) => {
                    let section_text = option[0].toUpperCase() + option.slice(1);
                    if(index === 0){
                        option = <option key={ index } value={ option } defaultValue>{ section_text }</option>;
                    }
                    else{
                        option = <option key={ index } value={ option }>{ section_text }</option>;
                    }
                    return option
                })          
            }
        </select>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.data = null;
        fetch('/static/shapes.json')
            .then(response => response.json())
            .then(data => {
                this.data = data
                this.select()
            })      

        this.state = {
            all_shapes: null,
            formulas_for_shapes: ["area", "circumference", "diameter", "radius"],
            current_shape: 'circle',
            current_formula: 'area',
            needed_values: ["radius"],
            image_formula: 'static/formula_images/circle/area.png'
        }
        // this.select();

        this.calculate = this.calculate.bind(this);
        // this.calculate_success = this.calculate_success.bind(this);
        this.select = this.select.bind(this);
        // this.select_success = this.select_success.bind(this);
        this.find_formulas = this.find_formulas.bind(this);
        this.image_formula = this.image_formula.bind(this);
        // this.find_formulas_success = this.find_formulas_success.bind(this);
    }

    select(){
        console.log('lol', this.data)
        let options = [];
        Object.keys(this.data).forEach(key => {
            options.push(key);
        })
        this.setState({ 'all_shapes': options })
    }

    find_formulas(event){
        event.target.parentNode.children[1].selectedIndex = 0;
        let shape = event.target.value;
        let formulas = [];  
        Object.keys(this.data).forEach(key => {
            if(shape === key) {
                Object.keys(this.data[key]).forEach(key => {
                    formulas.push(key)
                })
                this.setState({ 'formulas_for_shapes': formulas })
                this.setState({ 'current_shape': shape })
                this.setState({ 'current_formula': formulas[0] })
                this.image_formula(shape, formulas[0])
            }
        })
    }

    calculate(event){
        let shape = this.state.current_shape;
        let formula = event.target.value;
        let response = this.data
        Object.keys(response).forEach(key => {
            if(shape === key){
                response = response[key];
                Object.keys(response).forEach(key => {
                    if(formula === key) {
                        console.log(response[key])
                        this.setState({ 'current_formula':formula })
                        this.setState({ 'needed_values':  response[key] })
                        this.image_formula(shape, formula)
                    }
                })
            }
        });
    }

    image_formula(shape, formula){
        const src = `static/formula_images/${shape}/${formula}.png`
        this.setState({ "image_formula":src });
    }

    render(){
        console.log(this.state)
        return (
            <div>
                <div style={ calculator_div_style }>
                    <div>
                        <h1 className="title is-3">621</h1>
                    </div>
                    <div>
                        <Select options={ this.state.all_shapes } method={ this.find_formulas }/>
                        <Select options={ this.state.formulas_for_shapes } method={ this.calculate }/>
                        <div style={ clearfix }></div>
                    </div>
                    <div style={ image_formula_div_style }>
                        <img style={ image_formula }src={ this.state.image_formula } />
                        {/* <img style={ image_formula }src="https://i.ytimg.com/vi/riNAA-jx0u8/maxresdefault.jpg" /> */}
                    </div>
                    <div style={ details_div_style }>
                        <div style={ image_shape_div } >
                            <img style={ image_shape } src="" />
                            {/* <img style={ image_shape } src="http://store-images.s-microsoft.com/image/apps.26251.13510798883213349.c74c048e-8bf5-42b5-9825-57104efe5ff6.058ff6e5-b6b5-4bd6-9fcc-4fda6bc214ec?w=180&h=180&q=60" /> */}
                        </div>
                        <div style={ input_data } >
                            <label className="label" style = { result_label }>{ this.state.current_formula }: {'?'}</label>
                            {/* <div>{ 'Area' }: {'?'}</div> */}
                            <div style={{ 'textAlign':'center', 'marginTop':'8%', 'marginBottom':'8%' }}>
                                {/* { inputs(["radius"]) }  */}
                                <Inputs values={ this.state.needed_values }/>
                            </div>
                        </div>
                        <div style={ clearfix }></div>
                    </div>
                </div>
            </div>
        )
    }
}

        // $.ajax({
        //     url: '/static/shapes.json',
        //     success: this.calculate_success
        // })


        //     // const request = new XMLHttpRequest();
//     // request.open('post', url, true);

//     // request.onload = function() {
//     //     if(request.status >= 200 && request.status < 400) {
//     //         console.log(request);
//     //         var response = request.response;
//     //         console.log('SUCCESS: ', response);
//     //     }
//     //     else {
//     //         console.log('Target reached but error');
//     //     }
//     // }
    
//     // request.onerror = function() {
//     //     console.log('ERROR')
//     // }
//     // request.send();

// fetch('/static/shapes.json')
//     .then(response => response.json())
//     .then(data => console.log(data))
export default App;