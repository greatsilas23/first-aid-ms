import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login.js'
import Register from './Register.js'
import Information from './Information.js'
import Invoice from './Invoice.js'
import myStyles from './myStyles.js'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {

            login: {
                display: 'block',
                attr: myStyles.login,
                content: {
                    login: 'login'
                }
            },
            register: {
                display: 'none',
                attr: myStyles.register,
                content: {
                    login: 'register'
                }
            },
            information: {
                display: 'none',
                attr: myStyles.information,
                content: {
                    information: 'information'
                }
            },
            tabview: {
                display: 'block',
                attr: myStyles.tabview,
                content: {
                    login: 'login',
                    information: 'information',
                    register: 'register'
                }
            },
            floatingbar: {
                display: 'block',
                attr: myStyles.floatingbar,
                content: {
                    home: 'home',
                    about: 'about',
                    contact: 'contact'
                }
            },
            sidebar: {
                display: 'none',
                attr: myStyles.sidebar,
                content: {
                    balance: '$0.00',
                    invoice: '$0.00',
                    history: {}
                }
            },
            bodymassindex: {
                display: 'none',
                attr: myStyles.bodymassindex,
                content: {
                    height: 0,
                    weight: 0,
                    bodymassindex: 0
                }
            },
            usercomponent: {
                display: 'none',
                attr: myStyles.usercomponent,
                content: {
                    name: '',
                    phone: '',
                    age: '',
                    height: '',
                    weight: '',
                    allergies: '',
                    vaccinations: ''
                }
            },
            invoice: {
                display: 'none',
                attr: myStyles.invoice,
                content: {
                    amount: '$0.00',
                    tax: '$0.00'
                }
            }
        }
    }
    showLogin = () => {
        this.setState({login.attr.display: 'block'})
        this.setState({register.attr.display: 'none'})
        this.setState({information.attr.display: 'none'})
    }
    showInformation = () => {
        this.setState({login.attr.display: 'none'})
        this.setState({register.attr.display: 'none'})
        this.setState({information.attr.display: 'block'})
    }
    showRegister = () => {
        this.setState({login.attr.display: 'none'})
        this.setState({register.attr.display: 'block'})
        this.setState({information.attr.display: 'none'})
    }
    getInvoice = () => {
        let amount = this.state.invoicecomponent.amount + this.state.invoicecomponent.tax
        this.setState({invoicecomponent.content.invoice: amount})
    }
    getHistory = () => {
        let history = {'14/02/2022', '07/02/2022'}
        this.setState({sidebar.history: history})
    }
    getUser = () {
        let user = {
            name: this.state.usercomponent.content.name,
            age: this.state.usercomponent.content.age,
            height: this.state.usercomponent.content.height,
            weight: this.state.usercomponent.content.weight,
            password: this.state.usercomponent.content.password,
            allergies: this.state.usercomponent.content.allergies,
            vaccinations: this.state.usercomponent.content.vaccinations
        }
        this.setState({usercomponent.content: user})
    }
s~
    get
    render() {
        return(
            <div style={myStyles.root}>
                <FloatingBar
                    isVisible={this.state.floatingbar.display}
                    floatingBar={this.state.floatingbar.attr}
                    home={this.state.floatingbar.content.home}
                    about={this.state.floatingbar.content.about}
                    contact={this.state.floatingbar.content.contact}
                />
                <SideBar
                    isVisible={this.state.sidebar.display}
                    floatingBar={this.state.sidebar.attr}
                    balance={this.state.sidebar.balance}
                    invoice={this.state.sidebar.invoice}
                />
                <TabView
                    isVisible={this.state.tabview.display}
                    tabView={this.state.tabview.attr}
                    login={this.state.tabview.login}
                    information={this.state.tabview.information}
                    register={this.state.tabview.register}
                />
                <Login
                    isVisible={this.state.login.display}
                    login={this.state.login.attr}
                />
                <Information
                    isVisible={this.state.information.display}
                    information={this.state.information.attr}
                />
                <Register
                    isVisible={this.state.register.display}
                    register={this.state.register.attr}
                />
                <BodyMassIndex
                    isVisible={this.state.bodymassindex.display}
                    bodymassindex={this.state.bodymassindex.attr}
                />
                <InvoiceComponent
                    isVisible={this.state.invoicecomponent.display}
                    invoicecomponent={this.state.invoicecomponent.attr}
                />
                <UserComponent
                    isVisible={this.state.usercomponent.display}
                    usercomponent={this.state.usercomponent.attr}
                />
            </div>
        )
    }
}

export default App;
