import logo from './moi.jpg';
import './App.css';
import Profile from './Profile/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const name = "Hasnaoui Abdenacer";
  const bio = "Développeur web avec des compétences solides en résolution de problèmes et une expérience reconnue dans la création et la conception de logiciel dans un environnement d'essai.";
  const profession = "Développeur Web ";
  const consolelog=(x)=> console.log(`Bonjour ${x}`)
  return (
    <div className="container mt-5">
      
      <div className="row d-flex justify-content-center">
        
        <div className="col-md-7">
            
            <div className="card p-3 py-4">
                
                
                
                <div className="text-center mt-3">
                    
                <div className="text-center">
    
                <img src={logo} style={{width:"150px", borderRadius:"30px"}} className="rounded-circle" alt=""/>
              </div>   
                    
                <Profile name={name} bio={bio} profession={profession} consolelog={consolelog}>
                   
                </Profile>
      
                    
                    
                </div>
                
               
                
                
            </div>
            
        </div>
        
    </div>
    </div>
  );
}

export default App;
