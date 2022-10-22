import React from "react";
import "./index.css";
import Cdata from "./Cdata";
import Ndata from "./Ndata";
// import Heading from "./Heading";
// import Card from "./Cards";
// const favseries = "Netflix";

// const Favs = () => {
//   if (favseries === "Netflix") {
//     return (
//       <Card
//         key={Cdata[0].id}
//         imgsrc={Cdata[0].imgsrc}
//         title={Cdata[0].title}
//         sname={Cdata[0].sname}
//         links={Cdata[0].link}
//       />
//     );
//   } else {
//     return (
//       <Card
//         key={Cdata[1].id}
//         imgsrc={Cdata[1].imgsrc}
//         title={Cdata[1].title}
//         sname={Cdata[1].sname}
//         links={Cdata[1].link}
//       />
//     );
//   }
// };

const App = () => (
  <>
    <h1 className="heading_style">List of Top 5 Netflix Series</h1>
    {Cdata.map(Ndata)}
    {/* <Favs /> */}

    {/* <Card
      imgsrc={Cdata[0].imgsrc}
      title={Cdata[0].title}
      sname={Cdata[0].sname}
      links={Cdata[0].link}
    />
    <Card
      imgsrc={Cdata[1].imgsrc}
      title={Cdata[1].title}
      sname={Cdata[1].sname}
      links={Cdata[1].link}
    />
    <Card
      imgsrc={Cdata[1].imgsrc}
      title={Cdata[1].title}
      sname={Cdata[1].sname}
      links={Cdata[1].link}
    />
    <Card
      imgsrc={Cdata[1].imgsrc}
      title={Cdata[1].title}
      sname={Cdata[1].sname}
      links={Cdata[1].link}
    /> */}
  </>
);
export default App;
