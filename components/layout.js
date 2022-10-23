import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen text-yellow-100'>
      <header className='sticky inset-x-0 top-0 bg-grey-900 pt-4 pb-2'>
        <div className='grid grid-cols-5 mx-auto justify-center'>
          <div></div>
          <Link href='/'><a className='pt-10 justify-self-end'>🏡</a></Link>
          <div>
            <div className='mx-auto text-yellow-200 font-mono text-3xl text-center'> &#47;* no comment &#47;* </div>
            <div className='mx-auto text-yellow-300 font-mono text-l text-center py-2'> The Loosely Logical Linux Library </div>
          </div>
          <div></div>
        </div>
      </header>
      <main className='container mx-auto flex-1 pt-6'>{children}</main>
      <footer className='sticky inset-x-0 bottom-0 bg-grey-900 mt-8 py-4'>
        <div className='container mx-auto flex justify-center text-yellow-300 font-mono text-l'>
          &copy; 2022 Tyler Adam
        </div>
      </footer>
    </div>
  );
}
