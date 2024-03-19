import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme, toggleTheme } from './slices/ThemeSlice';
import { useEffect } from 'react';
import { Products } from './thunks/productsThunk';

function App() {
  const theme = useSelector((state) => state.theme);
  //чтобы изменять состояние, нам нужн овоспользоваться хуком useDispatch
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products)
  //как только приложение загружается , используем загрузку слайсов через юзеффект
  //и здесь запускается вся цепочка : 
  //вызывается useEffect => Products => создается createAsyncThunk=> делает запрос и отрпбатывают extraReducers => изменяется состояние и тут же можем получить это состояние через useSelector
  useEffect(() => {
    dispatch(Products());
  }, []);

  if (loading === 'pedning')
    return 'Loading...';
  if (loading === 'rejected')
    return error;

  return (
    <div className="App">
      <button onClick={() => dispatch(toggleTheme())}>Click</button>

      <button onClick={() => dispatch(setTheme('dark'))}>SetTheme</button>

      {theme.value}


      {products.map(product => <div key={product.id}>{product.title}</div>)}
    </div>
  );
}

export default App;
