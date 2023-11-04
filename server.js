/** @Author: 
  * @Date: 4 Nov 2023 15:12:00 +0300
  * @LastModifiedBy: 
  * @LastModified: 4 Nov 15:52:00 +0300
  **/

let isValid = false
let termsAndConditions = 
`<h1>first-aid-ms</h1>

<span>first-aid-ms © copyright 2023 is an upcoming service that connects our clients with suppliers from allover the world</span>

<h1>Policy</h1>
<h2>Introduction</h2>
<h2>Service Provider</h2>
<span>These terms are between you and first-aid-ms</span>
<h2>Age and eligibility requirements</h2>
<span>In order to use the Library-Ideology and access any content you need to be 13 years of age (or equivalent minimum age in your country) or older, have parental or guardian consent if you are a minor in your home country, have the power to enter into a binding contract with us and not be barred from doing so under any applicable laws, reside in a country where the service is available</span>
<h2>first-aid-ms Provided By Us</h2> <h2>Library-Ideology Options</h2>
<span>We provide trials from time to time </span>
<h2>Third Party Applications, Devices and Open Source Software</h2>
<span>The first-aid-ms may be integrated with, or may otherwise interact with third party applications websites and services and third-party personal computers and mobile handsets tablets
</span>
<h2>Limitations and Modifications<h2>
<span>We use reasonable Care and skill to keep the first-aid-ms operational</span>
<h2>Your Use of The first-aid-ms</h2> <h2>Creating a first-aid-ms account</h2> <span>You may need to create a first-aid-ms account to use</span>
<h2>Your rights to use the Library-Ideology</h2>
<span>Access to first-aid-ms Subject to your compliance with these Terms, we grant you limited, non-exclusive, revocable permission to make personal non-commercial use of the first-aid-ms and the Content<span>
<h2>first-aid-ms's proprietary rights</h2>
<span>The first-aid-ms and the content are the property of first-aid-ms or first-aid-ms's licensors </span>
<h2>Payments and cancellation</h2>
<span>You may order equipment from first-aid-ms</span>`

class User{
constructor(){
this.id = 1
this.name = 'admin'
}
}

class Dashboard extends User{
constructor(){
super()
this.header = document.querySelector('header')
this.nav = document.querySelector('nav')
this.aside = document.querySelector('aside')
this.article = document.querySelector('article')
this.footer = document.querySelector('footer')
this.dashboard = ""
}
getDashboard(){
console.log('method')
this.dashboard !== "" ?  return this.dashboard : return this.dashboard
}
setDashboard(val){
console.log('method')
this.dashboard !== "" ? return this.dashboard =  val : return this.head.concat(this.nav).concat(this.aside).concat(this.article).concat(this.footer)
}
close(){
this.dashboard = ""
}
}

let myUser = new User()
let myDashboard = new Dashboard()

document.querySelector('body').innerHTML = myDashboard.getDashboard()

myDashboard.close()

