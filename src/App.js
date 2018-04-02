import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">About Me</Link>
        </li>
        <li>
          <Link to="/about">About React</Link>
        </li>
        <li>
          <Link to="/jsx">JSX</Link>
        </li>
        <li>
          <Link to="/propsandstate">Props And State</Link>
        </li>
        <li>
          <Link to="/topics">Lifecycle Hooks</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/jsx" component={JSX} />
      <Route path="/propsandstate" component={PropsAndState} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>About Me</h2>
    <p>I am a student at Copenhagen Business Academy 
      and I study Computer Science and are presently
      on my 3rd semester.
      <br/><br/>
      This project can be cloned from github:<br/> 
      GitHub link : <a href="https://github.com/GertMadsen/demo-app">demo-app</a>
    </p>
  </div>
);

const About = () => (
  <div>
    <h2>About React</h2>
    <p>In computing, React is a JavaScript library for 
      building user interfaces. It is maintained by 
      Facebook, Instagram and a community of individual 
      developers and corporations.
    </p>
  </div>
);

const JSX = () => (
  <div>
    <h2>JSX</h2>
    <p>
    React components are typically written in JSX, 
    a JavaScript extension syntax allowing quoting 
    of HTML and using HTML tag syntax to render subcomponents.
    </p>
  </div>
);

const PropsAndState = () => (
  <div>
    <h2>Props and State</h2>
    <p>
    Props are input for components and they are Read Only.
    components defined as classes have some additional features. 
    Local state is exactly that: a feature available only to classes.
    State is similar to props, but it is private and fully controlled 
    by the component and can be changed.
    </p>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Lifecycle Hooks</h2>
    <ul>
      <li>
        <Link to={`${match.url}/componentdidmount`}>componentDidMount()</Link>
      </li>
      <li>
        <Link to={`${match.url}/render`}>render()</Link>
      </li>
      <li>
        <Link to={`${match.url}/componentwillreceiveprops`}>componentWillReceiveProps</Link>
      </li>
      <li>
        <Link to={`${match.url}/shouldcomponentupdate`}>shouldComponentUpdate()</Link>
      </li>
      <li>
        <Link to={`${match.url}/componentwillupdate`}>componentWillUpdate()</Link>
      </li>
      <li>
        <Link to={`${match.url}/componentwillunmount`}>componentWillUnmount()</Link>
      </li>
    </ul>
    
    <Route path={`${match.url}/componentdidmount`} component={DidMount} />
    <Route path={`${match.url}/render`} component={Render} />
    <Route path={`${match.url}/componentwillreceiveprops`} component={WillReceiveProps} />
    <Route path={`${match.url}/shouldcomponentupdate`} component={ShouldUpdate} />
    <Route path={`${match.url}/componentwillupdate`} component={WillUpdate} />
    <Route path={`${match.url}/componentwillunmount`} component={WillUnmount} />
    
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a lifecycle hook.</h3>}
    />
  </div>
);

const DidMount = ({ match }) => (
  <div>
    <p>ComponentDidMount() is started when the component is being mounted.</p>
  </div>
);

const Render = ({ match }) => (
  <div>
    <p>The render() function is activated everytime a component is initialized or the component state has been changed.</p>
  </div>
);

const WillReceiveProps = ({ match }) => (
  <div>
    <p>ComponentWillReceiveProps() is started when the component gets new props.
      Does not start the first time a component recieves props.
    </p>
  </div>
);

const ShouldUpdate = ({ match }) => (
  <div>
    <p>ShouldComponentUpdate() returns true or false and is used to decide
      if a component automaticly should update when updated/changes.</p>
  </div>
);

const WillUpdate = ({ match }) => (
  <div>
    <p>ComponentWillUpdate() is started just before the component is being updated.</p>
  </div>
);

const WillUnmount = ({ match }) => (
  <div>
    <p>ComponentWillUnmount() is started before the component is being unmounted.
      It can be useful to stop timers associated with the component or for
      instance to log users off. 
    </p>
  </div>
);

export default BasicExample;
