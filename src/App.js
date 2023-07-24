import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./component/Home/Home";
import Contact from "./component/Contact/Contact";
import Header from "./component/Header/Header";
import Ownerdetail from "./component/Ownerdetail/Ownerdetail";
// import Uploadimg from "./component/Uploadimg/Uploadimg";
import Signin from "./component/Signin/Signin";
import Login from "./component/Login/Login";
import CombinedPage from "./component/Combined/CombinedPage";
import Displayuser from "./component/Combined/Displayuser";
import Location  from "./component/Location/Location";


import AppContext from "./utils/Context";


function App () {

    return (
      <div>
       <BrowserRouter>
       <AppContext>
       <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact/:id" element={<Contact />} />
          <Route path="/Ownerdetail/:id" element={<Ownerdetail />} />
          <Route path="/Signin/:id" element={<Signin />} />
          <Route path="/Login/:id" element={<Login />} />
          <Route path="/CombinedPage/:id" element={<CombinedPage />} />
          <Route path="/Displayuser/:id" element={<Displayuser />} />
         
          <Route path="/Location/:id" element={<Location />} /> 

    

          {/* <Route path="/Uploadimg/:id" element={<Uploadimg />} /> */}
       </Routes>
        </AppContext>
        </BrowserRouter>
      
      </div>
    )
  }

export default App;
