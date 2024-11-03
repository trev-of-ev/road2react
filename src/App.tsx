import "./App.css";

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Trevor Guinn",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Bria Evans, Syre Guinn",
    num_comments: 6,
    points: 3,
    objectID: 1,
  },
];

const App = () => {
  return (
    <div>
      <h1>Hello {getTitle("React")}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
};

export default App;
