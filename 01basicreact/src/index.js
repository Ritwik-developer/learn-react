import React from 'react'; //core foundational library hai
import ReactDOM from 'react-dom/client';//react-dom ka implementation hai web
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
//ek variable bnaya gya root
//reactDom- react khudka apna dom bnta hai tree structure(virtual dom)
//createRoot method hai
//root variable me store karliya
root.render(

 
    <App /> 
 
);
//jsx- js ke through apne html ko render kar sakte ho
