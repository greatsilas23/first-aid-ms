import React from 'react'
import Layout from './Layout/js'

const FindBox = (props) => {
    const styles = Layout
    return(
        <div id="findBox">
            <div style={styles.logbox}>
                <div className="container" id="finder">
                    <div class='titleStyle'>
                        <h2>File the found document</h2>
                        <p>Fill in the form below with the details of the found document</p>
                    </div>
                    <form>
                        <label for="documents">Document type:</label>
                        <select name="documents" id="documents">
                        <option value="NationalId">National Id</option>
                        <option value="passport">Passport</option>
                        <option value="studentId">Student Id</option>
                        <option value="insuranceCard">Insurance card</option>
                        <option value="birthCertificate">Birth Certificate</option>
                        <option value="atmCard">ATM card</option>
                        </select>
                        <br><br>
                        <label for="documentNo">Document No:</label><br>
                        <input class='input' type="text" id="documentNo" name="documentNo" required placeholder='Enter your Document Number'><br>
                        <label for="fname">Full name:</label><br>
                        <input class='input' type="text" id="fname" name="fname" placeholder="First Name" required><br>
                        <input class='input' type="text" id="lname" name="lname" placeholder="Last Name"required><br><br>
                        <label for="email">Email:</label><br>
                        <input class='input' type="text" id="email" name="email" placeholder="Enter Email"required><br>
                        <label for="dropoff">Drop off point:</label><br>
                        <input class='input' type="text" id="dropoff" name="dropoff" placeholder="Drop-off point"required><br><br>

                        <button id='submit'type="submit" value="Submit">Submit</button>
                        <button class='btn btn-dark'type="reset" value="Reset">Reset</button>
                    </form>
                    <div class="modal" id="filer-alert">
                        <div class="modal-content">
                            <button id='close1'class='btn'>x</button>
                          <p>

                          </p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindBox