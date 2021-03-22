import { Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Kanban from '../components/Kanban/Kanban';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' component={Kanban} />
      </Switch>
    </Layout>
  );
}

export default App;
