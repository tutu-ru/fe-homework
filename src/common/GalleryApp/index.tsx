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



export interface IProps {  }
export interface IState { currentImg: number }

export default class GalleryApp extends React.Component<IProps, IState> {

	state = {
		currentImg: 0
	}

	private handleLeft = () => {
		if(SOURCE_LIST[this.state.currentImg-1]) {
			this.setState({currentImg: this.state.currentImg - 1})
		}
		else {
			this.setState({currentImg: SOURCE_LIST.length - 1})
		}
	}

	private handleRight = () => {
		if(SOURCE_LIST[this.state.currentImg+1]) {
			this.setState({currentImg: this.state.currentImg + 1})
		}
		else {
			this.setState({currentImg: 0})
		}
		console.log(this.state.currentImg)
	}

	private handleImg = (e) => {
			this.setState({currentImg: parseInt(e.target.id, 10)})
	}

	private showPreview = (item, i) => {
		if(SOURCE_LIST[this.state.currentImg+i]) {
			return (
				<img
				src={SOURCE_LIST[this.state.currentImg+i]}
				id={this.state.currentImg+i}
				width="120"
				height="90"
				className={styles.preview}
				onClick={this.handleImg}
				/>
			)
		}
		else {
			return 
		}
	}

	public render() {
		return(
			<div className={styles.wrapper}>
				<h1>Gallery App</h1>
				<div>
					<img
						width="640"
						height="480"
						src={SOURCE_LIST[this.state.currentImg]}
					/>
				</div>
				<div className={styles.navigation}>
					<div className={styles.left}>
						<Button onClick={this.handleLeft}><Glyph icon="triangle-left" /></Button>
					</div>
					<div className={styles.reel}>
						<div className={styles.reel_inner}>
							{SOURCE_LIST.map((source, i) => (
								this.showPreview(source, i)
							))}
						</div>
					</div>
					<div className={styles.right}>
						<Button onClick={this.handleRight}><Glyph icon="triangle-right" /></Button>
					</div>
				</div>
			</div>
		)
	}

}