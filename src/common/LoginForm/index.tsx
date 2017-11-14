import * as React from 'react';
import { Alert, Form, FormField, FormInput, Button } from 'elemental';

import styles from './style.less';

export interface IProps {  }
export interface IState {  }

class LoginForm extends React.Component<IProps, IState> {
	private onSubmit = () => {
		console.log("Form submitted");
	}

	public render() {
		return (
			<div>
				<Alert type="danger">Password is invalid</Alert>
				<Form>
					<FormField label="Email address" htmlFor="basic-form-input-email">
						<FormInput autoFocus type="email" placeholder="Enter email" name="basic-form-input-email" />
					</FormField>
					<FormField label="Password" htmlFor="basic-form-input-password">
						<FormInput type="password" placeholder="Enter password" name="basic-form-input-password" className={styles.invalid} />
					</FormField>
					<Button type="primary" onClick={this.onSubmit}>Log in</Button>
				</Form>
			</div>
		);
	}
}

export default LoginForm;