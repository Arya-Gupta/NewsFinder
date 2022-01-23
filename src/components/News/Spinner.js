import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center my-5">
                <div className="spinner-border" role="status"></div>
            </div>
        )
    }
}

export default Spinner
