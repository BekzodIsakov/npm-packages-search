import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionCreators } from '../state';
import { RootState } from '../state';

const RepositoriesList = () => {
  const [term, setTerm] = useState<string>('');

  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const dispatch = useDispatch();
  const { data, error, loading } = useSelector(
    (state: RootState) => state.repositories
  );

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };
  const handleOnSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    dispatch(actionCreators.searchRepositories(term));
  };

  return (
    <div>
      <h3>Search for a Package</h3>
      <form onSubmit={handleOnSubmit}>
        <input ref={inputRef} value={term} onChange={handleOnChange} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading..</h3>}
      {!error &&
        !loading &&
        (data.length ? (
          data.map((name) => <div key={name}>{name}</div>)
        ) : (
          <div>Not found</div>
        ))}
    </div>
  );
};

export default RepositoriesList;
