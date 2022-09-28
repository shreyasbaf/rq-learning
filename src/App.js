import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/Home.page";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Users } from "./components/Users.page";
import { Cars } from "./components/Cars.page";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  {" "}
                  Users{" "}
                </Link>
              </li>
              {/* <li>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/users"
                >
                  Add Users
                </Link>
              </li> */}

              <li>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/cars"
                >
                  Cars
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/users">
              <HomePage />
            </Route>
            <Route path='/cars'>
              <Cars />
            </Route>
            <Route path="/">
              <Users />
            </Route>
          </Switch>
        </div>
      </Router>
      <ReactQueryDevtools initialOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
