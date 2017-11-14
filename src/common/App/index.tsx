import * as React from 'react';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import styles from './style.less';

import Gallery from '../GalleryApp';
import Login from '../LoginApp';

export interface IProps {
}

const App: React.SFC<IProps> = (): React.ReactElement<IProps> => (
	<div className={styles.wrapper}>
		<Helmet>
			<title>FE homework</title>
		</Helmet>

		<Route exact path="/" component={Login} />
		<Route exact path="/gallery" component={Gallery} />
	</div>
);

export default App;