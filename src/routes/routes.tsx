import {Routes, Route} from 'react-router-dom';

import { Home  } from '../pages/home'
import { History } from '../pages/history'

export function Router(){
    return(
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/history" element={<History/>}/>
     </Routes>
    )
}