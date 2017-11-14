
import { createStore, applyMiddleware } from "redux";
import { promiseMiddleware } from "./middleware";

const defaultState = {
  appName: "Meowdium",
  articles: null
};

const reducer = function(state = defaultState, action) {
  switch (action.type) {
    case "HOME_PAGE_LOADED":
      console.log(action.payload);
      return {
        ...state,
         articles: action.payload.articles,
        articleCount: action.payload.articleCount
        };
    default:
      return state;
  }
};
const middleware = applyMiddleware(promiseMiddleware);

const store = createStore(reducer, middleware);

export default store;