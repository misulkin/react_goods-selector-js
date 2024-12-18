import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGoods, setSelectedGoods] = useState(['Jam']);

  const addGood = good => {
    if (!selectedGoods.includes(good)) {
      setSelectedGoods([...selectedGoods, good]);
    }
  };

  const removeGood = good => {
    setSelectedGoods(selectedGoods.filter(item => item !== good));
  };

  return (
    <main className="section container">
      {selectedGoods.length === 0 ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        selectedGoods.map(selectedGood => (
          <h1
            key={selectedGood}
            className="title is-flex is-align-items-center"
          >
            {selectedGood} is selected
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => removeGood(selectedGood)}
            />
          </h1>
        ))
      )}
      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={
                selectedGoods.includes(good)
                  ? 'has-background-success-light'
                  : ''
              }
            >
              <td>
                {selectedGoods.includes(good) ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => removeGood(good)}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => addGood(good)}
                  >
                    +
                  </button>
                )}
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
