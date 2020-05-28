import ReactDOM from "react-dom"
import React from "react"
import { ProductsFilters } from "./Components/ProductsFilters"

const rootEl = document.getElementById("react-products-filters")

rootEl && ReactDOM.render(<ProductsFilters />, rootEl)