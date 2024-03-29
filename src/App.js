import React, {Component} from 'react';
import './App.css';
import Counter from "./Counter";

class App extends Component {

    constructor(props) {
        super(props);
        this.names = [
            'Balin', 'Dwalin', 'Fili', 'Kili', 'Dori', 'Nori', 'Ori', 'Oin', 'Gloin',
            'Bifur', 'Bofur', 'Bombur'
        ];
        this.state = {
            index: 0
        };

        this.tick = this.tick.bind(this);
    }

    /**
     * Invoked by React as soon as this component is bound into the virtual DOM-Tree
     */
    componentDidMount() {
        this.timer = setInterval(this.tick, 1000);
    }

    /**
     * Invoked by React before this component is removed from virtual DOM-Tree and deleted
     */
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        // this.state.index = this.state.index + 1; // Doesn't work
        this.setState({index: (this.state.index + 1) % this.names.length});
    }

    render() {
        return (
            <div>
                <h1>{this.props.message} {this.names[this.state.index]}</h1>
                <Counter message="Press these buttons to increment and to refresh"/>
            </div>
        );
    }
}

export default App;
