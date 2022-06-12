const Board = ({ onDelete, boardList }) => {
  return (
    <div className="Board">
      <ul>
        <li>
          {boardList.map((it) => (
            <div key={it.id} className="board-list-container">
              <div>
                <div className="content-container">
                  <h3>{it.title}</h3>
                  <p>{it.content}</p>
                  <p className="day">{it.date}</p>
                </div>
              </div>
              <div>
                <div className="button-container">
                  <button>수정</button>
                </div>
                <div className="button-container">
                  <button
                    onClick={() => {
                      if (window.confirm("정말 삭제하시겠습니까?")) {
                        onDelete(it.id);
                      }
                    }}
                  >
                    삭제
                  </button>
                </div>
              </div>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};

Board.defaultProps = {
  boardList: [],
};

export default Board;
