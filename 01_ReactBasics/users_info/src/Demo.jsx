import React from "react";

const Demo = () => {
  const numberList = [11, 22, 33, 44, 55];
  const printList = numberList.map((num) => <li>{num}</li>);
  const printIndex = (index) => { 
    return numberList[index];
  }

  return (
    <div>
      <ul>{printList}
        <li>{printIndex(0)}</li>
      </ul>
    </div>
  );
};

export default Demo;
