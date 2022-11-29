import React from 'react';
import Filter from './components/Filter';
import Header from './components/Header';
import NewCollections from './components/NewCollections';
import TopSellers from './components/TopSellers';


function App() {
  return (
    <div >
      <Header />
      <NewCollections/>
      <Filter/>
      <TopSellers/>
      <div className='h-[100px]'>

      </div>

    </div>
  );
}

export default App;
