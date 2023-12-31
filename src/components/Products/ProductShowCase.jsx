import MovingSign from '../MovingSing/MovingSign'
import NavBar from '../header/NavBar'
import ProductSingle from './ProductSingle'
import Footer from '../Footer/Footer'
import styles from '../../App.module.css'

const ProductShowCase = () => {
  return (
    <div className={styles.mainContainer}>
      <MovingSign />
      <NavBar />
      <ProductSingle />
      <Footer />
    </div>
  )
}

export default ProductShowCase
