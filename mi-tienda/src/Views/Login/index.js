import React from 'react'
import LoginForm from '../../Components/Forms/LoginForm'

export default function Login() {
  return (
    <>
        <div id="wrapper">
			<div class="vertical-align-wrap">
				<div class="vertical-align-middle">
					<div class="auth-box ">
						<div class="left">
							<div class="content">
								<div class="header">
									<div class="logo text-center">
										<img src="assets/img/logo-dark.png" alt="Klorofil Logo"/>
									</div>
									<p class="lead">Iniciar Sesion</p>
								</div>
								<LoginForm/>
							</div>
						</div>
						<div class="right">
							<div class="overlay"></div>
							<div class="content text">
								<h1 class="heading">Allware Feed Technology - Vitapro</h1>
								<p>by Nicovita</p>
							</div>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
			</div>
		</div>
    </>
  )
}
