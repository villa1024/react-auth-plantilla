import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import { removeError, SetError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name));
        }
    };

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(SetError('Nombre es requerido'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(SetError('Email no es valido'));
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(SetError('Contraseña no coindicen o muy cortas'));
            return false;
        }
        dispatch(removeError());
        return true;
    };

    return (
        <div className="container">
            <div className="card card-login">
                <div className="card-header text-center font-weight-bold">
                    Auth App - Registrarse
                </div>
                <div className="card-body">
                    <form onSubmit={handleRegister}>
                        {
                            msgError &&
                            (
                                <div className="alert alert-danger text-center" role="alert">
                                    {msgError}
                                </div>
                            )
                        }
                        <div className="form-group">
                            <i className="fas fa-user">&nbsp;</i>
                            <label className='font-weight-bold'>Nombre</label>
                            <input
                                type="text"
                                autoComplete='off'
                                className="form-control"
                                name='name'
                                value={name}
                                onChange={handleInputChange}
                            />
                        </div>
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
                        <div className="form-group">
                            <i className="fas fa-key">&nbsp;</i>
                            <label className='font-weight-bold'>Confirmar contraseña</label>
                            <input
                                type="password"
                                autoComplete='off'
                                className="form-control"
                                name='password2'
                                value={password2}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3 btn-block">Registrarse</button>
                        <hr />
                        <Link to="/auth/login">
                            <h5>Ya tienes una cuenta?</h5>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
};