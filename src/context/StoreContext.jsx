import React, { createContext, useState, useEffect } from 'react';

export const StoreContext = createContext(null);

const StoreContextProvider = (Props) => {
  const [ShowLogin, setShowLogin] = useState(false);
  const [ShowLogin2, setShowLogin2] = useState(false);
  const [Category, setCategory] = useState([
    { items: "CSPM EXECUTIVE DASHBOARD", widgets: [] },
    { items: "CWPP DASHBOARD", widgets: [] },
    { items: "REGISTRY SCAN", widgets: [] }
  ]);
  const [dataWidget, setDatawidget] = useState([
    { name: "Cloud Accounts", text: "connected" },
    { name: "Cloud Account Risk Assessment", text: "failed" }
  ]);
  console.log(dataWidget);

  const [searchValue, setSearchValue] = useState("");
  const [filterValue, SetFilterValue] = useState(dataWidget);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(null);

  useEffect(() => {
    // Initialize categories with default widgets if not already set
    const initializedCategories = Category.map(category => ({
      ...category,
      widgets: category.widgets.length ? category.widgets : [...dataWidget]
    }));
    setCategory(initializedCategories);
  }, [dataWidget]);

  const addCategory = (items) => {
    const newCategory = { items, widgets: [...dataWidget] };
    setCategory([...Category, newCategory]);
    // console.log('New category added:', newCategory);
  };

  const DeleteCategory = (index) => {
    const updatedCategory = [...Category];
    updatedCategory.splice(index, 1);
    setCategory(updatedCategory);
  };

  const submit = (categoryIndex, name, text) => {
    if (name.trim() && text.trim()) {
      const updatedCategory = [...Category];
      if (updatedCategory[categoryIndex]) {
        updatedCategory[categoryIndex].widgets.push({ name, text });
        setCategory(updatedCategory);
        setShowLogin2(false);
        // console.log('Widget added:', { name, text });
      } else {
        alert("Invalid category index.");
      }
    } else {
      alert("Please fill in all fields");
    }
  };

  const DeleteWidget = (categoryIndex, widgetIndex) => {
    const updatedCategory = [...Category];
    if (updatedCategory[categoryIndex]) {
      updatedCategory[categoryIndex].widgets.splice(widgetIndex, 1);
      setCategory(updatedCategory);
    } else {
      alert("Invalid category index.");
    }
  };

  const handleSetShowLogin2 = (show, index) => {
    setShowLogin2(show);
    setCurrentCategoryIndex(index);
  };
  const onchange = (event) => {
    const result = event.target.value.toLocaleLowerCase()
    setSearchValue(result)
    // console.log(result);
  }
  useEffect(() => {
    const newData = dataWidget.filter((value) => {
      return value.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    SetFilterValue(newData);
    // console.log(newData);

  }, [dataWidget, searchValue]);

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
    onchange,
    filterValue,
    handleChange: (e) => {
      const { name, value } = e.target;
      SetDetail((prev) => ({ ...prev, [name]: value }));
    },
    currentCategoryIndex
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {Props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;