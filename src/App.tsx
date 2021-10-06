import './app.css';
import { ClickCounter } from './clickCounter';
import { useEffect } from 'react';
import IMAGE from './dog.png';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import Heading from './components/Heading';
import { Oscar } from './components/Oscar';
import { Switch, Route, Link } from 'react-router-dom';

export const App = () => {
  const personName = {
    first: 'Tammy',
    last: 'Two-toes',
  };

  const nameList = [
    {
      first: 'tim',
      last: 'timple',
    },
    {
      first: 'sal',
      last: 'mcdougan',
    },
    {
      first: 'gil',
      last: 'scramp',
    },
  ];

  const links: JSX.Element[] = nameList.map((name) => (
    <Link to={`/${name.first}`}>{name.first}</Link>
  ));

  const testExec = () => {
    fetch('/api')
      .then((res) => res.json())
      .then((stuff) => console.log(stuff));
  };

  // useEffect(() => {

  // }, []);

  return (
    <>
      <h1 className="test">React Typescript Starter Template 420</h1>
      <img src={IMAGE} alt="dog" />
      <ClickCounter />
      <Greet name="Wyatt" messageCount={10} isLoggedIn={true} />
      {/* <Person name={personName} /> */}
      {/* <PersonList names={nameList} /> */}
      <Status status={'loading'} />
      {/* <Oscar>
          <Heading>Oscar goes to me!</Heading>
        </Oscar> */}
      <button onClick={testExec}>Test Docker Terminal</button>
      <div className="links">{links}</div>
      <Switch>
        <Route exact path="/:name">
          <PersonList names={nameList} />
        </Route>
      </Switch>
    </>
  );
};
