import { useState } from "react";

const BoardItem = ({ onEdit, onDelete, id, title, content, date }) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localContent, setLocalContent] = useState(content);

  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onDelete(id);
    }
  };

  const handleQuitEdit = () => {
    toggleIsEdit();
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (window.confirm("정말 수정하시겠습니까?")) {
      onEdit(id, localContent);
    }
    toggleIsEdit();
  };

  return (
    <div key={id} className="board-list-container">
      <div className="content-container">
        <h3>{title}</h3>
        {isEdit ? (
          <textarea
            value={localContent}
            onChange={(e) => setLocalContent(e.target.value)}
          />
        ) : (
          <p>{content}</p>
        )}

        <p className="day">{date}</p>
      </div>
      <div className="button-container">
        {isEdit ? (
          <>
            <button onClick={handleEdit}>수정</button>
            <button onClick={handleQuitEdit}>취소</button>
          </>
        ) : (
          <>
            <button onClick={toggleIsEdit}>수정</button>
            <button onClick={handleDelete}>삭제</button>
          </>
        )}
      </div>
    </div>
  );
};

export default BoardItem;
