import React from 'react';
import { connect } from 'react-redux';
import AddMatch from './AddMatch';
import { addMatch } from './../../redux/reducerMatches';

class AddMatchContainer extends React.Component {
    render() {
        return (
            <AddMatch {...this.state}
                addMatch={this.props.addMatch}
                teamHome={this.props.teamHome}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        teamHome: state.teamHome
    }
}

export default connect(mapStateToProps, { addMatch })(AddMatchContainer);