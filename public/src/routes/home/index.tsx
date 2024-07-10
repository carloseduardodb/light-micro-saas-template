import { Fragment, h } from 'preact';
import { useState } from 'preact/hooks';

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <Fragment>
      <div className="container mt-16">
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </Fragment>
  );
};

export default Home;
