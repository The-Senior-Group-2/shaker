import React, { useState } from 'react';

const Recipe = () => {
  const [ selectedRecipe, setSelectedRecipe ] = useState({});

  console.info(setSelectedRecipe());

  return (
    <section>
      <div className='container'>
        <div className='center'>
          <table style={{ width: '100%' }}>
            <tbody>
              <tr>
                <td style={{ width: '35%' }}>
                  <h2>
                    {selectedRecipe.name}
                    <br />
                    <br />
                  </h2>
                </td>
                <td
                  style={{
                    width: '60%',
                    verticalAlign: 'top'
                  }}>
                  <h2>
                    Ingredients
                    <br />
                    <br />
                  </h2>
                </td>
              </tr>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};





export default Recipe;
