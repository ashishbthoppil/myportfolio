import React, { Component } from 'react';
import Header from './Header';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import scrollToComponent from 'react-scroll-to-component';
import classNames from 'classnames';
import Fade from 'react-reveal/Fade';

class Main extends Component{

    state = {
        active : 'main'
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount(){
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll(){
            if(window.scrollY < '500'){
                this.setState({
                    active: 'main'
                })
            }else if(window.scrollY > '500' && window.scrollY < '1000'){
                this.setState({
                    active: 'skills'
                })
            }else if(window.scrollY > '1200' && window.scrollY < '1800' ){
                this.setState({
                    active: 'education'
                })
            }else if(window.scrollY > '1800'){
                this.setState({
                    active: 'project'
                }) 
            }
    }

    

    focusFunc = (e) => {
        
        if(e.target.classList[1] == 'main'){
            scrollToComponent(this.Header)
        }else if(e.target.classList[1] == 'education'){
            scrollToComponent(this.Education)
        }else if(e.target.classList[1] == 'project'){
            scrollToComponent(this.Projects)
        }else if(e.target.classList[1] == 'skills'){
            scrollToComponent(this.Skills)
        }
    }

    focusFuncFromButton = (e) => {
        scrollToComponent(this.Skills)
    }


    render(){
        return(
            <div>
                <div className='jumbotron' style={{zIndex:2}}>
                    <nav className="navbar navbar-dark navbar-expand-lg" style={{backgroundColor:"#350438", color:"#eb34e1"}}>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item"><a className={classNames("nav-link main", this.state.active == 'main' ? 'active' : '')} onClick={this.focusFunc} style={{cursor:'pointer', fontWeight:'bold'}}>Main</a></li>
                                <li className="nav-item"><a className={classNames("nav-link skills", this.state.active == 'skills' ? 'active' : '')} onClick={this.focusFunc} style={{cursor:'pointer', fontWeight:'bold'}}>Skills</a></li>
                                <li className="nav-item"><a className={classNames("nav-link education", this.state.active == 'education' ? 'active' : '')} onClick={this.focusFunc} style={{cursor:'pointer', fontWeight:'bold'}}>Education</a></li>
                                <li className="nav-item"><a className={classNames("nav-link project", this.state.active == 'project' ? 'active' : '')} onClick={this.focusFunc} style={{cursor:'pointer', fontWeight:'bold'}}>Projects</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <Fade>
                <Header ref = {(element) => this.Header = element} focusEle={this.focusFuncFromButton}/>
                </Fade>
                <div className="container">
                <Fade bottom>
                <Skills ref = {(element) => this.Skills = element}/>
                </Fade>
                <Fade bottom>
                <Education ref = {(element) => this.Education = element}/>
                </Fade>
                <Fade bottom>
                <Projects ref = {(element) => this.Projects = element} />
                </Fade>
                </div>
                </div>
            
        )
    }
}

export default Main;