// Write your code here
import Slider from 'react-slick'
import './index.css'
import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props
  const options = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="planet-bg-container" data-testid="planets">
      <h1 className="heading">Planets</h1>
      <Slider {...options}>
        {planetsList.map(each => (
          <PlanetItem key={each.id} planetDetails={each} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
