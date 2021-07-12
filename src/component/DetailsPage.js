import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './DetailsPage.css';
import UserContext  from '../AppContext';

function DetailsPage(props) {

  const [Contents,setContents] = useState({});  
  //const [img,setImg] = useState('');  
  useEffect(() => {
    fetch("http://localhost:8000/"+props.match.params.type+"/"+props.match.params.id)
        .then(res => res.json())
        .then(response => setContents(response));
        // if(Contents.image != undefined){
        //   setImg(window.location.origin+"/"+Contents.image+"");
        // }
    }, []);

    return (
      <div className="outerDetailsPage">
        <div className="DetailsPage">
          <img className="" key={Contents.id} src={window.location.origin+Contents.image} alt={Contents.name}/>
          <div className=''>
              <pre>{Contents.description}</pre>
          </div>
        </div>
    </div>
    )
};
    

export default DetailsPage;
