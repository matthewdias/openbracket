import React from "react";
import {ContestantCard} from "../../common/components/Contestant";

const styles = {
	container: {
		width: '10px',
		margin: 'auto'
	}
}

export default class HomePage extends React.Component {
  render() {
    return (
    	<div style={styles.container}>
    		<ContestantCard />
    	</div>
    );
  }
}
