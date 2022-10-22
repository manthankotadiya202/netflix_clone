import React from "react";
import Card from "./Cards";
const Ndata = (value) => {
  return (
    <Card
      key={value.id}
      imgsrc={value.imgsrc}
      title={value.title}
      sname={value.sname}
      links={value.link}
    />
  );
};
export default Ndata;
