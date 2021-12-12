import { Navigate, Route, Routes } from 'react-router';
import { FillingOutPage, HomePage, ResultPage } from './pages';
import { PATH, SESSION_STORAGE_KEY } from './constants';
import { RequireStorageKey } from './components';

const App = () => (
  <Routes>
    <Route path={PATH.HOME} element={<HomePage />} />
    <Route
      path={PATH.FILLING_OUT}
      element={
        <RequireStorageKey storageKey={SESSION_STORAGE_KEY.COUNT} redirectTo={PATH.HOME}>
          <FillingOutPage />
        </RequireStorageKey>
      }
    />
    <Route
      path={PATH.RESULT}
      element={
        <RequireStorageKey
          storageKey={SESSION_STORAGE_KEY.DUTCH_LIST}
          redirectTo={PATH.FILLING_OUT}
        >
          <ResultPage />
        </RequireStorageKey>
      }
    />
    <Route path="*" element={<Navigate to={PATH.HOME} />} />
  </Routes>
);

export default App;
