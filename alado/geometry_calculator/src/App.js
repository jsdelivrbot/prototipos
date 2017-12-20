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

// multiple_inputs = {
//     'width':'100%',
// }

const inputs = (number) => {
    let divs = [];
    let multiple_inputs = null;
    if(number === 1){
        multiple_inputs = {
            'width':'100%',
        }
    }
    if(number === 2){
        multiple_inputs = {
            'width':'50%',
        }
    }
    for(let i = 0; i < number; i++) {
        var div =  <div key={ i } style={ multiple_inputs }>
                    <label className="label">{ 'Circumference' }: </label>
                    <input className='input'/>
                </div>
        divs.push(div);
    }

    const url = '/signUpUser';
    console.log(url)
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
    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    // ---------------------------------------
    // const request = new XMLHttpRequest();
    // request.open('post', url, true);

    // request.onload = function() {
    //     if(request.status >= 200 && request.status < 400) {
    //         console.log(request);
    //         var response = request.response;
    //         console.log('SUCCESS: ', response);
    //     }
    //     else {
    //         console.log('Target reached but error');
    //     }
    // }
    
    // request.onerror = function() {
    //     console.log('ERROR')
    // }
    // request.send();

    return (
        <div>
            { divs }
        </div>
    )
}

// const Images = (props) => {
//     console.log(props.pics)
//     let img = props.pics.map((src, index) => {
//         let image = null;
//         if(index === 0){
//             image = <div className="carousel-item active" style={{ height: 'auto' }} key={ index } >
//                         <img className="d-block w-100" src={ src } alt="First slide" />
//                     </div>  
//         }
//         else{
//             image = <div className="carousel-item" style={{ height: 'auto' }} key={ index } >
//                         <img className="d-block w-100" src={ src } alt="First slide" />
//                     </div>
//         }
//         return image;
//     })
//     return (
//         <div>
//            { img }
//         </div>
//     );
// }

class App extends React.Component {
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
                            <option>Square</option>
                            <option>Triagle</option>
                        </select>
                        <select className="select" style={ select_formula_style }>
                            <option>Circle</option>
                            <option>Square</option>
                            <option>Triagle</option>
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
                            <label className="label">{ 'Area' }: {'?'}</label>
                            {/* <div>{ 'Area' }: {'?'}</div> */}
                            { inputs(2) } 
                        </div>
                        <div style={ clearfix }></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;