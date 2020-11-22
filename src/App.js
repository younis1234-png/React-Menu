import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

// filter the unique categories
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

console.log(allCategories);
// we will say all the categories of our items
// new Set it only get the unique values
// set it up to a new array starting i all
// and pass it as our satte value

function App() {
  // menu item to pass in our date name items
  const [menuItems, setMenuItems] = useState(items);

  // categories and empty array
  const [categories, setCategories] = useState(allCategories);

  //
  const filterItems = (category) => {
    // now we gonna set up a functionality
    if (category === "all") {
      setMenuItems(items);
      return; // all our items
    }
    //we go with newItem and the origin list anf filter
    const newItems = items.filter((item) => item.category === category);
    // we re looking for catogory with the same values
    // and our setmenuitems is our newitems
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>
            Our menu<div className="underline"></div>
          </h2>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;

// we are usinng catogores in our array as a button
