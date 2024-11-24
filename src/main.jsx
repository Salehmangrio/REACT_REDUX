import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'

// Import the Redux store from the app/store.js file
import { store } from './app/store.js'
// Import the Provider from 'react-redux'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  // Wrap the App component in a Provider component and pass the store to it. 
  //This will make the store available to all components in the application.
  
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
