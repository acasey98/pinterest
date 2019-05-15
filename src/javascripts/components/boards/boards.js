import boardData from '../../helpers/data/boardsData';
import util from '../../helpers/util';

const domStringBuilder = (boardsArray) => {
  let domString = '';
  boardsArray.forEach((board) => {
    domString += `<div id=${board.id} class="card col-3" style="width: 18rem;">`;
    domString += '<div class="card-body">';
    domString += `<p class="card-text">${board.name}<p>`;
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
    })
    .catch(err => console.error('error from loadBoards', err));
};

export default { initBoards };
