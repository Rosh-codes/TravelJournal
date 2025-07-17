import Entry from "./components/Entry"
import Header from "./components/Header"
import data from "./data"
export default function App(){
const sourcedata = data.map((values)=>{
  return(
    <>
    <Entry
    img = {values.img.src}
    alt = {values.img.alt}
    name = {values.title}
    country = {values.country}
    googleMaps = {values.googleMapsLink}
    dates = {values.dates}
    description = {values.text}
    />
    </>
  )
})
  return (
    <>
<Header />
    {sourcedata}
  </>
)

}