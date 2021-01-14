import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';

class Projects extends Component{

    constructor() {
        super();
          this.state = {
          firstIsFlipped: false,
          secondIsFlipped : false,
          thirdIsFlipped : false,
          fourthIsFlipped : false,
          fifthIsFlipped : false,
        };
        this.handleFirstClick = this.handleFirstClick.bind(this);
        this.handleSecondClick = this.handleSecondClick.bind(this);
        this.handleThirdClick = this.handleThirdClick.bind(this);
        this.handleFourthClick = this.handleFourthClick.bind(this);
        this.handleFifthClick = this.handleFifthClick.bind(this);
        this.linkClick = this.linkClick.bind(this);
      }

      handleFirstClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ firstIsFlipped: !prevState.firstIsFlipped }));
      }

      handleSecondClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ secondIsFlipped: !prevState.secondIsFlipped }));
      }

      handleThirdClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ thirdIsFlipped: !prevState.thirdIsFlipped }));
      }

      handleFourthClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ fourthIsFlipped: !prevState.fourthIsFlipped }));
      }

      handleFifthClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ fifthIsFlipped: !prevState.fifthIsFlipped }));
      }

      linkClick(e){
        e.stopPropagation();
      }

    style = {
        height : '100vh',
        marginTop : '150px',
        marginBottom : '200px'
    }

    render(){
        return(
            
            <div style={this.style}>
                <h2 style={{marginLeft:'10px', marginBottom : '20px'}}>Projects</h2>
                    <div className="row">
                        <div className="col-12 col-md-3" style={{marginTop:'20px'}}>
                            <ReactCardFlip isFlipped={this.state.firstIsFlipped} flipDirection="vertical">
                                <Card onClick={this.handleFirstClick} style={{height:'526px', backgroundColor:'#ffd1f4',zIndex : 1, cursor:'pointer' ,border:'solid',boxShadow: '3px 7px', borderWidth:'1px', borderRadius:'10px',width:'250px',padding:'5px', margin:'auto'}}>
                                    <Card.Img variant="top" style={{borderRadius:'10px', height:'350px'}} src={require('./images/uthappizza.png')} />
                                <Card.Body>
                                    <Card.Title style={{textAlign:'center'}}>Demo Restaurant Site</Card.Title>
                                    <Card.Text>
                                    <p style={{textAlign:'center'}}>Click on the card for more details</p>
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                                <Card onClick={this.handleFirstClick} style={{backgroundColor:'azure',height : '526px',zIndex : 1, cursor:'pointer' ,border:'solid',boxShadow: '3px 7px', borderWidth:'1px', borderRadius:'10px',width:'250px',padding:'5px', margin:'auto'}}>
                                <Card.Body>
                                    <Card.Title style={{textAlign:'center'}}>Demo Restaurant Site</Card.Title>
                                    <Card.Text>
                                        <p>This is a sample website that I created using <b>React.js</b> as part of my Coursera project. This is the second React.js
                                        project after this portfolio with additions such as routing and usage of states, props and <b>Redux</b>.
                                        </p>
                                        <p><strong>Link</strong> : <a href="https://ashishbthoppil.github.io/ristoranteConFusion" onClick={this.linkClick} target="_blank">Click here</a></p>
                                        <p><strong>Front-end</strong> : React.js</p>
                                      
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                            </ReactCardFlip>
                    </div>
                    <div className="col-12 col-md-3" style={{marginTop:'20px'}}>

                    <ReactCardFlip isFlipped={this.state.secondIsFlipped} flipDirection="vertical">
                    <Card onClick={this.handleSecondClick} style={{backgroundColor:'#ffd1f4',zIndex : 1, cursor:'pointer' ,border:'solid',boxShadow: '3px 7px', borderWidth:'1px', borderRadius:'10px',width:'250px',padding:'5px', margin:'auto'}}>
                            <Card.Img variant="top" style={{borderRadius:'10px', height:'350px'}} src={require('./images/mini-social.jpg')} />
                            <Card.Body>
                            <Card.Title style={{textAlign:'center'}}>Mini Social Media App</Card.Title>
                                <Card.Text>
                                <p style={{textAlign:'center'}}>Click on the card for more details</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
         <Card onClick={this.handleSecondClick} style={{backgroundColor:'azure',height : '526px',zIndex : 1, cursor:'pointer' ,border:'solid',boxShadow: '3px 7px', borderWidth:'1px', borderRadius:'10px',width:'250px',padding:'5px', margin:'auto'}}>
                            <Card.Body>
                            <Card.Title style={{textAlign:'center'}}>Mini Social Media App</Card.Title>
                                <Card.Text>
                                <p>This was a Social Medial App that I created with small functionalities such as following, messaging and posting etc.
                                    This was more or less like a mix of twitter and facebook. This was also a personal project that I did to work on my skills.
                                </p>
                                <p><strong>Back-end</strong> : PHP (Core)</p>
                                <p><strong>Front-end</strong> : HTML</p>
                                <p><strong>Database</strong> : MySQL</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
      </ReactCardFlip>
                        
                    </div>
                    <div className="col-12 col-md-3" style={{marginTop:'20px'}}>
                    <ReactCardFlip isFlipped={this.state.thirdIsFlipped} flipDirection="vertical">
                    <Card onClick={this.handleThirdClick} style={{backgroundColor:'#ffd1f4',height:'526px', zIndex : 1, cursor:'pointer' ,border:'solid',boxShadow: '3px 7px', borderWidth:'1px', borderRadius:'10px',width:'250px',padding:'5px', margin:'auto'}}>
                            <Card.Img variant="top" style={{borderRadius:'10px', height:'350px'}} src={require('./images/training.jpg')} />
                            <Card.Body>
                            <Card.Title style={{textAlign:'center'}}>Training Record</Card.Title>
                                <Card.Text>
                                <p style={{textAlign:'center'}}>Click on the card for more details</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
         <Card onClick={this.handleThirdClick} style={{backgroundColor:'azure',height : '526px',zIndex : 1, cursor:'pointer' ,border:'solid',boxShadow: '3px 7px', borderWidth:'1px', borderRadius:'10px',width:'250px',padding:'5px', margin:'auto'}}>
                            <Card.Body>
                            <Card.Title style={{textAlign:'center'}}>Training Record</Card.Title>
                                <Card.Text>
                                <p>This was a module that I created for my previous company (Hospital Management System). I was solely responsible for the backend and front end work of this module.
                                    This module contained dynamic forms and tables which helped keep track of the training given to the Hospital employees.
                                </p>
                                <p><strong>Back-end</strong> : PHP (Symfony Framework)</p>
                                <p><strong>Front-end</strong> : HTML</p>
                                <p><strong>Database</strong> : MongoDB</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
      </ReactCardFlip>     
                    </div>
                    <div className="col-12 col-md-3" style={{marginTop:'20px'}}>
                    <ReactCardFlip isFlipped={this.state.fourthIsFlipped} flipDirection="vertical">
                    <Card onClick={this.handleFourthClick} style={{backgroundColor:'#ffd1f4',height:'526px', zIndex : 1, cursor:'pointer' ,border:'solid',boxShadow: '3px 7px', borderWidth:'1px', borderRadius:'10px',width:'250px',padding:'5px', margin:'auto'}}>
                            <Card.Img variant="top" style={{borderRadius:'10px', height:'350px'}} src={require('./images/radiology.jpg')} />
                            <Card.Body>
                            <Card.Title style={{textAlign:'center'}}>Radiology Booking and Billing</Card.Title>
                                <Card.Text>
                                    <p style={{textAlign:'center'}}>Click on the card for more details</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
         <Card onClick={this.handleFourthClick} style={{backgroundColor:'azure',height : '526px',zIndex : 1, cursor:'pointer' ,border:'solid',boxShadow: '3px 7px', borderWidth:'1px', borderRadius:'10px',width:'250px',padding:'5px', margin:'auto'}}>
                            <Card.Body>
                            <Card.Title style={{textAlign:'center'}}>Radiology Booking and Billing</Card.Title>
                                <Card.Text>
                                <p>This was a module in a Hospital Management System that I created in my previous company. I was solely responsible
                                    for the frontend and backend of this module. This module dealt with the booking as well as the billing of patients for 
                                    the Radiology department of Hospitals. 
                                </p>
                                <p><strong>Back-end</strong> : PHP (Symfony Framework)</p>
                                <p><strong>Front-end</strong> : HTML</p>
                                <p><strong>Database</strong> : MongoDB</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
      </ReactCardFlip>
                       
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-12 m-auto" style={{marginTop:'20px'}}>
                    <ReactCardFlip isFlipped={this.state.fifthIsFlipped} flipDirection="vertical">
                    <Card onClick={this.handleFifthClick} style={{backgroundColor:'#ffd1f4',zIndex : 1, cursor:'pointer' ,border:'solid',boxShadow: '3px 7px', borderWidth:'1px', borderRadius:'10px',width:'auto',padding:'5px', marginTop : '25px'}}>
                            {/* <Card.Img variant="top" style={{borderRadius:'50px', height:'350px'}} src={require('./images/radiology.jpg')} /> */}
                            <Card.Body>
                            <Card.Title style={{textAlign:'center'}}>Click here for Contact Details!</Card.Title>
                                <Card.Text>
                                    {/* <p style={{textAlign:'center'}}>Click on the card for more details</p> */}
                                </Card.Text>
                            </Card.Body>
                        </Card>
         <Card onClick={this.handleFifthClick} style={{backgroundColor:'azure',color:'black', zIndex : 1, cursor:'pointer' ,border:'solid',boxShadow: '3px 7px', borderWidth:'1px', borderRadius:'10px',width:'auto',padding:'5px', marginTop:'25px'}}>
                            <Card.Body>
                            <Card.Title style={{textAlign:'center'}}>Call or drop an E-mail</Card.Title>
                                <Card.Text>
                                <p><strong>Mobile</strong> : +91 6238330279</p>
                                <p><strong>E-mail</strong> : ashishbabythoppil@gmail.com</p>
                               
                                </Card.Text>
                            </Card.Body>
                        </Card>
      </ReactCardFlip>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;