import React from 'react'
import PortfolioHeading from './PortfolioHeading.js'
import PortfolioStyles from './PortfolioStyles.js'

const PortfolioSummary = () => {
    return(
        <div>
           <PortfolioHeading />


           			<div class="mainContainer">
           				<div>
           					<center>
           						<h3>CONTENTS</h3>
           						<hr>
           					</center>
           				</div>
           				<div class="leftNav">
           					<a class="quickLink" href="#projects">PROJECTS</a><br>
           					<a class="quickLink" href="#about">ABOUT</a><br>
           					<a class="quickLink" href="#cv">CURRICULUM VITAE</a><br>
           					<a class="quickLink" href="#grading">GRADING</a><br>
           					<a class="quickLink" href="#contacts">CONTACTS</a>
           				</div>
           				<div id="home" class="mainContent noShadow">
           					<div id="projects" class="homeContainer">
           						<center>
           							<h3>PROJECTS</h3>
           						</center>
           						<hr class="horizontalRule">
           						<div id="myProjectsContainer" class="flexify horiz paddingAdd scrollStuff">
           							<div class="card colorYellow marginAdd" onclick="window.location.href='https://github.com/greatsilas23/Age-Guesser'">
           								<center>
           									<h3>AGE GUESSER</h3>
           	                                <img height="80" width="80" src="./git.png" alt="github"title="@greatsilas23">
           	                            </center>
           							</div>
           							<div class="card colorYellow marginAdd" onclick="window.location.href='https://github.com/greatsilas23/Agristores-technologies'">
           								<center>
           									<h3>AGRISTORES-TECHNOLOGIES</h3>
           	                                <img height="80" width="80" src="./git.png" alt="github"title="@greatsilas23">
           	                            </center>
           							</div>
           							<div class="card colorYellow marginAdd" onclick="window.location.href='https://github.com/greatsilas23/ChekiIO'">
           								<center>
           									<h3>CHEKI-IO</h3>
           	                                <img height="80" width="80" src="./git.png" alt="github"title="@greatsilas23">
           	                            </center>
           							</div>
           							<div class="card colorYellow marginAdd" onclick="window.location.href='https://github.com/greatsilas23/'Order-MS">
           								<center>
           									<h3>ORDER-MANAGEMENT SYSTEM</h3>
           	                                <img height="80" width="80" src="./git.png" alt="github"title="@greatsilas23">
           	                            </center>
           							</div>
           							<div class="card colorYellow marginAdd" onclick="window.location.href='https://github.com/greatsilas23/financial-MS'">
           								<center>
           									<h3>FINANCIAL MS</h3>
           	                                <img height="80" width="80" src="./git.png" alt="github"title="@greatsilas23">
           	                            </center>
           							</div>
           							<div class="card colorYellow marginAdd" onclick="window.location.href='https://github.com/greatsilas23/Lyrics-Guesser'">
           								<center>
           									<h3>LYRICS GUESSER</h3>
           	                                <img height="80" width="80" src="./git.png" alt="github"title="@greatsilas23">
           	                            </center>
           							</div>
           							<div class="card colorYellow marginAdd" onclick="window.location.href='https://github.com/greatsilas23/Math-Club'">
           								<center>
           									<h3>MATH CLUB</h3>
           	                                <img height="80" width="80" src="./git.png" alt="github"title="@greatsilas23">
           	                            </center>
           							</div>
           							<div class="card colorYellow marginAdd" onclick="window.location.href='https://github.com/greatsilas23/myPokerTH'">
           								<center>
           									<h3>POKER</h3>
           	                                <img height="80" width="80" src="./git.png" alt="github"title="@greatsilas23">
           	                            </center>
           							</div>
           						</div>
           					</div>
           					<div id="about" class="homeContainer">
           						<center>
           							<h3>ABOUT</h3>
           						</center>
           						<hr class="horizontalRule">
           						<p>Full Name: Silas Nyamwange</p>
           						<p>Github Homepage:
           							<a href="https://github.com/greatsilas23">
           								greatsilas23
           							</a>
           						</p>
           						<p>Github Username: greatsilas23</p>
           						<p>
           							I am a Kenyan web application developer based in Nairobi. I do remote tasks in web development as the world is now a global village. The future of web development is in Machine Learning technology
           						</p>
           					</div>
           					<div id="cv" class="homeContainer">
           						<center>
           							<h3>CV</h3>
           						</center>
           						<hr class="horizontalRule">

           						<h3>RESUME FOR SILAS NYAMWANGE</h3>
           						<hr class="horizontalRule">
           						<strong>Contact Details</strong>
           						<hr class="horizontalRule">
           						<p>
           							MR. SILAS NYAMWANGE
           							nsilasn@gmail.com,
           							P. O. Box 26049 - 00100,
           							NAIROBI.
           							Mobile Number: +254746569079
           						</p>

           						<strong>Brief Summary</strong>
           						<hr class="horizontalRule">
           						<p>
           							A 20 year old Kenyan citizen who is highly independent and dedicated in sharpening his skills in IT, social work and community development
           						</p>

           						<strong>Career Objective</strong>
           						<hr class="horizontalRule">
           						<p>
           							To excel as a dependable service provider in an ever changing technological environment.
           							To nurture talent and skill through improved academic pursuits for excellent service provision.
           							To use acquired knowledge and skills for the service of the community and enhanced development.
           						</p>
           						<strong>Academic Qualifications</strong>
           						<hr class="horizontalRule">
           						<p>
           							2019 - 2021: Jomo Kenyatta University Of Agriculture And Technology (JKUAT) B. Sc. Computer Science
           							2014 February - 2018 December: Utumishi Academy. Kenya Certificate of Secondary Education (KCSE). Awarded A minus (A-).
           							2006 January - 2013 December: Nairobi Primary School. Kenya Certificate of Primary Education (KCPE). Awarded 416/500 Marks.
           						</p>
           						<strong>OTHER QUALIFICATIONS</strong>
           						<hr class="horizontalRule">
           						<p>
           							Training in Computer Packages (Microsoft Office).
           							Training in Android Application Development (Android Studio).
           							Training in Certified Ethical Hacking (Ubuntu Plattform).
           							Training in Database Management (MySQL)
           						</p>
           						<strong>Previous Work Experience</strong>
           						<hr class="horizontalRule">
           						<p>
           							August 2019: Data Entry Volunteer at African Early Childhood Network (AfECN).
           							Correcting Erroneous Facts on early childhood education in Sub Saharan African countries.

           							2018 May: Data Entry Clerk in filling bursary applications forms for Higher Education Loans Board.
           							Keeping data on bursary applications confidential and accurate.
           							Was credited for working with accuracy.


           							2017 December - 2018 May: Office Assistant at Mobis Link Services Kitengela
           							Handling of office register.
           							Receiving customer calls and handling of queries.
           							Taking down orders and forwarding to the sales team.
           							Receiving and dispatching parcels.
           							Was credited for being a quick learner and a team player with minimum supervision.
           						</p>


           						<strong>SUMMARY OF IMPORTANT SKILLS</strong>
           						<hr class="horizontalRule">
           						<p>
           							Good work ethic and trustworthiness while working as a Delivery Partner with UBER (Australia).
           							Proficiency in handling and analyzing digital data.
           							Proficiency in Motor Vehicle Driving (Manual Vehicle) Class B from Automobile Association Kenya.
           							Excellent Communication Skills and Proficiency in English Language from exposure to teamwork in Kenya and Australia.
           							Leadership skills from serving as Deputy School Captain in Utumishi Academy in 2017.
           							Playing of Musical Instruments (Piano and Guitar).
           							Awarded several certificates for winning Mathematics Contests and Computer Studies Contests while at highschool.

           							June 2018: Data Entry Volunteer at African Early Childhood Network (AfECN).
           							Keeping data on AfECN questionnaires confidential and accurate.
           							Was credited for working with accuracy.

           							Availability: Part time (Before and After College Classes)
           						</p>
           					</div>


           					<div id="grading" class="homeContainer">
           						<center>
           							<h3>GRADING</h3>
           						</center>
           						<hr class="horizontalRule">
           						<strong>Academic Qualifications</strong>
           						<hr class="horizontalRule">
           						<p>
           							2019 - 2021: Jomo Kenyatta University Of Agriculture And Technology (JKUAT) B. Sc. Computer Science
           							2014 February - 2018 December: Utumishi Academy. Kenya Certificate of Secondary Education (KCSE). Awarded A minus (A-).
           							2006 January - 2013 December: Nairobi Primary School. Kenya Certificate of Primary Education (KCPE). Awarded 416/500 Marks.
           						</p>
           					</div>
           					<div id="contacts" class="homeContainer">
                                   <center>
                                   	<h2 class="white_text">CONTACT US</h2>
                                   </center>
                                   <hr>
           	                    <div class="contact_us_container flexify">
           	                        <div class="contact_us_card golden_background" onclick="window.location.href='https://www.facebook.com/silas.dopelimitlesity'">
           	                            <center>
           	                                <img height="80" width="130" src="./facebook.png" alt="facebook" title="@silas.dopelimitlesity">
           	                            </center>
           	                        </div>
           	                        <div class="contact_us_card golden_background" onclick="window.location.href='https://www.instagram.com/silas.n/'">
           	                            <center>
           	                                <img height="80" width="80" src="./instagram.png" alt="instagram" title="@silas.n_">
           	                            </center>
           	                        </div>
           	                        <div class="contact_us_card golden_background" onclick="window.location.href='https://www.github.com/greatsilas23/'">
           	                            <center>
           	                                <img height="80" width="80" src="./git.png" alt="github"title="@greatsilas23">
           	                            </center>
           	                        </div>
           	                    </div>
           	                </div>
           				</div>
           			</div>
           			<div class="footerContent">
           				<center>
           					<strong>myPortfolio is copywrighted by Nyamwas ENT. &copy; </strong>
           				</center>
           			</div>
        </div>
    )
}