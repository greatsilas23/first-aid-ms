import React, { Component } from 'react'
import Styles from './Styles.js'
import ChatComponent from './components/ChatComponent.js'
import QuadraticComponent from './components/QuadraticComponent.js'
class App extends Component {
    //constructor method
    /*
        param: props
    */
	constructor(props){
		super(props)
		this.state = {
			chat: {
				profile: {
					profile: "Silas Nyamwange",
					balance: "AU$0.00",
					status: "Set a status"
				},
				find: {
					hint: "People, groups, messages"
				},
				action: {
					chats: "Chats",
					calls: "Calls",
					contacts: "Contacts",
					notifications: "Notifications"
				},
				toggle: {
					meet: "Meet Now",
					contact: "New Chat"
				},
				deets: {
					one: {
						sender: "Silas Nyamwange",
						sent: "30/12/2021",
						chat: "No answer"
					},
					two: {
						sender: "Meeting with ose",
						sent: "30/12/2021",
						chat: "Silas Nyamwange has made the chat history visible to everyone"
					},
					three: {
						sender: "Victor Mumo",
						sent: "30/11/2018",
						chat: "Missed call"
					}
				}	
			},
			today: {}
		}
	}
	
	render() {
		return(
				<div>			
					<QuadraticComponent />

				</div>
			
		)
	}
}

export default App
	 
