import React, { useState, useEffect } from "react";
import "./PersonalDataForm.css";

const PersonalDataForm = () => {
  // Estados para las contraseñas y el mensaje de error
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Si ambos campos de contraseña están llenos y no coinciden, se establece el mensaje de error
    if (password && confirmPassword && password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
    } else {
      setError("");
    }
  }, [password, confirmPassword]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className="DatosPersonalesForm">
      <div className="DatosPersonales">Datos Personales</div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="NombreCompleto">
              Nombre Completo* (representante empresa)
            </label>
            <input type="text" className="form-control Rectangulo2" />
          </div>
          <div className="form-group">
            <label className="Region">Región*</label>
            <input type="text" className="form-control Rectangulo3" />
          </div>
          <div className="form-group">
            <label className="FechaNacimiento">
              Fecha de Nacimiento (DD/MM/AAAA)*
            </label>
            <input type="date" className="form-control Rectangulo4" />
          </div>
          <div className="form-group contrasena">
            <label className="Contrasena">Contraseña*</label>
            <input
              type="password"
              className="form-control Rectangulo5"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="DatosContrasena">
            Debe tener:
            <br />
            1 Mayúscula
            <br />8 caracteres como mínimo
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="Rut">Rut*</label>
            <input type="text" className="form-control Rectangulo6" />
          </div>
          <div className="form-group">
            <label className="Correo">Correo electrónico*</label>
            <input type="email" className="form-control Rectangulo7" />
          </div>
          <div className="form-group">
            <label className="Genero">Género*</label>
            <select id="genero" className="form-control Rectangulo8">
              <option value="" disabled selected>
                Seleccione su género
              </option>
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
            </select>
          </div>
          <div className="form-group confirme-contrasena">
            <label className="ConfirmeContrasena">Confirme Contraseña*</label>
            <input
              type="password"
              className="form-control Rectangulo9"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default PersonalDataForm;
