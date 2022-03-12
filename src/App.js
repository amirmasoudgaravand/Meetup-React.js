
import './App.css';
import {Route,Switch} from "react-router-dom";
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetups from './pages/NewMeetups';
import Favorites from './pages/Favorites';

import Layout from './component/layout/Layout';

function App() {
  return (
    <div>
     <Layout>

      <Switch>
     <Route path='/' exact>
     <AllMeetupsPage />
     </Route>

     <Route path='/new-meetup'>
     <NewMeetups />
     </Route>

     <Route path='/favorites'>
     <Favorites />
     </Route>
     </Switch>

     </Layout>
    </div>
  );
}

export default App;
