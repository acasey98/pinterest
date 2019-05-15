import boardData from '../../helpers/data/boardsData';
import util from '../../helpers/util';
import pins from '../pins/pins';

const seePinDiv = (e) => {
  const boardId = e.target.closest('.card').id;
  console.error('seePinDiv', boardId);
  document.getElementById('boards-page').classList.add('hide');
  document.getElementById('pins-page').classList.remove('hide');
  pins.initPins(boardId);
};

const bindEvents = () => {
  const allButtons = document.getElementsByClassName('see-pins');
  for (let i = 0; i < allButtons.length; i += 1) {
    allButtons[i].addEventListener('click', seePinDiv);
  }
};

const domStringBuilder = (boardsArray) => {
  let domString = '';
  boardsArray.forEach((board) => {
    domString += `<div id=${board.id} class="card col-3" style="width: 18rem;">`;
    domString += '<div class="card-body">';
    domString += `<p class="card-text">${board.name}<p>`;
    domString += '<button class="btn btn-secondary see-pins">Pins</button>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('user-boards', domString);
};

const initBoards = () => {
  boardData.loadBoards()
    .then((resp) => {
      const boardsResults = resp.data.boards;
      domStringBuilder(boardsResults);
      bindEvents();
    })
    .catch(err => console.error('error from loadBoards', err));
};

export default { initBoards };
