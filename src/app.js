import React, {Component} from 'react';
import LiteHeader from './liteheader';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state ={}
    }
    
    render() {
        return (
            <div>
                <LiteHeader />
            </div>
        )
    }
}