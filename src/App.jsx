import "./App.css";
import { Button } from "./components/Button/Button";
import { JornalItem } from "./components/JornalItem/JornalItem";

export const App = () => {

  const data = [
    {
      id: 1,
      title: "Title 1",
      description: "Description 1",
      date: "Date 1",
    },
    {
      id: 2,
      title: "Title 2",
      description: "Description 2",
      date: "Date 2",
    },
  ];
  
  return (
    <>
      {data.map((item) => {
        return <JornalItem key={item.id} {...item} />;
      })}

      <Button />
    </>
  );
};
