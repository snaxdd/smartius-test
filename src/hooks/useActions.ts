import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { RootActionCreators } from "../store/actions";

export const useActions = () => {
  let dispatch = useDispatch();
  return bindActionCreators(RootActionCreators, dispatch);
};
