import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from './../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title
          text1={'ABOUT'}
          text2={'US'}
        />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to [Your Store Name], your one-stop destination for quality products at the best prices. We are dedicated to bringing you a seamless shopping experience with a wide range of categories, from everyday essentials to the latest trends.</p>
          <p>
            Premium Quality – Products carefully selected and tested for durability.

Affordable Prices – Great deals without compromising on value.

Fast & Reliable Delivery – Straight to your doorstep, on time.

Customer Satisfaction – Our priority is making sure you’re happy with every purchase.

Whether you’re shopping for yourself, your family, or gifts for loved ones, we aim to make every order a smooth and satisfying experience.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            Deliver high-quality products that add value to your everyday life.

Provide a safe and seamless shopping experience with secure payments and fast delivery.

Build a community of happy customers by focusing on trust, transparency, and satisfaction.
          </p>


        </div>

      </div>
      <div className='text-4xl py-4'>
        <Title
          text1={'WHY'}
          text2={'CHOOSE US'}
        />
        
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
      
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p>Quality Assurance:</p>
          <p className='text-gray-600'>Every product featured on our platform goes through a careful selection process, ensuring it meets our high standards of authenticity, durability, and reliability. From sourcing to packaging, we maintain strict quality checks so that you always receive items that live up to your expectations. We believe that customer trust is built on consistency, which is why we continuously improve our products and services based on valuable feedback. With us, you can shop confidently, knowing that quality is never compromised.</p>
        </div>
           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p>Convenience:</p>
          <p className='text-gray-600' >we believe shopping should be simple, fast, and stress-free. That’s why we’ve designed our platform to give you a seamless experience from start to finish. With easy navigation, secure payment options, and reliable doorstep delivery, everything you need is just a few clicks away. Whether you’re shopping from home, on the go, or during a busy day, our goal is to make your experience effortless and enjoyable. Convenience isn’t just a feature here—it’s a promise.</p>
        </div>
           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p>Exceptional Customer Service:</p>
          <p className='text-gray-600'>our customers are at the heart of everything we do. We are committed to providing not only great products but also an unmatched level of support to ensure your shopping experience is smooth and enjoyable. Our dedicated customer care team is always ready to assist you—whether it’s answering questions, resolving issues, or guiding you through your purchase. We believe in building lasting relationships based on trust, reliability, and care, so you can shop with confidence knowing that help is always just a message away.</p>
        </div>

      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About