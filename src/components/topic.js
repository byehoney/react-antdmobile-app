import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom'
import Test from './test.js'
class Topic extends React.Component {
	constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
           
        };
    }
    render() {
    	return(
                <div>
				   <h3>{this.props.match.params.topicId}</h3>
				   <div>
				   		<Link to={`${this.props.match.url}/1023`} >asdad</Link>
				   </div>
				   <Route path={`${this.props.match.url}/:testId`} component={Test} />
				</div>
    	)
    }
}
export default Topic;
