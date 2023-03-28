import { Provider} from "react-redux"
import Main from './pages/main';
import { store } from "./redux/store"

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
}
export default App;
