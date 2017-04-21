import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom'
import Topic from './topic.js'
// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )
class Topics extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
           match:this.props.match
        };
    }

    render() {
    	return(
            <div>
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/rendering`}>
                            Rendering with React
                        </Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/components`}>
                            Components
                        </Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/props-v-state`}>
                            Props v. State
                        </Link>
                    </li>
                </ul>

                <Route path={`${this.props.match.url}/:topicId`} component={Topic}/>
                <Route exact path={this.props.match.url} render={() => (
                <h3>Please select a topic.</h3>
                )}/>
            </div>
    	)
    }
}
export default Topics;