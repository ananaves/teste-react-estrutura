import List from '../../list';

const items = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];

function App() {
  return (
    <div>
      <h1>Minha Lista</h1>
      <List items={items} />
    </div>
  );
}

export default App;