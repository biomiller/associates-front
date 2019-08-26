import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Associate extends Component {

    render() {
        return (
            <div>
            <Link to={`/`}>
                <img alt="face"
                    id={this.props.associate.forenames}
                    // src={`https://thispersondoesnotexist.com/image?random=${Math.random()}`}
                    src={`https://thispersondoesnotexist.com/image`}
                    width="70"
                    height="70"
                    title={this.props.associate.forenames}>
                </img>
                <p>{this.props.associate.forenames} {this.props.associate.surname}</p>

            </Link>
            </div>
        )
    }
}