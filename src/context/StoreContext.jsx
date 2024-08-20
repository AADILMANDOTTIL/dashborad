import React, { createContext, useState } from 'react';

export const StoreContext = createContext(null);

const StoreContextProvider = (Props) => {
  const [ShowLogin, setShowLogin] = useState(false);
  const [ShowLogin2, setShowLogin2] = useState(false);
  const [Category, setCategory] = useState([
    {
      items: "CSPM EXECUTIVE DASHBOARD",
      widgets: [
        { name: "Cloud Accounts", text: "connected" },
    { name: "Cloud Account Risk Assessment", text: "failed" }
      ]
    },
    {
      items: "CWPP DASHBOARD",
      widgets: [
        { name: "Cloud Accounts", text: "connected" },
    { name: "Cloud Account Risk Assessment", text: "failed" }
      ]
    },
    {
      items: "REGISTRY SCAN",
      widgets: [
        { name: "Cloud Accounts", text: "connected" },
    { name: "Cloud Account Risk Assessment", text: "failed" }
      ]
    }
  ]);
  const [searchValue, setSearchValue] = useState("");
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(null);

  const addCategory = (items) => {
    const newCategory = { items, widgets: [] };
    setCategory([...Category, newCategory]);
  };

  const DeleteCategory = (index) => {
    const updatedCategory = [...Category];
    updatedCategory.splice(index, 1);
    setCategory(updatedCategory);
  };

  const submit = (categoryIndex, name, text) => {
    const updatedCategory = [...Category];
    if (updatedCategory[categoryIndex]) {
      updatedCategory[categoryIndex].widgets.push({ name, text });
      setCategory(updatedCategory);
      setShowLogin2(false);
    }
  };

  const DeleteWidget = (categoryIndex, widgetIndex) => {
    const updatedCategory = [...Category];
    updatedCategory[categoryIndex].widgets.splice(widgetIndex, 1);
    setCategory(updatedCategory);
  };

  const handleSetShowLogin2 = (show, index) => {
    setShowLogin2(show);
    setCurrentCategoryIndex(index);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const contextValue = {
    ShowLogin,
    ShowLogin2,
    setShowLogin2,
    setShowLogin,
    handleSetShowLogin2,
    Category,
    addCategory,
    DeleteCategory,
    submit,
    DeleteWidget,
    searchValue,
    handleChange,
    currentCategoryIndex
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {Props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;