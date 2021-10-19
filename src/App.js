import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Services from './component/Services/Services';
import Footer from './component/Footer/Footer';
import Doctors from './component/Doctors/Doctors';
import NotFound from './component/NotFound/NotFound';
import Appointment from './component/Appointment/Appointment';
import Login from './component/Login/Login';
import SignUp from './component/SignUp/SignUp';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Healthcare from './component/Healthcare/Healthcare';
import AuthProvider from './component/context/AuthProvider';


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Services></Services>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/appointment">
              <Appointment></Appointment>
            </Route>
            <Route path="/healthcare/:serviceId">
              <Healthcare></Healthcare>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

            <Route path="/footer">
              <Footer></Footer>
            </Route>

          </Switch>
        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;
