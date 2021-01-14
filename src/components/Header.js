import React, { Component } from 'react';

class Header extends Component{

    headerStyle = {
        backgroundColor : '#350438',
        height : '100vh',
        textAlign : 'center',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        whiteSpace : 'pre-wrap',
        marginTop : '0px'
    }

    introStyle = {
        color : '#eb34e1',
        fontSize : '28px',
        verticalAlign: 'middle'
    }

    firstImageStyle = {
        height:'100%', 
        float:'left'
    }

    render(){
        return(
            <div style={this.headerStyle} className="row">
                <div className="col-8 col-md-8 auto">
                    <p style={this.introStyle}>Hello!<span style={{color:'azure'}}> I am Ashish. {'\n'} I am a {'\n'} Full-stack Web Developer :D {'\n'}
        </span><span style={{fontSize:'10px',position:'relative', bottom:'30px'}}>{'\n'}Click below to check out my profile.</span></p>
                    <button onClick={this.props.focusEle} className='firstBtn'><span className='fa fa-angle-double-down'></span></button>
                </div>
            </div>
        )
    }
}

export default Header;