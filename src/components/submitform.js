import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SubmitForm extends Component {
    render() {
        return (
            <div classNane="container">
             <Link to="/order/submit/email">
                    <img src="https://s4.aconvert.com/convert/p3r68-cdx67/cbbcp-znar4.svg" hight="100%" width="100%" />
                </Link>
            </div>   
        )
    }
}
export default SubmitForm