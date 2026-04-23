import React from 'react'
import Context from './Context'
import Data from '../wareflow/Data'
import { useState,useContext} from 'react'
const InventoryState = ({children}) => {
const [InventoryData, setInventoryData] = useState(Data)
    const [FilterData, setfilterData] = useState(InventoryData)
    const [searchitem, setsearchitem] = useState("")
    const [priceimg, setpriceimg] = useState(Data)
  return (
   <Context.Provider
    value={{InventoryData, setInventoryData,
FilterData, setfilterData,
searchitem, setsearchitem,
priceimg, setpriceimg
    }}>
      {children}
   </Context.Provider>
  )
}

export default InventoryState