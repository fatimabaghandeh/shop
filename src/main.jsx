import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import queryClient from '../config/query';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { store } from '../store/store';

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((registration) => {
        console.log("ServiceWorker registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("ServiceWorker registration failed: ", registrationError);
      });
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>,
);
