import * as React from 'react';
import { Button, Glyph } from 'elemental';

import styles from './style.less';

const SOURCE_LIST = [
	'https://placeimg.com/640/480/arch/1',
	'https://placeimg.com/640/480/arch/2',
	'https://placeimg.com/640/480/arch/3',
	'https://placeimg.com/640/480/arch/4',
	'https://placeimg.com/640/480/arch/5',
	'https://placeimg.com/640/480/arch/6',
	'https://placeimg.com/640/480/arch/7',
];

export default () => (
	<div className={styles.wrapper}>
		<h1>Gallery App</h1>
		<div>
			<img
				width="640"
				height="480"
				src={SOURCE_LIST[0]}
			/>
		</div>
		<div className={styles.navigation}>
			<div className={styles.left}>
				<Button><Glyph icon="triangle-left" /></Button>
			</div>
			<div className={styles.reel}>
				<div className={styles.reel_inner}>
					{SOURCE_LIST.map(source => (
						<img
							src={source}
							width="120"
							height="90"
							className={styles.preview}
						/>
					))}
				</div>
			</div>
			<div className={styles.right}>
				<Button><Glyph icon="triangle-right" /></Button>
			</div>
		</div>
	</div>
)