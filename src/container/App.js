import { Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Kanban from '../components/Kanban/Kanban';
import EditForm from '../components/EditForm/EditForm';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' component={Kanban} />
        <Route path='/:id' component={EditForm} />
      </Switch>
    </Layout>
  );
}

export default App;
