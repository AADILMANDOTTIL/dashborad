import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (Props) => {
  const [ShowLogin, setShowLogin] = useState(false)
  const [ShowLogin2, setShowLogin2] = useState(false)
  const [Category, setCategory] = useState([{ items: "CSPM EXECUTIVE DASHBOARD" }, { items: "CWPP DASHBOARD" }, { items: "REGISTRY SCAN" }])
  const [Detail, SetDetail] = useState({
    name: "",
    text: ""
  })
  const [dataWidget, setDatawidget] = useState([{name:"Cloud Accounts",text:"connected"},{name:"Cloud Account Risk Assessment",text:"failed"}])
  const [searchValue, setSearchValue] = useState("")
  const [filterValue, SetFilterValue] = useState(dataWidget)


  

// add Category fuction
  const addCategory = (items) => {
    setCategory([...Category, { items, status: false }])

  }

  // delete category functio
  const DeleteCategory = (index) => {
    const deleteVal = [...Category]
    deleteVal.splice(index, 1)
    alert("Are you Sure?", setCategory(deleteVal))
  }

  
  const handleChange = (e) => {
    const { name, value } = e.target
    SetDetail((prev) => {
      return { ...prev, [name]: value }
    })
  }
  let { name, text } = Detail
  const submit = (e) => {
    e.preventDefault()
    setDatawidget([...dataWidget, { name, text }])
    SetDetail({ name: "", text: "" })
  }

  const DeleteWidget = (index) => {
    const deleteVal = [...filterValue]
    deleteVal.splice(index, 1)
    alert("Are you Sure?", SetFilterValue(deleteVal))
  }
  const onchange = (event) => {
    const result = event.target.value.toLocaleLowerCase()
    setSearchValue(result)
    // console.log(result);
  }
  useEffect(() => {
    const newData = dataWidget.filter((value) => {
      return value.name.toLocaleLowerCase().includes(searchValue)
    })
    SetFilterValue(newData)
    // console.log(newData);

  }, [dataWidget, searchValue])
  
  const contextValue = {
    ShowLogin,
    ShowLogin2,
    setShowLogin,
    setShowLogin2,
    addCategory,
    Category,
    DeleteCategory,
    onchange,
    submit,
    DeleteWidget,
    filterValue,
    handleChange





  }
  return (
    <StoreContext.Provider value={contextValue}>
      {Props.children}
    </StoreContext.Provider>
  )

}

export default StoreContextProvider