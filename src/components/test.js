import React from 'react';
class Test extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
           
        };
    }
    render() {
    	return(
                <div>
				   <h3>{this.props.match.params.testId}</h3>
				</div>
    	)
    }
}
export default Test;
