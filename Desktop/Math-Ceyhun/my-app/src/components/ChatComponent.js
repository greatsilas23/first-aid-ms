import React from 'react'
import Styles from '../Styles.js'
import chat from '../res/chat.jpg'
import calls from '../res/calls.svg'
import contacts from '../res/contacts.png'
import notifications from '../res/notifications.png'
import meet from '../res/meet.png'
import contact from '../res/contact.jpg'
import find from '../res/find.png'
import profile from '../res/profile.png'
import navigation from '../res/navigation.jpg'
function ChatComponent(props){
	return(
	<div>
		<div style={Styles.chat.profile.container.navigation}>
			<div>				
				<img src={navigation} width="20" height="20" alt="profile" title="profile" />		
			</div>
			<div style={Styles.chat.profile.container.main}>		
			<div style={Styles.chat.profile.container.profile}>
				<img src={profile} width="20" height="20" alt="profile" title="profile" />	
			</div>
			<div style={Styles.chat.profile.container.one}>
				<div style={Styles.chat.profile.container.two}>
					<div style={Styles.chat.profile.item.profile}>
						<p>
							{props.chatProfile.profile}
						</p>
					</div>
					<div style={Styles.chat.profile.item.balance}>
						<p>
							{props.chatProfile.balance}
						</p>
					</div>
				</div>
				<div style={Styles.chat.profile.container.three}>
					<div style={Styles.chat.profile.item.status}>
						<p>
							{props.chatProfile.status}
						</p>
					</div>
				</div>
			</div>
		</div>			
		</div>
				
		<div style={Styles.chat.find.container.one}>
			<div style={Styles.chat.find.container.two}>
					<input type="search" style={Styles.chat.find.query} placeholder={props.chatFind.hint}/>
			</div>
			<div style={Styles.chat.find.container.three}>	
				<div style={Styles.chat.find.find}>
				<img src={find} width="20" height="20" />				
			
				</div>
			</div>
		</div>
		<div style={Styles.chat.action.container}>
			<div style={Styles.chat.action.item}>
				<img src={chat} width="20" height="20" alt={props.chatAction.chats} title={props.chatAction.chats}/>				
			</div>
			<div style={Styles.chat.action.item}>
				<img src={calls} width="20" height="20" alt={props.chatAction.calls} title={props.chatAction.calls}/>				
			</div>
			<div style={Styles.chat.action.item}>
				<img src={contacts} width="20" height="20" alt={props.chatAction.contacts} title={props.chatAction.contacts}/>				
			</div>
			<div style={Styles.chat.action.item}>
				<img src={notifications} width="20" height="20" alt={props.chatAction.notifications} title={props.chatAction.notifications}/>				
			</div>
		</div>		
		<div style={Styles.chat.toggle.container}>
			<div style={Styles.chat.toggle.item}>
				<img src={meet} width="20" height="20" alt={props.chatToggle.meet} title={props.chatToggle.meet}/>				
			</div>
			<div style={Styles.chat.toggle.item}>
<img src={contact} width="20" height="20" alt={props.chatToggle.contact} title={props.chatToggle.contact}/>					
			</div>
		</div>
		<p>CHATS</p>
		<div style={Styles.chat.deets.container.main}>
			<div style={Styles.chat.deets.container.chat}>
				<div style={Styles.chat.deets.container.profile}>
					<img src={profile} width="20" height="20" alt="profile" title="profile" />	
				</div>
							
				<div style={Styles.chat.deets.container.one}>
				<div style={Styles.chat.deets.container.two}>
					<div style={Styles.chat.deets.item.sender}>
						<p>
							{props.chatDeets.one.sender}
						</p>
					</div>
					<div style={Styles.chat.deets.item.balance}>
						<p>
							{props.chatDeets.one.sent}
						</p>
					</div>
				</div>
				<div style={Styles.chat.deets.container.three}>
					<div style={Styles.chat.deets.item.chat}>
						<p>
							{props.chatDeets.one.chat}
						</p>
					</div>
				</div>
			</div>			
			</div>
			<div style={Styles.chat.deets.container.chat}>
				<div style={Styles.chat.deets.container.profile}>
					<img src={profile} width="20" height="20" alt="profile" title="profile" />	
				</div>
							
					
				<div style={Styles.chat.deets.container.one}>
					<div style={Styles.chat.deets.container.two}>
						<div style={Styles.chat.deets.item.sender}>
							<p>
							{props.chatDeets.two.sender}
							</p>
						</div>
						<div style={Styles.chat.deets.item.balance}>
							<p>
							{props.chatDeets.two.sent}
							</p>
						</div>
					</div>
				<div style={Styles.chat.deets.container.three}>
					<div style={Styles.chat.deets.item.chat}>
						<p>
							{props.chatDeets.two.chat}
						</p>
					</div>
				</div>
			</div>
			</div>
			<div style={Styles.chat.deets.container.chat}>
				<div style={Styles.chat.deets.container.profile}>
					<img src={profile} width="20" height="20" alt="profile" title="profile" />	
				</div>
							
		
				<div style={Styles.chat.deets.container.one}>
					<div style={Styles.chat.deets.container.two}>
						<div style={Styles.chat.deets.item.sender}>
							<p>
							{props.chatDeets.three.sender}
							</p>
						</div>
						<div style={Styles.chat.deets.item.balance}>
							<p>
							{props.chatDeets.three.sent}
							</p>
						</div>
					</div>
					<div style={Styles.chat.deets.container.three}>
						<div style={Styles.chat.deets.item.chat}>
							<p>
							{props.chatDeets.three.chat}
							</p>
						</div>
					</div>
				</div>		
			</div>
		</div>
        </div>
    )
}
export default ChatComponent
