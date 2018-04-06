import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SubmitForm extends Component {
    render() {
        return (
            <div className="container">
             <Link to="/order/submit/email">
                    <img src="https://s4.aconvert.com/convert/p3r68-cdx67/cbl0f-ck5xu.svg" hight="100%" width="100%" alt="" />
                </Link>
            </div>   
        )
    }
}
export default SubmitForm