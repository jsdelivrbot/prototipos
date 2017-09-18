import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

const header_style = {
    height: '10%',
    margin: '0'
}

const _Header = () => (
   
        <Segment.Group style = { header_style }>
          <Segment inverted color='red' style = {{ height: '100%' }}>
            <Header as='h1'>
              ever hungry?
            </Header>
          </Segment> 
        </Segment.Group>       
    
)

export default _Header