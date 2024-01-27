import Link from 'next/link';
import { BsBagCheckFill, BsPhone } from 'react-icons/bs';



const Success = () => {
    return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsPhone />
        </p>
        <h2>+ 34 649 099 239</h2>
        <p className="email-msg">Llamadas en castellano</p>
        <br></br><br></br>
        <h2>+ 34 628 489 265</h2>
        <p className="email-msg">For calls in english language</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:pilar@ambientalo.com">
          pilar@ambientalo.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
        
        
      </div>
    </div>
  )
}
export default Success
