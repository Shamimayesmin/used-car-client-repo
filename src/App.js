
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
		AOS.init();
	}, []);
    
  
  return (
    <div className='max-w-[1440px] mx-auto'>
     <RouterProvider router={router}>

     </RouterProvider>
     <Toaster></Toaster>
    </div>
  );
}

export default App;
