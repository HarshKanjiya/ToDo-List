import './App.css';
import Footer from './component/footer/footer.component';
import Input from './component/input/input.component';
import List from './component/list/list.component';

function App() {
  return (
    <>
    <div className="wrapper">
      <h2 className='todo-list'>Todo List</h2>
      <br/>
      <Input/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
