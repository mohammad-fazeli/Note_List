import styled from "styled-components";

export const NoteRoot = styled.div`
  background-color: ${(props) => props.color};
  width: 17rem;
  padding: 1rem 1rem 0.5rem 1rem;
  border-radius: 5px 5px 5px 3rem;
  color: #2c3e50;
  .note__header {
    border-bottom: 1px solid #2c3e50;
    input {
      background-color: transparent;
      width: 100%;
      padding: 5px;
      border: none;
      outline: none;
      font-size: 1.3rem;
    }
  }
  .main {
    min-height: 16rem;
    padding-top: 1rem;
    div {
      /* text-align: center; */
      .add_task {
        margin-top: 1rem;
        cursor: pointer;
        font-size: 1.5rem;
      }
    }
  }
  .note__footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 4px;
    .delete_icon {
      font-size: 1.4rem;
      cursor: pointer;
    }
    div {
      width: 1.3rem;
      height: 1.3rem;
      border: 2px solid #fff;
      border-radius: 500px;
      cursor: pointer;
    }
  }
  @media (max-width: 550px) {
    width: 100%;
    .note__footer {
      .delete_icon {
        font-size: 2rem;
      }
      div {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
    .main {
      div {
        .add_task {
          font-size: 2rem;
        }
      }
    }
  }
`;

export const NoteListRoot = styled.div`
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 17rem);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-content: center;
  align-items: center;
  @media (max-width: 1120px) {
    grid-template-columns: repeat(3, 17rem);
  }
  @media (max-width: 840px) {
    grid-template-columns: repeat(2, 17rem);
  }
  @media (max-width: 550px) {
    grid-template-columns: 95%;
  }
`;
export const AddNoteRoot = styled.div`
  width: 17rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2c3e50;
  .icon {
    border: 5px solid #2c3e50;
    border-radius: 5000rem;
    font-size: 5rem;
    cursor: pointer;
  }
  @media (max-width: 550px) {
    height: 6rem;
    .icon {
      position: fixed;
      bottom: 1rem;
      right: 1rem;
    }
  }
`;

export const TaskRoot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .check_box {
    font-size: 1.3rem;
    cursor: pointer;
  }
  div {
    display: flex;
    align-items: center;
    gap: 5px;
    input {
      background: transparent;
      border: none;
      outline: none;
      font-size: 1rem;
    }
    .done {
      text-decoration: line-through;
    }
  }
`;
export const TaskListRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
