import React from 'react';
import Matches from './Matches';
import { connect } from 'react-redux';

class MatchesContainer extends React.Component {
    render() {
        return(
            <Matches matches = {this.props.matches} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        matches: state.matchesPage.matches
    }
}

export default connect(mapStateToProps, {})(MatchesContainer);