import ReactDOM from "react-dom"
import React from "react"
import App from "./App"

const rootEl = document.getElementById("react-products-filters")
const data = JSON.parse(document.querySelector("[data-products-json]").innerHTML || '[]')


rootEl && ReactDOM.render(<App products={data} />, rootEl)