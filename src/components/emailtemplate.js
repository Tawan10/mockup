import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Emailtemplate from '../image/06EmailTemplate.jpg'

class EmailTemplate extends Component {
    render() {
        return (
            <div className="root" style={{ 'alignItems': 'center'}}>
             <Link to="/">
                    <img src={Emailtemplate}  hight="55%" width="30%" alt=""/>
                </Link>
            </div>     
        )
    }
}

const imgStyle = {
    justifyContent: 'center',
    alignItems: 'center',

}
export default EmailTemplate