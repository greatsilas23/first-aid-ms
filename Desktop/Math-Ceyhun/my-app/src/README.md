# Math-Ceyhun
## Planning
### Introduction
The logical schedule to be followed in implementing Math-Ceyhun involved several steps such as system request 
### System Request
Math-Ceyhun solves the following problem statement
<b>
	<i>
		Create a website that allows users to log in and register themselves and create questionnaires that are displayed on their profiles as well as awards they have obtained so far. The site should also allow users to directly message other users, contact support team, search for questionnaires and edit their own profiles to add a profile picture. The solution should show a leader-board, a side panel to allow easy navigation and a quick summary of questionnaires completed and total points earned. Finally, the website should allow users to sort questionnaires by category, obtain awards for attempting each questionnaire and display the most frequently attempted questionnaires. 

	</i>
</b>
### Conclusion
In conclusion, while some schedules would lead to an enterprise ready system, the system request required our schedule to carry out further analysis in order to develop a solid business plan for our system
## Analysis
### Introduction
A detailed inspection of requirements needed to produce an enterprice ready system revealed a feasibility analysis and a go/no-go decision
### Feasibility Analysis
<table>
	<tr>
		<td>
			Economic
		</td>
		<td>
			Math-Ceyhun aims to use advertisments in order to cater for a space within the github.io domain
		</td>
	</tr>
	<tr>
		<td>
			Staffing
		</td>
		<td>
			Math-Ceyhun aims to assimilate a CEO, CTO and CS to manage the operations while maintaining funds within the given paydays
		</td>
	</tr>
</table>
### go/no-go decision
<fieldset>
	<legend>Decision</legend>
	<p>Upon hiring new staff members a go/no-go will be implemented</p>
	<input type="checkbox" /><label>go</label><br/>
	<input type="checkbox" /><label>no-go</label> 
</fieldset>
### Conclusion
While it is true to claim that a startup company with more staff members will get higher returns, it is also recommended to use a minimal staffing roster in order to maximize investment returns
## Design
### Introduction
Math-Ceyhun aims to implement a user friendly design that gives forth a system system specification, architecture and rough sketches
### System specification
<table>
	<tr>
		<td>
			Client specification
		</td>
		<td>
			<ol>
				<li>script.js</li>
				<li>Styles.js</li>
				<li>App.js</li>
				<li>ViewComponent.js</li>
				<li>ChatComponent.js</li>
			</ol>
		</td>
	</tr>
	<tr>	
		<td>
			Server specifications
		</td>
		<td>
			Due to staffing no dynamic web applications were able to be hosted
		</td>
	</tr>
</table>
### Architecture
<table>
	<tr>
		<td>
			JSX
		</td>
		<td>
			Math-Ceyhun uses a javascript extended markup language to render a web application
		</td>
	</tr>
</table>
### Conclusion
While some web applications prefer to use HTML, CSS and js to serve clients, Math-Ceyhun was developed using javascript in order to allow easy maintenance
## Implementation
### Introduction
The web app is to be implemented on http://greatsilas23.github.io/Math-Club within the allocated schedule and as a result an implementation schedule, staffing schedule and balance sheet was drafted
### Implementation schedule
<table>
	<tr>
		<td>
			version 1.0
		</td>
		<td>	
			1 Feb, 2022
		</td>
	</tr>
	<tr>
		<td>
			version 1.0.^
		</td>
		<td>
			2 Feb, 2022 - 31 Dec, 2022
		</td>
	</tr>
	<tr>
		<td>
			https://github.com/greatsilas23/
		</td>
		<td>
			<img src="" title="@greatsilas23" alt="github overview" width="20" height="20">
		</td>
	</tr>
</table>
### Staffing schedule
<table>
	<tr>
		<td>
			CEO
		</td>
	</tr>
	<tr>
		<td>
			Company Secretary
		</td>
	</tr>
	<tr>
		<td>
			Chief Technology Officer
		</td>
	</tr>
</table>
### Balance Sheet
<table>
	<tr>
		<td>
			INCOME
		</td>
		<td>
			2022
		</td>
		<td>
			<ol>
				<li> Initial Deposit </li>
				<li> Annual Deposit </li>
			</ol>
		</td>
	</tr>
	<tr>
		<td> 
			EXPENDITURE
		</td>
		<td>
			2022
		</td>
		<td>			
			<ol>
				<li> Domain </li>
				<li> Registrar of companies </li>
				<li> Staff </li>
			</ol>
		</td>
	</tr>
</table>
### Conclusion
While it is claimed that quarterly expenses are easier to manage, Math-Ceyhun approached the income-expenditure with an annual review strategy
## Maintenance
### Introduction
Math-Ceyhun is developed using a javascript approach to serving web apps and this eventually resulted in debugging and testing.
### Debugging
<table>
	<tr>	
		<td>
			App.js
		</td>
		<td>
			index.js
		</td>	
	</tr>
	<tr>
		<td>
			App.js imports several stateless functional jsx and js components from Styles.js, ChatComponent.js and ViewComponent.js
		</td>
		<td>
			index.js uses a require function to install body-parser, express as dependencies to be used within the application
		</td>
	</tr>
</table>
### Testing
<table>
	<tr>
		<td>	
			```bash
				firefox localhost:3000
			```
		</td>
	<tr>
		<td>
			```bash
				cd ~/Desktop/Math-Ceyhun/Math-Club
				npm start
			```
		</td>
	</tr>
</table>
### Conclusion
It is true to claim that system architecture should have hierarchical design in order to allow testing and debuggin to be efficient, Math-Ceyhun aims to implement a serverless architecture that has fewer hierarchical links in preparation for a diversification plan by the CTO
## Security
### Introduction
Our web app aims to deliver an authentic set of files to the client that is free from DOS attacks, phishing, sql and cross-site-scripting attacks
### DOS attacks
```bash
	aircrak-ng *.cap -w *.txt
```
### phishing attacks
```bash
	aireplay-ng --deauth * -a *
```
### sql attacks
```sql
	INSERT INTO * (id,name,value) values ('','','');
```
### cross-site-scripting attacks
```js
	document.getElementById('*').submit("<iframe src=\"javascript:alert(`attacked`)\">")
```
### Conclusion
While it is easy to ignore a security phase when hosting in localhost or github.io domain, Math-Ceyhun found necessary measures to ensure that authentic packets are delivered to the client	
