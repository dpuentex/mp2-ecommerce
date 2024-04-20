import "../assets/css/checkbox.css";
import { useContext, useEffect, useRef } from "react";
import {  SearchContext } from "../ContextList";


export default function Checkbox(props) {
  const elementRef=useRef(null)

  const { accessSearch,
    accessSearch: { 
      category, 
      searchTerm, 
      minPrice, 
      maxPrice, 
      detailFilters },
    setSearch: {
      setCategory,
      setSearchTerm,
      setMinPrice,
      setMaxPrice,
      setDetailFilters,
    },
  } = useContext(SearchContext);

    const {detailKey, detailValue, updateSearch} = props

    let detailPair = {[detailKey]:detailValue}

    function handleCheckboxChange(detailKey, detailValue, checked) {
      console.log(detailKey,detailValue,checked)
      console.log(detailFilters)
      if (checked) {
        let newDetailCollection = detailFilters
        if (!newDetailCollection[detailKey]){newDetailCollection[detailKey] = []}
        console.log(newDetailCollection[detailKey])
        newDetailCollection[detailKey].push(detailValue)
        console.log(newDetailCollection[detailKey])
        if(detailFilters!=newDetailCollection){console.log ("updating");setDetailFilters(newDetailCollection)}
        // setDetailFilters(newDetailCollection)
      } else {
        let newDetailCollection = detailFilters
        if (!newDetailCollection[detailKey]){newDetailCollection[detailKey] = []}
        console.log(newDetailCollection[detailKey])
        newDetailCollection[detailKey].splice(newDetailCollection[detailKey].indexOf(detailValue), 1)
        newDetailCollection[detailKey].splice(newDetailCollection[detailKey].indexOf(detailValue), 1)
        console.log(newDetailCollection[detailKey])
        if(detailFilters!=newDetailCollection){console.log ("updating");setDetailFilters(newDetailCollection)}
        // let preRemovalTest = {...detailFilters}[detailKey]
        // console.log({...detailFilters}[detailKey])
        // setDetailFilters({...detailFilters}[detailKey] = detailValue)
      }
        updateSearch()
        console.log(detailFilters)
    }
    // function handleCheckboxChange(detailKey, detailValue, checked) {
    //   let newDetailCollection = {}
    //   Object.keys(document.getElementsByClassName("inp-cbx")).forEach((key) => {
    //     let element = document.getElementsByClassName("inp-cbx")[key]
    //     if(element.checked){
    //       let currentDetailKey = element.getAttribute("detailkey")
    //       let currentDetailValue = element.getAttribute("detailvalue")
    //       console.log(currentDetailKey, currentDetailValue)
    //       if(!newDetailCollection[currentDetailKey]){newDetailCollection[currentDetailKey] = []}
    //       newDetailCollection[currentDetailKey].push(currentDetailValue)
    //     }
    //   })
    //   console.log(newDetailCollection)
    //   setDetailFilters(newDetailCollection)
    // }


  //   if(elementRef.current)
  //  { if(detailFilters[detailKey] && detailFilters[detailKey].includes(detailValue)) {
  //     elementRef.current.checked = true
  //   } else {
  //     if(elementRef.current.checked){elementRef.current.checked = false;console.log("unchecking something for you")}
      
  //   }}

    return (
      <div className="checkbox-wrapper-4">
      <input  ref={elementRef} className="inp-cbx" id={detailKey + "-sssplit-" + detailValue} detailkey={detailKey} detailvalue={detailValue} type="checkbox"
      onClick={(e) => {handleCheckboxChange(detailKey, detailValue, e.target.checked)}}/>
      <label className="cbx" htmlFor={detailKey + "-sssplit-" + detailValue}><span>
      <svg width="12px" height="10px">
        <use href="#check-4"></use>
      </svg></span><span>{detailValue}</span></label>
      <svg className="inline-svg">
        <symbol id="check-4" viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </symbol>
      </svg>
    </div>
    )
}