import  {RouterProvider} from "react-router-dom";
import root from "./router/root";
import './App.css';

function App() {
  return (
    <RouterProvider router={root}/>
    // <h1 className='text-3xl font-bold underline'>
    //    hello  world!!
    // </h1>
  );
}

export default App;
