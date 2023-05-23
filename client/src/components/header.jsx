
import React from 'react';

const HeaderHome = () => {
  return (
    <>
      <div className='head_image'>
        <img src='https://media.istockphoto.com/id/1280247722/photo/woman-shopping-at-black-friday.jpg?b=1&s=170667a&w=0&k=20&c=3GVQmKFOxzBQgYpk4mf_gU8kDDix7g1K3jVEhwTr0nI=' alt='headImage' />
      </div>

      <div className='head_content'>
        <h1>Welcome in ecomerce shop</h1>
        <p>The right place to shop, here we offer you diffrent types of devices such as i-phones, laptops,  tablets. <span>What are you waiting for!</span>  </p>
        <button className='head_button'> Shop Now </button>
      </div>

    </>
  )
}
export default HeaderHome;