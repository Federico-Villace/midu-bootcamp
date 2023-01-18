import { noteReducer } from "./noteReducer";

describe("note reducer", () => {
  test("returns new state after action with toggle importance", () => {
    const state = [
      {
        id: 1,
        content: "note 1.",
        important: true,
      },
      {
        id: 2,
        content: "note 2",
        important: false,
      },
    ];
    const action = {
      type: "@note/toggle_importance",
      payload: {
        id: 2,
      },
    };
    const newState = noteReducer(state, action);

    expect(newState).toHaveLength(2);
    expect(newState).toContainEqual(state[0]);
    expect(newState).toContainEqual({
      id: 2,
      content: "note 2",
      important: false,
    });
  });
});
