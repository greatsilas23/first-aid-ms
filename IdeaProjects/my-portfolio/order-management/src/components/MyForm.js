import React from 'react'

const MyForm = () => {
    return(
        <div>
            <form action="/" method="post">
                <input type="text" name="num1" placeholder = "First Number"/>
                <input type="text" name="num2" placeholder = "Second Number"/>
                <input type="submit" name="submit" value="Calculate"/>
            </form>
        </div>
    )
}

export default MyForm