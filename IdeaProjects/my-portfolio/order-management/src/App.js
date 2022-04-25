import React, {Component, setState} from 'react'
import Title from './components/Title.js'
import TopMenu from './components/TopMenu.js'
import About from './components/About.js'
import Qualifications from './components/Qualifications.js'
import WorkExperience from './components/WorkExperience.js'
import Skills from './components/Skills.js'
import Projects from './components/Projects.js'
import ContactUs from './components/ContactUs.js'
import logo from './res/logo.png'
import nyamwasEntLogo from './res/nyamwasEntLogo.png'
import menu from './res/menu.png'
import home from './res/home.png'
import about from './res/about~.png'
import projects from './res/projects.png'
import highschool from './res/highschool.jpeg'
import university from './res/university.jpeg'
import college from './res/college.png'
import contacts from './res/contacts.png'
import webDev from './res/webDev.jpg'
import mission from './res/mission.png'
import clerk from './res/clerk.png'
import assistant from './res/assistant.png'
import digitalData from './res/digitalData.png'
import motorVehicle from './res/motorVehicle.png'
import communicationSkills from './res/communicationSkills.png'
import leadership from './res/leadership.png'
import music from './res/music.png'
import academic from './res/academic.png'
import facebook from './res/facebook.png'
import instagram from './res/instagram.png'
import git from './res/git.png'
import availability from './res/availability.jpeg'
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            showTitle: false,
            showTopMenu: false,
            showAbout: false,
            showQualifications: false,
            showWorkExperience: false,
            showSkills: false,
            showProjects: false,
            showContactUs: false,
            root: [
                {content: 'TITLE'},
                {content: 'TOP MENU'},
                {content: 'ABOUT'},
                {content: 'QUALIFICATIONS'},
                {content: 'WORK EXPERIENCE'},
                {content: 'SKILLS'},
                {content: 'PROJECTS'},
                {content: 'CONTACT US'}
            ],
            title: {
                content: 'MY PORTFOLIO',
                description: [
                    {content: 'PORTFOLIO', icon: logo},
                    {content: 'NYAMWAS ENT.', icon: nyamwasEntLogo}
                ]
            },
            topMenu: {
                content: 'MENU',
                description: [
                    {content:'MENU', icon: menu},
                    {content:'HOME', icon: home},
                    {content:'ABOUT', icon: about},
                    {content:'PROJECTS', icon: projects},
                    {content:'CONTACTS', icon: contacts}
                ]
            },
            about: {
                content: 'ABOUT',
                description: [
                    {webDeveloper: 'Silas is a Kenyan web developer based in Nairobi who specializes in remote project', icon: webDev},
                    {mission: 'The world is a global village and the future is in web development and Machine Learning technology.', icon: mission},
                    {availability: 'I am available part time', icon: availability}
                ]
            },
            qualifications: {
                content: 'QUALIFICATIONS',
                description: [
                    {highschool: 'Utumishi Academy 2014 - 2017', icon: highschool},
                    {college: 'Zalego Academy 2018 - 2019', icon: college},
                    {university: 'Jomo Kenyatta University Of Agriculture & Technology 2019 - Present', icon: university}
                ]
            },
            workExperience: {
                content: 'WORK EXPERIENCE',
                description:[
                    {dataEntryFacts: 'August 2019: \n Data Entry Volunteer at African Early Childhood Network (AfECN)\n Correcting Erroneous Facts on early childhood education in Sub Saharan African countries'},
                    {dataEntryForms: 'June 2018:\n Data Entry Volunteer at African Early Childhood Network\nKeeping data on AfECN questionnaires confidential and accurate\n Credited for working with accuracy'},
                    {dataEntryBursary: 'May 2018:\nEntry Clerk in filling bursary applications forms for Higher Education Loans Board\nKeeping data on bursary applications confidential and accurate\n Credited for working with accuracy'},
                    {officeAssistant: 'December 2017 - May 2018:\n Office Assistant at Mobis Link Services\n Handling of office register\n Recieving customer calls and handling of queries\nTaking down orders and forwarding to the sales team\nReceiving and dispatching parcels\n Credited for being a quick learner and a team player with minimum supervision'}
                ]
            },
            skills: {
                content: 'SKILLS',
                description: [
                    {digitalData: 'Proficiency in handling and analyzing digital data', icon: digitalData},
                    {motorVehicles: 'Proficiency in Motor Vehicle Driving (Manual Vehicle) Class B from Automobile Association Kenya', icon: motorVehicle},
                    {communicationSkills: 'Excellent Communication Skills and Proficiency in English Language from exposure to teamwork', icon: communicationSkills},
                    {leadershipSkills: 'Leadership skills obtained when serving as Deputy School Captain in Utumishi Academy ub 2017', icon: leadership},
                    {musicalInstruments: 'Playing of Musical Instruments (Piano and Guitar)', icon: music},
                    {academicSkills: 'Awarded certificates for winning Mathematics Contests and Computer Studies Contests while in 2016 and 2017', icon: academic}
                ]
            },
            projects: {
                content: 'PROJECTS',
                description: [
                    {content: 'Age Guesser', link: 'http://greatsilas23.github.io/Age-Guesser', icon: git},
                    {content: 'Agristores Technologies', link: 'http://greatsilas23.github.io/Agristores-technologies', icon: git},
                    {content: 'Cheki IO', link: 'http://greatsilas23.github.io/ChekiIO', icon: git},
                    {content: 'Order Management System', link: 'http://greatsilas23.github.io/Order-MS', icon: git},
                    {content: 'Financial MS', link: 'http://greatsilas23.github.io/finacial-MS-', icon: git},
                    {content: 'Lyrics Guesser', link: 'http://greatsilas23.github.io/Lyrics-Guesser', icon: git},
                    {content: 'Math Club', link: 'http://greatsilas23.github.io/Math-Club', icon: git},
                    {content: 'Poker', link: 'http://greatsilas23.github.io/myPokerTH', icon: git}
                ]
            },
            contactUs: {
                content: 'CONTACT US',
                description: [
                    {content: 'Instagram', link: 'http://instagram.com/silas.n_', icon: instagram},
                    {content: 'Facebook', link: 'http://instagram.com/silas.dopelimitlesity', icon: facebook}
                ]
            }
        }
    }
    handleShow = (item) => {
        setState({item: true})
    }
    handleHide = (item) => {
        setState({item: false})
    }
    render(){
        return(
            <div className="App">
	            <Title titleDescription={this.state.title.description}/>
	            <TopMenu topMenuDescription={this.state.topMenu.description}/>
                <MenuItem handleClick={this.handleShow(this.state.showAbout)} />
	            {this.state.showAbout && <About aboutDescription={this.state.about.description}/>}
	            <MenuItem handleClick={this.state.handleShow(this.showQualifications)} />
	            {this.state.showQualifications && <Qualifications  qualificationsDescription={this.state.about.description}/>}
	            <MenuItem handleClick={this.state.handleShow(this.showWorkExperience)} />
	            {this.state.WorkExperience && <WorkExperience workExperienceDescription={this.state.workExperience.description}/>}
	            <MenuItem handleClick={this.handleShow(this.state.showSkills)} />
	            {this.state.showSkills && <Skills skillDescription={this.state.skills.description}/>}
	            <MenuItem handleClick={this.handleShow(this.state.showProjects)} />
	            {this.state.showProjects && <Projects projectsDescription={this.state.projects.description}/>}
	            <MenuItem handleClick={this.handleShow(this.state.showContactUs)} />
	            {this.state.showContactUs && <ContactUs contactUsDescription={this.state.contactUs.description}/>}
            </div>
        )
    }
}

export default App
