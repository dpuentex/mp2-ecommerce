import "../assets/css/checkbox.css";
import { useContext } from "react";
import { CategoryContext } from "../ContextList";


export default function Checkbox(props) {
    const [category, setCategory] = useContext(CategoryContext)
    const { value } = props
    // console.log(value)

    function handleCheckboxChange() {
        if (category === "All") {
        } else if (category === value) {
        } else {
        }
    }
    return (
      <div className="checkbox-wrapper-4">
      <input className="inp-cbx" id={value} type="checkbox"
      onClick={() => console.log(value)}/>
      <label className="cbx" htmlFor={value}><span>
      <svg width="12px" height="10px">
        <use href="#check-4"></use>
      </svg></span><span>{value}</span></label>
      <svg className="inline-svg">
        <symbol id="check-4" viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </symbol>
      </svg>
    </div>
    )
}