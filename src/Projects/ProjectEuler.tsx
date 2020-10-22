import React, { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../App/Loading';
import Pagination from '../Components/Pagination';

export default () => {

  const
  { page } = useParams(),
  LazyImport = lazy(
    () => import('./ProjectEuler/P' + (page || 1))
  );

  return (
    <Pagination lastPage={30}>
      <Suspense fallback={Loading()}>
        <LazyImport />
      </Suspense>
    </Pagination>
  );
};