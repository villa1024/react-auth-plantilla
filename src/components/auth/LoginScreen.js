import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    });
    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
    };

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        dispatch(startGoogleLogin());
    };

    return (
        <div className="container">
            <div className="card card-login">
                <div className="card-header text-center font-weight-bold">
                    Auth App - Iniciar sesion
                </div>
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <i className="fas fa-envelope-square">&nbsp;</i>
                            <label className='font-weight-bold'>Correo</label>
                            <input
                                type="email"
                                autoComplete='off'
                                className="form-control"
                                name='email'
                                value={email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <i className="fas fa-key">&nbsp;</i>
                            <label className='font-weight-bold'>Contraseña</label>
                            <input
                                type="password"
                                autoComplete='off'
                                className="form-control"
                                name='password'
                                value={password}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button
                            to="/home"
                            type="submit"
                            className="btn btn-primary mt-3 btn-block"
                            disabled={loading}
                        >
                            Iniciar sesion
                        </button>
                        <hr />
                        <div className='auth__social-networks'>
                            <p className='font-weight-bold'>Redes sociales</p>
                            <div
                                className="google-btn"
                                onClick={handleGoogleLogin}
                            >
                                <div className="google-icon-wrapper">
                                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                </div>
                                <p className="btn-text">
                                    <b>Google</b>
                                </p>
                            </div>
                        </div>
                        <Link to="/auth/register">
                            <h5>Crear nueva cuenta</h5>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
};