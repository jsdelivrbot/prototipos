import React from 'react';
import { Segment, Popup, Icon, Button, Header, Image, Modal, Checkbox } from 'semantic-ui-react';

const footer_style = {
    height: '10%',
    margin: '0'
}

const about_modal = <Modal trigger={<Icon name='user'></Icon>}>
                        <Modal.Header>Select a Photo</Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                                <Header>Welcome to EverHungry?</Header>
                                <p>Here it is: it's time to eat, and you just can't agree on what kind of food to have. EverHungry? takes the pressure off of you and leaves it up to our state-of-the-art randomizer.</p>
                                <p>EverHungry? defaults to finding food near your current location, but just open the Location dialog to enter the zip code of your choice, and you can find food anywhere.</p>
                                <p>EverHungry? will find foods in a wide range of categories, but you can open the Settings dialog and opt in or out of any of them. EverHungry? will remember your preferences, and use them until you decide to change them.</p>
                                <p>Once you spin the wheel, EverHungry? will select a random food category, and then find and display restaurants of that type nearest to your specified location. You can then click on the Photos button to see pictures that people have posted about that restaurant, or the Directions button to get directions on how to get there.</p>
                            </Modal.Description>
                        </Modal.Content>
                    </Modal>

const map_modal = <Modal trigger={<Icon name='marker'></Icon>}>
                        <Modal.Header>Select a Photo</Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                                <Header>MAP</Header>
                               {
                                   '621'
                               }
                            </Modal.Description>
                        </Modal.Content>
                    </Modal>

const settings_modal = <Modal trigger={<Icon name='setting'></Icon>}>
                        <Modal.Header>Select a Photo</Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                                <Header>Preference?</Header>
                                <p><Checkbox label='sandwich' /></p>
                            </Modal.Description>
                        </Modal.Content>
                    </Modal>

class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            modal: false,
            kik: this.props.map
        }
        console.log('props ', this.props)
    }

    map_modal(){
        //console.log('map kik', this.state.kik)
        return (
            <div>
                <Modal trigger={<Icon name='marker'></Icon>}>
                        <Modal.Header>Select a Photo</Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                                <Header>MAP</Header>
                                { this.state.kik.outerHTML }
                            </Modal.Description>
                        </Modal.Content>
                    </Modal>
            </div>
        )
    }

    render() {
        return (
            <Segment.Group style = { footer_style }>
                <Segment.Group horizontal style = {{ height: '100%' }} >
                    <Segment inverted color='red'>
                        <Icon.Group size='big'>
                            { about_modal }
                        </Icon.Group>
                    </Segment>
                    <Segment inverted color='red'>
                        <Icon.Group size='big'>
                         { this.map_modal() }
                        </Icon.Group>
                    </Segment>
                    <Segment inverted color='red'>
                        <Icon.Group size='big'>
                            { settings_modal }
                        </Icon.Group>
                    </Segment>
                </Segment.Group>
            </Segment.Group>
        );
    }
}

export default Footer;