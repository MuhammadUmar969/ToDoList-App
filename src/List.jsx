import React, { useState } from "react";
import ToDoList from "./ToDolist";

const List = () => {
   const [inputList , setInputList] = useState("");
   const [items , setItems] = useState([]);

   const listOfItems=()=>{
    if(inputList!=="" && items.length<=9){
     setItems((oldItems)=>{
       return(
         [...oldItems,inputList]
       )
     })
    }
    if(items.length>9){
     alert("You can enter 10 items only")
    }
    if(inputList==""){
     alert("input field required")
    }
     setInputList("");
   }

   const deleteItems = (id) => {
    console.log("Deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
       return index !== id;
      })
    })
   };

   const itemsEvent = (event) =>{
     setInputList(event.target.value);
   };

   
    return(
    <>
       <div className="main_div">
        <div className="center_div">
            <br />
            <h1>ToDo List</h1>
            <br />
            <input type="text" placeholder="Add a Items" onChange={itemsEvent} value={inputList}/>
            <button onClick={listOfItems}>+</button>
            <ol>
                {items.map( (itemsval, index) => {
                 return <ToDoList 
                 key = {index}
                 id = {index}
                 text = {itemsval}
                 onSelect = {deleteItems} />;
                })}
            </ol>
        </div>
       </div>
    </>
);
}

export default List;