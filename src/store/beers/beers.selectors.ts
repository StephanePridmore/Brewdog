import { createSelector } from "@reduxjs/toolkit";
import { BeersState } from "./beers.state";
import { AppState } from "../store";
import { Beer } from "../../shared/models/Beer";

const beersStateSelector = (state: AppState): BeersState => state.beers;

export const beersSelector = createSelector(
  beersStateSelector,
  (state: BeersState): Beer[] => state.beers
);
