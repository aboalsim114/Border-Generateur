import React, { useState, useEffect } from 'react';
import Code from './Code';
export default function Home() {
  const [colorInput, SetColorINput] = useState('#222'); // input Color
  const [raduisInput, SetRaduisInput] = useState(99); // input radius
  const [widthInput, setwidthInput] = useState(40); // input largeur du border
  const [HeightInput, setHeightInput] = useState(20); // Input longueur  du border
  const [shadowInput, SetShaodwInput] = useState(12); // input shadow
  const [shadowColor, setshadowColor] = useState('#222'); // input shadow Color

  useEffect(() => {
    let result = document.getElementById('result'); // on recupere le div avec le id result
    result.style.borderRadius = `${raduisInput}px`;
    result.style.borderColor = `${colorInput}`;
    result.style.width = `${widthInput}rem`;
    result.style.height = `${HeightInput}rem`;
    result.style.backgroundColor = `${colorInput}`;
    result.style.boxShadow = `${shadowInput}px ${shadowInput}px ${shadowInput}px ${shadowColor} `;
  });
  // le code finale a ajouter quand on click sur le button
  let Codefinale = `width : ${widthInput}rem
height : ${HeightInput}rem
border-radius: ${raduisInput}px
shadow-box : ${shadowInput}px ${shadowInput}px ${shadowInput}px ${shadowColor}
background-color : ${colorInput}
  `;

  const ShowCode = (e) => {
    e.preventDefault();
    Swal.fire(`${Codefinale}`, 'Voici Le Code Finale ', 'success');
  };

  return (
    <>
      <div>
        <div className="form">
          <form method="post">
            <h1>Border Generateur</h1>
            <div>
              <label htmlFor="color">Choisir un Color</label>
              <input
                value={colorInput}
                onChange={(e) => SetColorINput(e.target.value)}
                id="color"
                type="color"
              />
            </div>
            <div>
              <label htmlFor="radius">Raduis</label>
              <input
                value={raduisInput}
                onChange={(e) => SetRaduisInput(e.target.value)}
                type="range"
                id="radius"
                max="300"
              />
            </div>
            <div>
              <label htmlFor="radius">size</label>
              <input
                value={widthInput}
                onChange={(e) => setwidthInput(e.target.value)}
                type="range"
                id="size"
                max="47"
              />
            </div>
            <div>
              <label htmlFor="height">height</label>
              <input
                value={HeightInput}
                onChange={(e) => setHeightInput(e.target.value)}
                type="range"
                id="height"
                max="20"
              />
            </div>
            <div>
              <label htmlFor="shadow">shadow</label>
              <input
                type="range"
                id="shadow"
                value={shadowInput}
                onChange={(e) => SetShaodwInput(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="shadowColor">shadow Color</label>
              <input
                type="color"
                id="shadowColor"
                value={shadowColor}
                onChange={(e) => setshadowColor(e.target.value)}
              />
            </div>
            <button onClick={ShowCode} id="btnCode">
              afficher le code
            </button>
          </form>
          <div id="result" className="result"></div>
        </div>
      </div>
    </>
  );
}
