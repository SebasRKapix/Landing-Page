import React, { useState } from 'react';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        contactPhonenumber: '',
        website: '',
        title: '',
        password: '',
        passwordr: '',
        company: '',
        vat: '',
        phonenumber: '',
        country: '',
        city: '',
        address: '',
        zip: '',
        state: '',
        acceptTerms: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData({
            ...formData,
            [name]: checked
        });
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="checkout-container">
            <div className="checkout-background"></div>
            <div className="checkout-content">
                <div className="checkout-header">
                    <h1 className="checkout-title tw-text-white">Registro Kapix Free</h1>
                    <p className="checkout-subtitle tw-text-white">Complete sus datos para activar su sistema ERP</p>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <form id="register-form" onSubmit={handleSubmit}>
                            <div className="panel_m">
                                <div className="panel-body register-glass">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h4 className="bold tw-text-white register-contact-info-heading">
                                                <i className="fi fi-rr-user"></i>Información de Contacto
                                            </h4>

                                            <div className="form-group mtop15 register-firstname-group">
                                                <label className="control-label tw-text-white" htmlFor="firstname">
                                                    Nombre
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control bg-box"
                                                    name="firstname"
                                                    id="firstname"
                                                    value={formData.firstname}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group register-lastname-group">
                                                <label className="control-label tw-text-white" htmlFor="lastname">
                                                    <span className="text-danger">*</span> Apellido
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control bg-box"
                                                    name="lastname"
                                                    id="lastname"
                                                    value={formData.lastname}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group register-email-group">
                                                <label className="control-label tw-text-white" htmlFor="email">
                                                    <span className="text-danger">*</span> Correo Electrónico
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control bg-box"
                                                    name="email"
                                                    id="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group register-contact-phone-group">
                                                <label className="control-label tw-text-white" htmlFor="contactPhonenumber">
                                                    <span className="text-danger">*</span> Teléfono de Contacto
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control bg-box"
                                                    name="contactPhonenumber"
                                                    id="contactPhonenumber"
                                                    value={formData.contactPhonenumber}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group register-website-group">
                                                <label className="control-label tw-text-white" htmlFor="website">
                                                    Sitio Web
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control bg-box"
                                                    name="website"
                                                    id="website"
                                                    value={formData.website}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group register-position-group">
                                                <label className="control-label tw-text-white" htmlFor="title">
                                                    Puesto
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control bg-box"
                                                    name="title"
                                                    id="title"
                                                    value={formData.title}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group register-password-group">
                                                <label className="control-label tw-text-white" htmlFor="password">
                                                    <span className="text-danger">*</span> Contraseña
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control bg-box"
                                                    name="password"
                                                    id="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group register-password-repeat-group">
                                                <label className="control-label tw-text-white" htmlFor="passwordr">
                                                    <span className="text-danger">*</span> Repetir Contraseña
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control bg-box"
                                                    name="passwordr"
                                                    id="passwordr"
                                                    value={formData.passwordr}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <input
                                                    id="age-confirmation"
                                                    type="checkbox"
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                                    name="acceptTerms"
                                                    checked={formData.acceptTerms}
                                                    onChange={handleCheckboxChange}
                                                    required
                                                />
                                                <label htmlFor="age-confirmation" className="ml-2 text-sm font-medium tw-text-white">
                                                    Confirmo que soy mayor de edad
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <h4 className="bold tw-text-white register-company-info-heading">
                                                <i className="fi fi-rr-building"></i>Información de la Empresa
                                            </h4>

                                            <div className="form-group mtop15 register-company-group">
                                                <label className="control-label tw-text-white" htmlFor="company">
                                                    <span className="text-danger">*</span> Empresa
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control bg-box"
                                                    name="company"
                                                    id="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group register-vat-group">
                                                <label className="control-label tw-text-white" htmlFor="vat">
                                                    NIT
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control bg-box"
                                                    name="vat"
                                                    id="vat"
                                                    value={formData.vat}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group register-company-phone-group">
                                                <label className="control-label tw-text-white" htmlFor="phonenumber">
                                                    <span className="text-danger">*</span> Teléfono de Empresa
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control bg-box"
                                                    name="phonenumber"
                                                    id="phonenumber"
                                                    value={formData.phonenumber}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group register-country-group">
                                                <label className="control-label tw-text-white" htmlFor="country">
                                                    <span className="text-danger">*</span> País
                                                </label>
                                                <select
                                                    name="country"
                                                    className="form-control"
                                                    id="country"
                                                    value={formData.country}
                                                    onChange={handleSelectChange}
                                                >
                                                    <option value="">Seleccionar</option>
                                                    {/* Options for countries */}
                                                </select>
                                            </div>

                                            <div className="form-group register-city-group">
                                                <label className="control-label tw-text-white" htmlFor="city">
                                                    <span className="text-danger">*</span> Ciudad
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control bg-box"
                                                    name="city"
                                                    id="city"
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group register-address-group">
                                                <label className="control-label tw-text-white" htmlFor="address">
                                                    <span className="text-danger">*</span> Dirección
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control bg-box"
                                                    name="address"
                                                    id="address"
                                                    value={formData.address}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group register-zip-group">
                                                <label className="control-label tw-text-white" htmlFor="zip">
                                                    <span className="text-danger">*</span> Código Postal
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control bg-box"
                                                    name="zip"
                                                    id="zip"
                                                    value={formData.zip}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group register-state-group">
                                                <label className="control-label tw-text-white" htmlFor="state">
                                                    <span className="text-danger">*</span> Estado
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control bg-box"
                                                    name="state"
                                                    id="state"
                                                    value={formData.state}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <button type="submit" className="register-btn">
                                            Registrar
                                            <i className="fi fi-rr-user"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
