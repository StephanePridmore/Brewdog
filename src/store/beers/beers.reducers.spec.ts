import { beersLoaded } from "./beers.actions";
import { beersReducers } from "./beers.reducers";
import { BeersState, beersInitialState } from "./beers.state";
import { createTestBeers } from "../../tests/beers";

describe("beers Reducer", () => {
  let initialState: BeersState;

  beforeEach(() => {
    initialState = beersInitialState;
  });

  it("should return the default state", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const action = { type: "NOOP" } as any;
    const result = beersReducers(undefined, action);
    expect(result).toBe(initialState);
  });

  it("should return beers after fetch success", () => {
    const beers = createTestBeers();
    const action = beersLoaded(beers);

    const result = beersReducers(initialState, action);

    expect(result.beers.length).toBe(10);
  });
});
