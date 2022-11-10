import React from "react";
import { createRoot } from "react-dom/client";
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link,
    useParams
} from "react-router-dom";
import "./style.css";

import Buttons from "../button-component-master/button.js"
import Inputs from "../input-component-master/input.js"


function App() 
{
    return (
         <Router>
            <div>
                {
                    location.pathname === "/" &&
                    <ul>
                        {/* test */}
                        <li><Link to="/buttons">Button Component</Link></li>
                        <li><Link to="/inputs">Input Component</Link></li> 

                  <li><a href="https://challenges-front-end.netlify.app/buttons"> Button Component </a></li>
                        <li><a href="https://challenges-front-end.netlify.app/inputs"> Input Component </a></li> 
                    </ul>
                }

                <Routes>
                    <Route path="buttons" element={<Buttons />} />
                    <Route path="inputs" element={<Inputs />} />
                </Routes>
            </div>
        </Router>
    )
}

const root = createRoot(document.getElementById('root'));

root.render(<App />);
