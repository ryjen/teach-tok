import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTimeInApp, updateTimeInApp } from "@application/state";

export const useTimeInApp = () => {
  const value = useSelector(selectTimeInApp);
  const dispatch = useDispatch();

  const refreshTime = () => {
    dispatch(updateTimeInApp);
  };

  useEffect(() => {
    const interval = setInterval(refreshTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return value;
};
