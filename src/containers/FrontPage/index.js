import React, { Component } from 'react';
import { connect } from 'react-redux'
import { DISPATCH_SAGA } from './constants'
import { getText } from './selectors'
const mapDispatchToProps = (dispatch) => {
    return {
        fetchInitial: () => dispatch({ type: DISPATCH_SAGA }),
    }
}
const mapStateToProps = (state) => {
    return {
        text: getText(state)
    }
}

class FrontPage extends Component {

    componentDidMount() {
        const { fetchInitial } = this.props
        fetchInitial()
    }

    render() {
        const { text } = this.props
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FrontPage)