import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen text-yellow-100'>
      <header className='top-0 bg-grey-900 pt-4 pb-2'>
        <div className='parent'>
          <Link href='/'><a className='sm:max-md:absolute left lg:text-right lg:pt-12 lg:pr-16'>🏡</a></Link>
          <div className="center">
            <div className='mx-auto text-yellow-200 font-mono text-2xl md:text-4xl text-center'> &#47;* no comment *&#47; </div>
            <div className='mx-auto text-yellow-300 font-mono text-md md:text-xl text-center py-2'> The Loosely Logical Linux Library </div>
          </div>
          <div className="right"></div>
        </div>
      </header>
      <main className='container mx-auto flex-1 pt-6 px-2'>{children}</main>
      <footer className='sticky inset-x-0 bottom-0 bg-grey-900 mt-8 py-4'>
        <div className='container mx-auto flex justify-center text-yellow-300 font-mono text-l'>
          &copy; 2022 Tyler Adam
        </div>
      </footer>
    </div>
  );
}
