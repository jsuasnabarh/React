import React from 'react'
import LoginForm from '../../Components/Forms/LoginForm'

export default function Login() {
  return (
    <React.Fragment>
        <div id="wrapper">
			<div className="vertical-align-wrap">
				<div className="vertical-align-middle">
					<div className="auth-box ">
						<div className="left">
							<div className="content">
								<div className="header">
									<div className="logo text-center">
										<img src="assets/img/logo-dark.png" alt="Klorofil Logo"/>
									</div>
									<p className="lead">Iniciar Sesion</p>
								</div>
								<LoginForm/>
							</div>
						</div>
						<div className="right">
							<div className="overlay"></div>
							<div className="content text">
								<h1 className="heading">Allware Feed Technology - Vitapro</h1>
								<p>by Nicovita</p>
							</div>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</div>
		</React.Fragment>
  )
}
