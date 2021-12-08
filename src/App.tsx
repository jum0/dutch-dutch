import { Route, Routes } from 'react-router';
import { FillingOutPage, HomePage, ResultPage } from './pages';
import { PATH } from './constants';

const App = () => (
  <>
    <Routes>
      <Route path={PATH.HOME} element={<HomePage />} />
      <Route path={PATH.FILLING_OUT} element={<FillingOutPage />} />
      <Route path={PATH.RESULT} element={<ResultPage />} />
    </Routes>
  </>
);

export default App;
