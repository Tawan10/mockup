import React, { Component } from 'react'

class OrderForm extends Component {
    render() {
        return (
            <div>
                <h1 style={headerStyle}>LTC FIBER SERVICE</h1>
                <h4 style={subheaderStyle}>FIBER SERVICE ORDER</h4>
                <form>
                    <div className="form-row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="First name"/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Last name"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-6">
                            <button type="submit" className="btn btn-secondary">Cancel</button>
                            <button type="submit" className="btn btn-danger">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const headerStyle = {
    color: 'red',
    textAlign: 'center'
  }
  const subheaderStyle = {
    textAlign: 'center'
  }

export default OrderForm