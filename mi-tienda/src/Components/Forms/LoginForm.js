import React from 'react'
import EmailInput from '../Inputs/EmailInput'
import SubmitButton from '../Buttons/SubmitButton'
import { useNavigate } from "react-router-dom";

export default function LoginForm({params}) {
    const navigate = useNavigate()

 
    const handleSubmit = event => {
        event.preventDefault()
        alert('You have submitted the form.')
        navigate("/dashboard");
    }

    return (
        <>
            <form class="form-auth-small" onSubmit={handleSubmit}>
                <EmailInput Label='Email' DefaultValue='mgodoyh@vitapro.com.pe'></EmailInput>
                <div class="form-group clearfix">
                    <label class="fancy-checkbox element-left custom-bgcolor-blue">
                        <input type="checkbox" />
                        <span class="text-muted">Recuerdame</span>
                    </label>
                    <span class="helper-text element-right">No cuentas con una cuenta? <a href="page-register.html">Registrar</a></span>
                </div>
                <SubmitButton texto='Iniciar Sesion'></SubmitButton>
            </form>
        </>
    )
}
