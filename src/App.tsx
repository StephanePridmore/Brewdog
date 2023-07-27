import React, { useEffect } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { beersSelector } from "./store/beers/beers.selectors";
import { beersRequested } from "./store/beers/beers.actions";

function App() {
  const dispatch = useDispatch();
  const beers = useSelector(beersSelector);

  const loadBeersList = (skip: number, pageSize: number) => {
    dispatch(beersRequested(skip, pageSize));
  };

  useEffect(() => {
    loadBeersList(0, 10);
  }, []);

  return <div className="App">{beers.length}</div>;
}

export default App;
