//import { FileUpload } from '@mui/icons-material';
import './App.css'
import FAQ from './Pages/FAQ/FAQ'
import Landing from './Pages/Landing/Landing'
import FileUpload from './Pages/FileUpload/FileUpload'; 
import Moderate from './Pages/Moderate/Moderate';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Link} from 'react-router-dom';

 

function App() {

  const handleSelectFile = (file) => {
    console.log("Selected file:", file);
  };

  const handleDeleteFile = () => {
    console.log("File deleted");
  };

  return (
    <>
      <div className='app-container'>
        <Landing />
        {/*<FAQ />*/}

        {/*<FileUpload
                accept=".pdf,.doc,.docx" //Define the accepted file types
                onSelectFile={handleSelectFile}
                onDeleteFile={handleDeleteFile}
                disabled={false} 
        />*/}

        {/*<Moderate/>*/}

      </div>
    </>
  )
}

export default App