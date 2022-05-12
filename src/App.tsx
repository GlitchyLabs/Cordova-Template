
import {useNotification} from './hooks/useNotification'
import {NOTIFICATION_VARIANTS} from './globals'

function App() {
  const [success] = useNotification(NOTIFICATION_VARIANTS.SUCCESS);
  success(`Welcome to Cordova + React + GlitchyLabs!`);
  return (
    <div className="App">
      <div>
        
        Welcome to Cordova + React + GltichyLabs!
        </div>
    </div>
  );
}

export default App;