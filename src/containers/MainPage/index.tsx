import React from 'react';
import Layout from 'containers/Layout';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { loadTestData } from 'store/test/ActionCreators';
import { resetTestData } from 'store/test/TestSlice';

function MainPage() {
  const dispatch = useAppDispatch();
  const { testData } = useAppSelector(state => state.testReducer);

  return (
    <Layout>
      <h1>Test</h1>
      <h1>Test 777</h1>
      <h1>Github CI/CD</h1>
      <h1>{testData ? 'Данные загружены' : 'Данных нет'}</h1>
      <button onClick={() => dispatch(loadTestData())}>Загрузить данные</button>
      <button style={{marginLeft: '20px'}} onClick={() => dispatch(resetTestData())}>Удалить данные</button>
    </Layout>
  );
}

export default MainPage;
