import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import If from '../operator/if'

class TabContent extends Component {
    render() {
        return (
            <If test={this.props.tab.visible[this.props.id]}>
                <div id={this.props.id}
                    className={`tab-pane ${this.props.tab.selected === this.props.id ? 'active' : ''}`}>
                    {this.props.children}
                </div>
            </If>
        )
    }
}

const mapStateToProps = state => ({ tab: state.tab })
export default connect(mapStateToProps)(TabContent)