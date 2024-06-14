import React, { useState } from "react";
import "./PersonalDataForm.css";
import FotoPerfil from "./FotoPerfil";
import Popup from "./Popup";

const PersonalDataForm = () => {
  const [contrasena, setContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [errorConfirmarContrasena, setErrorConfirmarContrasena] = useState("");

  const handleContrasenaChange = (e) => {
    const value = e.target.value;
    setContrasena(value);
  };

  const handleConfirmarContrasenaChange = (e) => {
    const value = e.target.value;
    setConfirmarContrasena(value);
    if (value !== contrasena) {
      setErrorConfirmarContrasena("Las contraseñas no coinciden.");
    } else {
      setErrorConfirmarContrasena("");
    }
  };

  const hasUpperCase = /[A-Z]/.test(contrasena);
  const hasMinLength = contrasena.length >= 8;

  return (
    <article>
      <article className="DatosPersonales">
        <h2 className="tit">Datos Personales</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="nombreCompleto" className="NombreCompleto">
                Nombre Completo*
              </label>
              <input
                type="text"
                id="nombreCompleto"
                className="form-control Rectangulo2"
              />
            </div>
            <div className="form-group">
              <label htmlFor="region" className="Region">
                Región*
              </label>
              <select
                id="region"
                className="form-control rectangulo8 custom-select"
              >
                <option value="" disabled selected>
                  Seleccione su Región
                </option>
                <option value="I">I Región de Tarapacá</option>
                <option value="II">II Región de Antofagasta</option>
                <option value="III">III Región de Atacama</option>
                <option value="IV">IV Región de Coquimbo</option>
                <option value="V">V Región de Valparaíso</option>
                <option value="VI">
                  VI Región del Libertador General Bernardo O'Higgins
                </option>
                <option value="VII">VII Región del Maule</option>
                <option value="VIII">VIII Región del Biobío</option>
                <option value="IX">IX Región de La Araucanía</option>
                <option value="X">X Región de Los Lagos</option>
                <option value="XI">
                  XI Región Aysén del General Carlos Ibáñez del Campo
                </option>
                <option value="XII">
                  XII Región de Magallanes y de la Antártica Chilena
                </option>
                <option value="RM">RM Región Metropolitana de Santiago</option>
                <option value="XIV">XIV Región de Los Ríos</option>
                <option value="XV">XV Región de Arica y Parinacota</option>
                <option value="XVI">XVI Región de Ñuble</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="contrasena" className="Contrasena">
                Contraseña*
              </label>
              <input
                type="password"
                id="contrasena"
                className="form-control Rectangulo5"
                value={contrasena}
                onChange={handleContrasenaChange}
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="confirmeContrasena"
                className="ConfirmeContrasena"
              >
                Confirme Contraseña*
              </label>
              <input
                type="password"
                id="confirmeContrasena"
                className="form-control Rectangulo9"
                value={confirmarContrasena}
                onChange={handleConfirmarContrasenaChange}
              />
              {errorConfirmarContrasena && (
                <div className="error-message">{errorConfirmarContrasena}</div>
              )}
            </div>

            <div className="DatosContrasena">
              Debe tener:
              <br />
              <div>
                1 Mayúscula
                {hasUpperCase ? (
                  <span className="check green">
                    <i className="fas fa-check"></i>
                  </span>
                ) : (
                  <span className="check red">
                    <i className="fas fa-times"></i>
                  </span>
                )}
              </div>
              <div>
                8 caracteres como mínimo
                {hasMinLength ? (
                  <span className="check green">
                    <i className="fas fa-check"></i>
                  </span>
                ) : (
                  <span className="check red">
                    <i className="fas fa-times"></i>
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="rut" className="Rut">
                Rut*
              </label>
              <input
                type="text"
                id="rut"
                name="rut"
                className="form-control Rectangulo6"
              />
            </div>
            <div className="form-group">
              <label htmlFor="correo" className="Correo">
                Correo electrónico*
              </label>
              <input
                type="email"
                id="correo"
                className="form-control Rectangulo7"
              />
            </div>
            <div className="form-group">
              <label htmlFor="genero" className="Genero">
                Género*
              </label>
              <select id="genero" className="form-control Rectangulo8">
                <option value="" disabled selected>
                  Seleccione su género
                </option>
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
                <option value="other">Otro</option>
                <option value="pn">Prefiero no decirlo</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="fechaNacimiento" className="FechaNacimiento">
                Fecha de Nacimiento (DD/MM/AAAA)*
              </label>
              <input
                type="date"
                id="fechaNacimiento"
                className="form-control Rectangulo4"
              />
            </div>
          </div>
        </div>
      </article>
      <article className="DatosPersonales">
        <h2 className="tit">Datos Pyme</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="nombreCompleto" className="NombreCompleto">
                Área de Mejora*
              </label>
              <select id="genero" className="form-control Rectangulo8">
                <option value="" disabled selected>
                  Seleccione su principal área de Mejora
                </option>
                <option value="RedesSociales">Redes Sociales</option>
                <option value="MarketingDigital">Marketing Digital</option>
                <option value="PaginasWeb">Páginas web</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <br />

            <br />
            <div className="form-group">
              <label htmlFor="correo" className="Correo">
                Descripción (Describe en un máximo de 2000 carácteres tu Pyme)*
              </label>
              <textarea
                type="text"
                id="correo"
                className="form-control Rectangulo7 TEXTA"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="genero" className="Genero">
                Foto De Perfil Pyme*
              </label>
              <br />
              <FotoPerfil />
            </div>
          </div>
        </div>
      </article>
      <Popup />
    </article>
  );
};

export default PersonalDataForm;
