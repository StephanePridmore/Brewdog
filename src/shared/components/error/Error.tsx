import React, { Fragment } from 'react';
import { errorSelector } from '../../../store/beers/beers.selectors';
import { useSelector } from 'react-redux';
import './Error.css';

const ErrorComponent = () => {
  const error = useSelector(errorSelector);
  return (
    <Fragment>
      {error && (
        <div className='alert alert-danger' role='alert'>
          <h1>Something went wrong</h1>
          <div className='error-message'>{error}</div>
        </div>
      )}
    </Fragment>
  );
};

export default ErrorComponent;
