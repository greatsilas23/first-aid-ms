import React, { Component } from "react"
import Styles from "./Styles.js"

class App {
	constructor(props){
		super(props)
		this.state = {
			chat: {
				toggle: "",
				deets: "",	
				profile: "",
				find: "",
				icons: "",
				action: ""
			}
			view: {
				icons: "",
				profile: "",
				action: "",
				deets: {
					meeting:"",
					landlines: ""
				},
				toggle: ""			
			}
		}
	}
	const styles = Styles
	render() {
		return(
			<ChatComponent 
				profileChat = {this.state.chat.profile}
				findChat = {this.state.chat.find}
				iconChat = {this.state.chat.icons}
				actionChat = {this.state.chat.action}
				toggleChat = {this.state.chat.toggle}
				deetsChat = {this.state.chat.deets}
			/>
			<ViewComponent 
				profileMesage = {this.state.view.profile}
				iconMessage = {this.state.view.icon}
				actionMessage = {this.state.view.action}
				toggleMessage = {this.state.view.toggle}
				deetsMessage = {this.state.view.deets}
			/>	
		)
	}
}

export default App
	 
