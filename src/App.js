import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Banner from './Pages/Home/Banner/Banner'
// import About from './Pages/Home/Banner/About/About';
// import AllProjects from './Pages/Home/Banner/AllProjects/AllProjects';
// import Skills from './Pages/Home/Banner/Skills/Skills';
// import Error from './Pages/Error/Error';
// import Details from './Pages/Home/Banner/Details/Details';
import { useEffect, useState } from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";
import AuthProvider from './AuthProvider/AuthProvider'
import DashBoard from './Pages/Home/Banner/DashBoard/DashBoard';
import Places from './Pages/Home/Banner/Places/Places';
import EditPlace from './Pages/Home/Banner/EditPlace/EditPlace';
function App() {
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
  
  return (
    <div className="App">
      {
        loading ? <div className="preloader">
          <PropagateLoader color={'aqua'} loading={loading}  size={30} />
        </div>  : <AuthProvider><BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Banner/>
          </Route>
          <Route path="/home">
          <Banner/>
          </Route>
          <Route path="/dash">
          <DashBoard/>
          </Route>
          <Route path="/places">
          <Places/>
          </Route>
          <Route path="/edit/:id">
          <EditPlace/>
          </Route>
          {/* <Route path="/about">
          <About/>
          </Route>
          <Route path="/projects">
          <AllProjects/>
          </Route>
          <Route path="/skills">
          <Skills/>
          </Route>
          <Route path="/details/:id">
          <Details/>
          </Route>
          <Route path="*">
          <Error/>
          </Route> */}
        </Switch>
        </BrowserRouter>
        </AuthProvider>
      }
    </div>
  );
}

export default App;
