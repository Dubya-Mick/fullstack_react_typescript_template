import './app.css';
import IMAGE from '../assets/dog.png';
import ForceGraph2D from 'react-force-graph-2d';

export const App = () => {
  const containers = [
    {
      id: 'jsebf',
      name: 'Mongo_DB',
      ipAddress: '9849834',
    },
    {
      id: 'jsebfdedsd',
      name: 'A_cool_app',
      ipAddress: '9849834',
    },
    {
      id: 'jsebfsefs',
      name: 'justified_platypus',
      ipAddress: '9849834',
    },
    {
      id: 'jsebfsefs',
      name: 'burger_boy',
      ipAddress: '9849834',
    },
    {
      id: 'jsebfsef',
      name: 'Boombox_DB',
      ipAddress: '9889834',
    },
  ];

  const networkName = 'my_best_network';

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

  function createGraphData(
    containers: { id: string; name: string; ipAddress: string }[],
    networkName: string
  ) {
    const containerNodes = containers.map((container) => {
      return {
        id: container.name,
        type: 'container',
      };
    });

    const nodes = [{ id: networkName, type: 'network' }, ...containerNodes];
    const links = containers.map((container) => {
      return {
        source: networkName,
        target: container.name,
      };
    });

    return {
      nodes: nodes,
      links: links,
    };
  }

  const graphData = createGraphData(containers, networkName);

  return (
    <>
      <h1 className="test">Fullstack React Typescript</h1>
      <img src={IMAGE} alt="dog" />
      <ForceGraph2D
        graphData={graphData}
        nodeLabel={'id'}
        width={500}
        height={500}
        nodeAutoColorBy={'type'}
      />
      <button>Test Docker Terminal</button>
    </>
  );
};
