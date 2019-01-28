import * as React from 'react';
import { Alert, Form, FormField, FormInput, Button } from 'elemental';

import styles from './style.less';

export interface IProps {  }
export interface IState { email: string, password: string, validated: number }

class LoginForm extends React.Component<IProps, IState> {

	state = {
		email: '',
		password: '',
		validated: 0
	}

	private onSubmit = () => {
		(async () => {
			console.log(this.state)
			if(this.state.email && this.state.password) {
				let response = await fetch('/api/validate', {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						email: this.state.email,
						password: this.state.password
					})
				})
				console.log(response)
				if(response.status == 200) {
					this.setState({validated: 2})
				}
				else {
					this.setState({validated: 1})
				}
			}
		})()
	}
	
	private validateEmail = (e) => {
		const reg = /[\w\d\-]+\@+[\w\d\-\.]+\.[\w]{2,}/g
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

	private checkRes = () => {
		if(this.state.validated === 2){
			return (
			<Alert type="success">Login success</Alert> )
		}
		else if (this.state.validated === 1){
			return (
				<Alert type="danger">Login error</Alert> ) 
		}
	}

	public render() {
		return (
			<div>
				{ this.checkRes() }
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