import Rv2Image from '../../public/images/rv_2.jpg'
import Image from 'next/image'

const images = [Rv2Image]

export const ImageGallery = () => (
  <section className='py-24' id='gallery'>
  <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
    {images.map((image, index) => (
      <li key={index} className="relative">
        <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
          <Image layout='fill' objectFit='cover' src={image} alt="" className="pointer-events-none group-hover:opacity-75" />
        </div>
      </li>
    ))}
  </ul>
  </section>
)