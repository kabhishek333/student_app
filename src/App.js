import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Home from './Components/Home';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Carried from './Components/Carried';
import Navbar from './Components/Layout/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Add from './Components/Pages/User/Add';
// import Student from './Components/Pages/User/Student';
// import Employee from './Components/Pages/User/Employee';
// import Tourist from './Components/Pages/User/Tourist';
// import Team from './Components/Pages/User/Team';
// import Customer from './Components/Pages/User/Customer';
import Show from './Components/Pages/User/Show';
import Update from './Components/Pages/User/Update';
import Delete from './Components/Pages/User/Delete';
// import About from './components/About';


// function App() {
//   return (
//     <>
//       <h1>App Component</h1>
//       <BrowserRouter>

//         <Routes>
//           <Route path='/home' element={<Home />}  />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }


function App() {

  return (
    <>
      {/* <h1>App Component</h1>
      <h1>Hello</h1>  */}
      <BrowserRouter>
      <Navbar />
        <Routes>
          
            <Route path='/add' element={<Add/>}/>
            <Route path='/user/show' element={<Show/>}/>
            <Route path='/user/update/:userId' element={<Update/>}/>
            <Route path='/user/delete/:userId' element={<Delete/>}/>

        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;
