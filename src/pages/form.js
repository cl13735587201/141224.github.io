import React from 'react';

class nameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }
    handelSubmit(event) {
        alert(this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form>
                <label>name:
                    <input type="text" value={this.state.value} onChange={() => {this.handleChange()}}/>
                </label>
                <input type="submit" vlaue="submit" onClick={() => {this.handelSubmit()}}/>
            </form>
        )
    }
}

export default nameForm;