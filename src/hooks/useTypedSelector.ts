import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers";

export let useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
