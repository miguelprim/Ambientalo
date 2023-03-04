import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsAlignStart, BsBagCheckFill, BsChatQuote, BsDash, BsNewspaper, BsPalette, BsPaperclip, BsPencil, BsPhone, BsQuestion, BsReception0, BsReception1, BsRecord, BsSafe } from 'react-icons/bs';


import { useStateContext } from '../context/StateContext';
import { TiChevronLeftOutline } from 'react-icons/ti';


const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
   
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsDash />
        </p>
        <h2>Terms & Conditions</h2>
        <p className="email-msg">Llamadas en castellano</p>
        <br></br><br></br> 
        
        AVISO LEGAL Y CONDICIONES GENERALES DE USO

        I. INFORMACIÓN GENERAL
          En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los siguientes datos de información general de este sitio web:

          La titularidad de este sitio web, www.trianaessence.com, (en adelante, Sitio Web) la ostenta el grupo TRIANA ESSENCE, marca perteneciente a Miguel Cintas, Sevilla.

          La actividad está registrada conforme al gremio de autónomos por módulos en España.

          Los datos de contacto son:

          Dirección Sede Sevilla: 41701, Dos Hermanas, Sevilla

          Email de contacto: info@trianaessence.com

          Explicado de forma resumida, TRIANA ESSENCE tiene por objeto facilitar al público en general, las actividades que realiza y las características de los productos publicitados. TRIANA ESSENCE se reserva la facultad de efectuar, en cualquier momento y sin previo aviso, modificaciones de la información contenida en su página web o en la presentación de esta. TRIANA ESSENCE no se hace responsable de consecuencia alguna, o perjuicio que se deriven del acceso a esta página web, uso de la información de la misma o por el acceso a otras materias en Internet a través de conexiones con ésta. Los derechos de propiedad intelectual sobre todos los elementos en la web pertenecen en exclusiva a TRIANA ESSENCE.

<br></br><br></br>
          II. TÉRMINOS Y CONDICIONES GENERALES DE USO
El objeto de las condiciones: El Sitio Web El objeto de las presentes Condiciones Generales de Uso (en adelante, Condiciones) es regular el acceso y la utilización del Sitio Web. A los efectos de las presentes Condiciones se entenderá como Sitio Web: la apariencia externa de los interfaces de pantalla, tanto de forma estática como de forma dinámica, es decir, el árbol de navegación; y todos los elementos integrados tanto en los interfaces de pantalla como en el árbol de navegación (en adelante, Contenidos) y todos aquellos servicios o recursos en línea que en su caso ofrezca a los Usuarios (en adelante, Servicios).







        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:triana.essence@gmail.com">
          triana.essence@gmail.com
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
