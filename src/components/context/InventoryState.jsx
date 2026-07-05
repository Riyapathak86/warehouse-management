


import React, { useEffect, useState } from 'react'
import Context from './Context'
import axios from 'axios'

const InventoryState = ({ children }) => {

  const [InventoryData, setInventoryData] = useState([])
  const [FilterData, setfilterData] = useState([])
  const [searchitem, setsearchitem] = useState("")
  const [priceimg, setpriceimg] = useState( setInventoryData)
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
const [name, setname] = useState("")
const [productname, setproductname] = useState("")
const [category, setcategory] = useState("");
const [mrp, setmrp] = useState("");
const [stockqty, setstockqty] = useState("");
const [image, setimage] = useState("")
const [tagline, settagline] = useState("")
const [description, setdescription] = useState("");
const [price, setprice] = useState("");
const [features, setfeatures] = useState("");
const [order, setorder] = useState("");
const [painter, setpainter] = useState("");
const [value,setvalue]= useState("")
const [username, setUsername] = useState(
  localStorage.getItem("username") || ""  
);
  useEffect(() => {
axios.get(`${import.meta.env.VITE_API_URL}/`)
      .then(res => {
        console.log("API DATA 👉", res.data)

        setInventoryData(res.data)
        setfilterData(res.data)
      })
      .catch(err => {
        console.log("ERROR 👉", err)
      })
  }, [])

  return (
    <Context.Provider
      value={{
        InventoryData, setInventoryData,
        FilterData, setfilterData,
        searchitem, setsearchitem,
        priceimg, setpriceimg,
        email, setemail,
        password, setpassword,
       name, setname,
       productname, setproductname,
       price, setprice,
category, setcategory,
mrp, setmrp,
stockqty, setstockqty,
image, setimage,
tagline, settagline,
description, setdescription,
features, setfeatures,
order, setorder,
painter, setpainter,
value,setvalue,
username, setUsername
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default InventoryState