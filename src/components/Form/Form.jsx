import React from "react";

const Form = ({ handleChange, submit, formData, error }) => {
    return (
        <form className="CuerpoForm" onSubmit={submit} >
            {
                Object.keys(formData).map((key, i) => (
                    <>
                        <label htmlFor={key} key={i}>Ingrese {key}</label>
                        <input type="text" name={key} id={key} onChange={handleChange}></input>
                        {
                            error[key] && <span>[error [key]]</span>
                        }
                    </>
                ))
            }
            <button onClick={submit} type="submit" className="btn btn-primary">Crear Orden</button>
        </form>
    )
}

export default Form;