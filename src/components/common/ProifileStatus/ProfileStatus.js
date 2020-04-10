import React from "react";


class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editMode: false,
        statusText: this.props.status
    }

    onEditMode = () => {
        this.setState({editMode: true})
    }

    offEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.statusText);
        debugger;
    }


    handleInput = (e) => {
        this.setState({statusText: e.target.value})
    }

    render() {
        if (this.state.editMode) {
            return <div>
                    <div>
                        <input
                            type="text"
                            onBlur={this.offEditMode}
                            onChange={this.handleInput}
                            autoFocus={true}
                            value={this.state.statusText}/>
                    </div>
                </div>
        } else {
            return <div>
                <div>
                    <span
                        onDoubleClick={this.onEditMode}>
                            {this.state.statusText !== '' ? this.state.statusText : 'set a status message'}
                    </span>
                </div>
            </div>
        }
    }
}

export default ProfileStatus;