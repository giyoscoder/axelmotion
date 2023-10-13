import React from 'react'
import MidComponentItem from './MidComponentItem';
import MidPhone from '../../assets/images/MidComponentPhone.png';
import MidPhone2 from '../../assets/images/midPhone2.png';

const MidComponentParent = ({title, img, text, reverse}) => {
  return (
    <div >
        <MidComponentItem title='Dive into the Future' text='In a world where people constaintly have phone in their hands, the need for online opportunities is growing. We have a solution - fully digital acces to all information and services related to the interior and design  itself. Everything for a carefree stay in the palm of a hand.' img={MidPhone} reverse/>
        <MidComponentItem title='Search by room' text='In a world where people constaintly have phone in their hands, the need for online opportunities is growing. We have a solution - fully digital acces to all information and services related to the interior and design  itself. Everything for a carefree stay in the palm of a hand.' img={MidPhone2}/>
    </div>
  )
}

export default MidComponentParent