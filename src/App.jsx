import './App.css'
import img_d from './assets/images/image-product-desktop.jpg'
import img_m from './assets/images/image-product-mobile.jpg'

function App() {

  return (
    <>
      <div className='bg-Cream grid place-items-center h-screen'>
        <div className='max-w-2xl w-[90vw] my-10 flex flex-col md:flex-row bg-white rounded-xl'>
            <div className='basis-1/2	'>
              <img src={img_m} alt="" className='md:hidden rounded-t-xl'/>
              <img src={img_d } alt="Perfume"  className='hidden md:block rounded-l-xl h-full object-cover'/>
            </div>
            <div className='md:p-8 p-4 basis-1/2'>
              <span className='font-Montserrat tracking-[.2rem] text-Dark-grayish-blue text-sm'>PERFUME</span>
              <h1 className='mt-5 font-Fraunces md:text-4xl text-3xl font-semibold text-Very-dark-blue'>Gabrielle Essence Eau De Parfum</h1>
              <p className='mt-5 text-sm md:text-base font-Montserrat text-Dark-grayish-blue'>A floral, solar and voluptuous interpretation composed by Olivier Polge, 
              Perfumer-Creator for the House of CHANEL.</p>
              <div className='flex my-5 items-center'>
                <span className='font-Fraunces text-Dark-cyan md:text-4xl text-3xl'>$149.99</span>
                <span className='font-Montserrat ml-5 text-Dark-grayish-blue line-through text-xs md:text-base'>$169.99</span>
              </div>
              <div className='flex justify-center'>
                <button className='flex w-full justify-center py-4  bg-Dark-cyan text-white font-Montserrat  items-center rounded-xl hover:bg-green-950'>
                  <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF"/>
                  </svg>
                  <span className='text-sm font-semibold ml-3'>Add to Cart</span>
                </button>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
