import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {useEffect} from "react";
import { fetchCats } from "./catsSlice";
import CatList from "./CatList";
function Cats() {
  const catPics = useSelector((state) => state.entities);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchCats())
  },[])
 
  return (
    <div>
      <h1>CatBook</h1>
      <CatList catPics={catPics}/>
      {/* add CatList component here */}
    </div>
  );
}

export default Cats;
