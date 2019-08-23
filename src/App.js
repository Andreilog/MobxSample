import React from 'react';
import BirdStore from './stores/BirdStore';

import {inject, observer} from 'mobx-react';

@observer
@inject('BirdStore')
class App extends React.Component {
	render() {
		return (
			<div className="App">

			</div>
		);
	}
}

export default App;
