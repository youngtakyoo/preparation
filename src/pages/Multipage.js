import React from "react";
// useParams 훅을 사용하여 해당 페이지로 넘어올 때 사용한 url의 파라미터를 받아올 수 있음
import { useParams } from "react-router-dom";

const Multipage = (props) => {
  // useParams()메소드를 사용하면 객체를 반환하며
  // 상위 Route에서 지정한 path의 파라미터 이름을
  // key값으로 갖게 되며 이를 통하여 참조 가능
  const { id, name, gender } = useParams();
  return (
    <React.Fragment>
      this is page number{id},{name},{gender}
    </React.Fragment>
  );
};

export default Multipage;
