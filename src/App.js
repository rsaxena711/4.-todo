
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';


function App() {
  return (
    <>
    <div className='p-6 m-6 items-center grid-flow-col justify-center'>
    <div className='p-6 m-6 items-center flex justify-center'>
        <AddTodo/>
    </div>
    <div className='w-[80%] p-6 ml-40 justify-center bg-slate-400'>
        <Todos />
    </div>
    </div>
    </>
  );
}

export default App;
