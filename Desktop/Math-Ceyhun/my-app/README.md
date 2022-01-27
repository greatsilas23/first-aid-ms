# ID FINDER SITE

## Project description
The application where you could input your lost ID or passport details and a match is generated if the document was filed into the system. 
Moreover, one could file in found documents  and input their location and the nearest drop off point is generated.

## Author
Angela Koki
Alex Wambugu
Wandia Riunga
Zenat Abdul

## Setup instructions
Assuming you are already on github:

1. On the top right corner of your screen, you should see a button with the text 'Fork'
2. Click on this button to start the process of copying the project/repository to your own account.
3. You will be prompted to choose the account to which you want to fork.
4. Select your account name which should take you to the repo you forked in your account.
5. To know that the forking process is complete, check the top left corner of your repo.
6. You should be in your account in a repo with the same name as the original repository.This shows that the forking process is complete.
7. You can then proceed to clone it to make a copy in a location in your device
8. Open the terminal application. 
9. Navigate to your desired location from the terminal.
10. Run the command: git clone [remote url]
    *(remember to replace 'your-username' in the url with your GitHub username to prevent cloning the wrong repository)
11. Navigate to inside the cloned repository by using the change directory (cd) command. 
12. Open your editor by using the command atom . for Atom users or code . for Visual Studio    Code users.
    You are now ready to make modifications to the project you forked

## Known Bugs and Dependencies
No Known Bugs or dependencies

## BDD
### Feature: File Button
### Description
As a user
I want to click the find button 
So that I can file a document lost

### Scenarios
#### File button clicked:

1. Given the file button is clicked
2.    and document type is selected
3.    and ID details are filed
4.    and location is inputted
5. When the user clicks on Submit
6. Then the nearest drop off point is suggested
7. And a feedback modal pops up to rate the service

### Feature: Find Button
### Description
As a user
I want to click the find button 
So that I can find a lost document

### Scenarios
#### Find button clicked:

1. Given the find button is clicked
2.    and document type is selected
3.    and ID details are filed: name and ID number
4. When the user clicks on Submit
5. Then an alert modal is generated if match has been found or not

#### Match found:

1. Given a match is found
2. Then an alert modal is generated showing the pickup center
3. And the contact details of that center with opening hours are shown
4. A feedback modal pops up to rate the services

#### Match NOT found:

1. Given a match is not found
2. Then an alert modal is generated showing match not found
3. And the user is prompted to leave their contact details
4. A feedback modal pops up to rate the services


## Technologies used
*HTML 
*CSS 
*JAVASCRIPT
*JQUERY
*BOOTSTRAP

## Contact information

Incase of any questions related to this project you can contact the scrum master at angie.dar66@gmail.com

## License and Copyright information 
MIT