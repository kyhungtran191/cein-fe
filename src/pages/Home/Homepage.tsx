import Slider from './Slider'
import Categories from './Categories'
import Quotes from './Quotes'
import Services from './Services'
import Featured from './Featured'

/* eslint-disable jsx-a11y/alt-text */

export default function Homepage() {
  return (
    <>
      <Slider></Slider>
      <Categories></Categories>
      {/* Featured */}
      <Featured></Featured>
      {/* Quotes */}
      <Quotes></Quotes>
      {/* Services */}
      <Services></Services>
    </>
  )
}
