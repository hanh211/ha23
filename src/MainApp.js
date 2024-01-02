import {useSelector,useDispatch} from "react-redux"
const MainApp=({value,inc,dec})=>{
  const counter=useSelector(state=>state.counter)
  const dispatch=useDispatch()
  return(
    <>
      <h1>Main App</h1>
      <h2>My value:{counter}</h2>
      <button onClick={()=>dispatch({"type":"inc"})}>INC</button>
      <button onClick={()=>dispatch({"type":"dec"})}>DEC</button>
    </>
  )
}
export default MainApp
