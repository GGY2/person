import React, { Component } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import './Person.css';

class Person extends Component{
    constructor(){
    super();
        this.state = {
            fullName: 'Paul van Dyk',
            bio: `is a German DJ, record producer and musician. 
            One of the first true renowned DJs, van Dyk was the 
            first artist to receive a Grammy Award nomination 
            in the newly added category of Best Dance/Electronic 
            album for his 2003 release Reflections...`,
            profession: ['DJ', 'Musician', 'Record Producer', 'Actor'],
            image: '/images/man.jpg',
            isHidden: false, 
            counter: 0
        }; 
    }

toggle = () => this.state.isHidden ? this.setState({isHidden: false, counter: 0}) : this.setState({isHidden: true, counter: 0})

componentDidMount(){
    setInterval(() => {
        this.setState({counter: this.state.counter + 1})
    }, 1000);
};

    render(){
        return(
            <>
            <div className='left'>
            {!this.state.isHidden ? (
            <Card style={{
                width: '400px', 
                height: 'auto',
                padding: '40px 30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                border: 'none'
                }}>
                <Card.Img variant="top" src={this.state.image} style={{
                    height: '200px',
                    width: '200px', 
                    objectFit: 'cover',
                    borderRadius: '50%'
                    }} />
                <Card.Body>
                    <Card.Title>
                        <h4>{this.state.fullName}</h4>
                    </Card.Title>
                    <Card.Text>
                        {this.state.profession.map((skill, index) => {
                            return(
                                <Badge style={{marginRight: '5px'}} key={index}>{skill}</Badge>    
                            )
                        })}
                        <p style={{textAlign: 'justify', marginTop: '30px', marginBottom: '0'}}>{this.state.fullName} {this.state.bio}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            ) : <div style={{
                width: '400px', 
                minHeight: '100px',
                padding: '40px 30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                border: 'none',
                backgroundColor: '#ffff',
                borderRadius: '8px',
                color: 'rgb(51, 51, 51, 0.6)'
            }}>Profile is hidden</div>}
            
            </div>
            <div className='right'>
                {/* <h1 style={{fontWeight: 'bolder', color: 'rgb(255 142 174)', marginBottom: '20px', fontSize: '100px', textAlign: 'right'}}>GGG</h1> */}
            <div style={{display: 'flex', 
            flexDirection: 'row', 
            width: '400px', 
            marginBottom: '20px', 
            borderRadius: '8px', 
            gap: '20px'}}>
                <div style={{
                    width: '100%', 
                    height: '50px', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    backgroundColor:'#ffff',
                    borderRadius: '8px'
                    }}>Last {!this.state.isHidden ? 'mounted' : 'unmounted'}</div>
                <div style={{
                    width: '100%', 
                    height: '50px', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    backgroundColor:'#ffff',
                    borderRadius: '8px'}}><Badge bg="primary">{this.state.counter}</Badge></div>
            </div>
            <Card style={{ width: '400px', height: 'auto', padding: '15px', border: 'none' }}> 
                <Card.Body>
            <div className="d-grid gap-2">
                <Button variant='primary' onClick={this.toggle}>Toggle Profile</Button>
            </div>
                </Card.Body>
            </Card>
            <div style={{
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center',
            width: '400px', 
            marginTop: '20px', 
            borderRadius: '8px', 
            gap: '20px',
            height: '50px', 
            backgroundColor: '#ffff'}}>seconds ago</div>
            </div> 
            </>
        );
    }
}
export default Person;