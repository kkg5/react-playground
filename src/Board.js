import BoardItem from "./BoardItem";

const Board = ({ onEdit, onDelete, boardList }) => {
  return (
    <div className="Board">
      {boardList.map((it) => (
        <BoardItem
          key={it.id}
          onEdit={onEdit}
          onDelete={onDelete}
          id={it.id}
          title={it.title}
          content={it.content}
          date={it.date}
        />
      ))}
    </div>
  );
};

Board.defaultProps = {
  boardList: [],
};

export default Board;
