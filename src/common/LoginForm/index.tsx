import * as React from 'react';
import { Alert, Form, FormField, FormInput, Button } from 'elemental';

import styles from './style.less';

export interface IProps {  }
export interface IState { email: string, password: string }

class LoginForm extends React.Component<IProps, IState> {

	state = {
		email: '',
		password: ''
	}

	private onSubmit = () => {
		console.log(this.state)
	}
	
	private validateEmail = (e) => {
		let reg = /[\w\d\-]+\@+[\w\d\-\.]+\.[\w]{2,}/g
			if(reg.test(e.target.value)) {
			this.setState({email: e.target.value})
			e.target.className = `${styles.success} FormInput`
		}	else {
			this.setState({email: ''})
			e.target.className = `${styles.invalid} FormInput`
		}
	}

	private validatePassword = (e) => {
		if(e.target.value.length >= 6) {
			this.setState({password: e.target.value})
			e.target.className = `${styles.success} FormInput`			
		}
		else {			
			this.setState({password: ''})
			e.target.className = `${styles.invalid} FormInput`
		}
	}

	private checkPassword = () => {
		if (!this.state.password) {
			return (
				<Alert type="danger">Password is invalid. Min 6 simbols.</Alert>	)
		}
		else {
			return 
		}
	}

	private checkEmail = () => {
		if (!this.state.email) {
			return (
				<Alert type="danger">Email is invalid</Alert> )
		}
		else {
			return 
		}
	}

	public render() {
		return (
			<div>
				<Form>
					<FormField label="Email address" htmlFor="basic-form-input-email">
						<FormInput autoFocus type="email" placeholder="Enter email" name="basic-form-input-email" onChange={this.validateEmail} className={styles.invalid} />
					</FormField>
					{ this.checkEmail() }
					<FormField label="Password" htmlFor="basic-form-input-password">
						<FormInput type="password" placeholder="Enter password" name="basic-form-input-password" onChange={this.validatePassword} className={styles.invalid} />
					</FormField>
					{ this.checkPassword() }
					<Button type="primary" onClick={this.onSubmit}>Log in</Button>
				</Form>
			</div>
		);
	}
}

export default LoginForm;