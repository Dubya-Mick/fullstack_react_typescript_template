import './app.css';
import IMAGE from './dog.png';
import ForceGraph2D from 'react-force-graph-2d';

export const App = () => {
  const testExec = () => {
    fetch('/api')
      .then((res) => res.json())
      .then((stuff) => console.log(stuff));
  };

  const data = {
    nodes: [
      {
        id: 'my_network',
        type: 'network',
      },
      {
        id: 'Mongo_DB',
        type: 'container',
      },
      {
        id: 'Express_Server',
        type: 'container',
      },
      {
        id: 'Burger_King',
        type: 'container',
      },
      {
        id: 'Burger_Queen',
        type: 'container',
      },
    ],
    links: [
      {
        source: 'my_network',
        target: 'Mongo_DB',
      },
      {
        source: 'my_network',
        target: 'Express_Server',
      },
      {
        source: 'my_network',
        target: 'Burger_King',
      },
      {
        source: 'my_network',
        target: 'Burger_Queen',
      },
    ],
  };

  return (
    <>
      <h1 className="test">Fullstack React Typescript</h1>
      <img src={IMAGE} alt="dog" />
      <ForceGraph2D
        graphData={data}
        nodeLabel={'id'}
        width={500}
        height={500}
        nodeAutoColorBy={'type'}
      />
      <button onClick={testExec}>Test Docker Terminal</button>
    </>
  );
};
