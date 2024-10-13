import ItemList from './ItemList'

const App = () => {
  //RENDERE UNA LISTA DI ELEMENTI - PARTE 2
  const items = ["ciao", "come", "stai"];

  return (
    <>
      <h2>Lista degli elementi</h2>
      <ItemList items={items} />
    </>
  )

}

export default App
