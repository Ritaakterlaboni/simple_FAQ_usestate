
import { useState } from 'react';
import './App.css'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function App() {
const [show, setShow] = useState(false);
const [open,setOpen] = useState(false);
const [hide, setHide] = useState(false);


  return (
   <>
<div className=" ">
     <div className="relative h-screen w-full bg-gradient-to-t from-purple-600 to-blue-600">
     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl bg-slate-300 sm:w-[500px] sm:h-[450px] w-[450px] h-[510px] p-[20px] border-transparent border rounded-lg">

      <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions (FAQ)</h1>
      
       {/* first question */}
    <div className="" onClick={() => setShow(!show)}>1. What technologies does this project use?
      {( show &&
        <div className="">
        <p><MdKeyboardDoubleArrowRight/>This project is built using React.js for the frontend and Tailwind CSS for styling.</p>
      </div>
      )}
    </div>
 {/* first question */}

  {/* second question */}
    <div onClick={() => setOpen(!open)} className="">2. How can I customize the questions and answers?
    
    {( open &&
     <p><MdKeyboardDoubleArrowRight/>You can customize the questions and answers by editing the faqs array in the code. Each entry has an id, question, and answer field.</p>

    )}
    
    </div>

     {/* second question */}

      {/* third question */}
    <div onClick={() => setHide(!hide)} className="">3. Is this FAQ section mobile responsive?
    {( hide && 
      <p> <MdKeyboardDoubleArrowRight />
                  Yes, the FAQ section is fully responsive and works well on all screen sizes including mobile devices, thanks to Tailwind CSS.</p>
    )}

    </div>

      {/* third question */}
     </div>
   </div>


</div>
   </>
  )
}

export default App
