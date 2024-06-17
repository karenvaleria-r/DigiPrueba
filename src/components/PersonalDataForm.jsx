import React, { useState } from "react";
import "./PersonalDataForm.css";
import FotoPerfil from "./FotoPerfil";
import Popup from "./Popup";

const PersonalDataForm = () => {
  const [contrasena, setContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [errorConfirmarContrasena, setErrorConfirmarContrasena] = useState("");
  const [descripcionPyme, setDescripcionPyme] = useState("");
  const [charCount, setCharCount] = useState(0);
  const maxChars = 2000;

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

  const handleDescripcionChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxChars) {
      setDescripcionPyme(value);
      setCharCount(value.length);
    }
  };

  const hasUpperCase = /[A-Z]/.test(contrasena);
  const hasMinLength = contrasena.length >= 8;

  const [selectedAreas, setSelectedAreas] = useState([]);
  const [otherArea, setOtherArea] = useState("");

  const areas = [
    "Postulación a Fondos estatales",
    "Gestión de Redes sociales",
    "Programación web",
    "Marketing digital",
  ];

  const toggleSelection = (area) => {
    setSelectedAreas((prevState) =>
      prevState.includes(area)
        ? prevState.filter((item) => item !== area)
        : [...prevState, area]
    );
  };

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
              <label htmlFor="nombrePyme" className="NombrePyme">
                Nombre Pyme*
              </label>
              <input
                type="text"
                id="nombrePyme"
                className="form-control Rectangulo2"
              />
            </div>
            <div className="form-group">
              <label className="AreaMejora">
                Área de Mejora* <br /> (Seleccione una o más alternativas)
              </label>
              <div className="button-grid">
                {areas.map((area) => (
                  <button
                    key={area}
                    className={`btn-custom ${
                      selectedAreas.includes(area) ? "selected" : ""
                    }`}
                    onClick={() => toggleSelection(area)}
                  >
                    {area}
                  </button>
                ))}
                <button
                  className={`btn-custom ${
                    selectedAreas.includes("Otro") ? "selected" : ""
                  }`}
                  onClick={() => toggleSelection("Otro")}
                >
                  Otro
                </button>
              </div>
              {selectedAreas.includes("Otro") && (
                <div className="form-group">
                  <label className="Otro">Otro (especifique)</label>
                  <input
                    type="text"
                    className="form-control Rectangulo5"
                    value={otherArea}
                    onChange={(e) => setOtherArea(e.target.value)}
                  />
                </div>
              )}
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="descripcionPyme" className="DescripcionPyme">
                Descripción (Describe en un máximo de 2000 caracteres tu Pyme)*
              </label>
              <textarea
                type="text"
                id="descripcionPyme"
                className="form-control Rectangulo7 TEXTA"
                value={descripcionPyme}
                onChange={handleDescripcionChange}
              />
              <div className="char-count">
                {charCount}/{maxChars} caracteres utilizados
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="fotoPerfilPyme" className="FotoPerfilPyme">
                Foto De Perfil Pyme*
              </label>
              <br />
              <FotoPerfil id="SubirArchivo" />
            </div>
          </div>
        </div>
      </article>
      <Popup />
    </article>
  );
};
export default PersonalDataForm;
