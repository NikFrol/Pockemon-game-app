import {useState, useEffect} from 'react';
import s from './style.module.css';
import YouWin from './assets/you-win.png';
import YouLose from './assets/you-lose.png';
import Draw from './assets/draw.png';

const Result = ({ type }) => {
   const [url, setUrl] = useState(null);
   console.log(type, '$$$$')
   useEffect(() => {
       switch (type) {
           case 'win':
               setUrl(YouWin);
               break;
           case 'lose':
               setUrl(YouLose);
               break;
           case 'draw':
               setUrl(Draw);
               break;
           default:
               setUrl(YouWin);
       }
   }, [type]);

    return (
        <div className={s.result}>
            <img src={url} alt="result" />
        </div>
    );
};

export default Result;
