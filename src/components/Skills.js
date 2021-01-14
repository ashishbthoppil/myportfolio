import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class Skills extends Component{

    style = {
      marginTop : '10px',
    }

    render(){
        return(
            // <div style={this.style} className="container">
                <div className="row" style={this.style}>
                <div className="col-12 col-md-4" style={{backgroundColor:'#ffd1f4',zIndex : 1,height:'550px',padding:'10px',border: 'solid', borderColor:'grey',borderRadius:'10px',boxShadow: '3px 7px', borderWidth:'1px', marginTop:'72px'}}>
                <h2 style={{height:'1px', textAlign:'center'}}>Skill Set</h2>
                <div style={{marginTop:'55px'}}>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"><strong>PHP (80%)</strong></div>
                    </div>
                    <div className="progress">
                       <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '65%'}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"><strong>Python (65%)</strong></div>
                    </div>
                    <div className="progress">
                       <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '65%'}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"><strong>React.js (65%)</strong></div>
                    </div>
                    <div className="progress">
                       <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><strong>Javascript (75%)</strong></div>
                    </div>
                    <div className="progress">
                       <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"><strong>HTML (80%)</strong></div>
                    </div>
                    <div className="progress">
                       <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><strong>CSS - LESS, SASS (75%)</strong></div>
                    </div>
                    <div className="progress">
                       <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"><strong>MongoDB (60%)</strong></div>
                    </div>
                    <div className="progress">
                       <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><strong>MySQL (75%)</strong></div>
                    </div>
                    <div className="progress">
                       <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"><strong>C (70%)</strong></div>
                    </div>
                    <div className="progress">
                       <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"><strong>C++ (70%)</strong></div>
                    </div>
                    <div className="progress">
                       <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><strong>Linux (75%)</strong></div>
                    </div>
                    <div className="progress">
                       <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"><strong>Git (70%)</strong></div>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-4" style={{marginTop:'72px'}}>
                   <Card style={{backgroundColor:'#ffd1f4', height:'550px',zIndex : 1 ,border:'solid',boxShadow: '3px 7px', borderWidth:'1px', borderRadius:'10px',width:'250px',padding:'5px', margin:'auto'}}>
                      <Card.Img variant="top" style={{borderRadius:'10px', height:'350px'}} src={require('./images/me.jpg')} />
                      <Card.Body>
                      <Card.Title style={{textAlign:'center'}}>Experience</Card.Title>
                        <Card.Text>
                           <p style={{whiteSpace:'pre-wrap'}}><li><strong><u>Reziend IT Consultants </u></strong>{'\n'} <span style={{fontSize:'11px'}}>-Kazhakkoottam, Trivandrum, Kerala</span></li></p>
                           <p style={{fontSize:'10px'}}><strong>Junior Systems Engineer</strong>(1.1 year)
                            Handled the back-end, front-end as well as data corrections. Also experienced with Postman API. </p>
                        </Card.Text>
                      </Card.Body>
                   </Card>
                </div>
                <div className="col-12 col-md-4" style={{zIndex:1, marginTop:'72px'}}>
                   <div className="row">
                <div className="col-12 col-md-12" style={{fontSize:'15px',backgroundColor:'#ffd1f4',height:'370px', padding:'10px',border: 'solid', borderColor:'grey',borderRadius:'10px',boxShadow: '3px 7px', borderWidth:'1px'}}>
                  <h2 style={{textAlign:'center'}}>About me?</h2>
                  <p>Hey there! I am<strong> Ashish Baby Thoppil</strong> . I am a 
                     26 y/o LAMP stack Web Developer. Even Though I am in my early stages, I'm a
                     skilled Developer adept, and still improving in the technologies mentioned in the panel on the
                     left (or above if you are on a mobile device).</p>
                     <p>I am a curious and a fast learner. I always try to think out of the box
                        when it comes to solving problems.
                     </p>
                     <p>Other than Web development, I am also interested in Data Science.
                     </p>
                </div>
                </div>
                <div className="row">
                <div className="col-12 col-md-12" style={{backgroundColor:'#ffd1f4',width:'27em',right:'0px',height:'160px', padding:'10px',border: 'solid', borderColor:'grey',borderRadius:'10px',boxShadow: '3px 7px', borderWidth:'1px', marginTop:'15px'}}>
                <h2 style={{textAlign:'center'}}>Social Links</h2>
                <ul>
                <li className="li-social"><a href="https://www.linkedin.com/in/ashish-thoppil/" target='_blank' className="fa fa-linkedin"></a> - Check out my professional profile!</li>
                <li className="li-social"><a href="https://github.com/ashishbthoppil" target='_blank' className="fa fa-github"></a> - Check out my work here!</li>
                <li className="li-social"><a href = "mailto: ashishbabythoppil@gmail.com" className="fa fa-envelope mail-icon"></a> - Drop me an Email!</li>
                </ul>
                </div>
                </div>
                </div>
                </div>
               // </div>
        )
    }
}

export default Skills;