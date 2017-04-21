import React from 'react';
import { Button, Flex, WingBlank } from 'antd-mobile';
class Home extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    render() {
    	return(
    		<div>
			   <h2>home</h2>
               <Button className="btn" type="primary">primary 按钮</Button>
			</div>
    	)
    }
}
export default Home;