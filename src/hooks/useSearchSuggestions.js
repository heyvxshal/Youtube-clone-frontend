import { useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";

const useSearchSuggestions = async (searchQuery, setSuggestions) => {
  const searchCache = useSelector((store) => store.searchCache);

  const dispatch = useDispatch();

  useEffect(() => {
    // Make an api call after key press
    // But if the diff between 2 API calls is <200ms
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSuggestions();
      }
    }, 200);

    // else decline the API call
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    setSuggestions(json[1]);

    // Update Cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
};

export default useSearchSuggestions;
