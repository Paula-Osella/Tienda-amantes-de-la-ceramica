import React from "react";
import "../Form/Form.css";

const Form = ({ handleChange, submit, formData, error }) => {
    return (
        <div className="form-card">
            <form className="cuerpo-form" onSubmit={submit}>
                {Object.keys(formData).map((key, i) => (
                    <div className="form-label" key={i}>
                        <label htmlFor={key} className="form-label">Ingrese {key}</label>
                        <input
                            type="text"
                            name={key}
                            id={key}
                            className="form-input"
                            onChange={handleChange}
                            value={formData[key]}
                        />
                        {error[key] && <span className="error-text">{error[key]}</span>}
                    </div>
                ))}
                <button type="submit" className="btn btn-primary bg-black">Crear Orden</button>
            </form>
        </div>
    );
};

export default Form;
