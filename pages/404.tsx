import type { NextPage } from 'next';

const NotFound: NextPage = () => {
  return (
    <div className='flex flex-col'>
      <div className='w-full h-[480px] flex items-center justify-center'>
        404 | This page could not be found.
      </div>
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
        <div className='bg-term'></div>
      </div>
    </div>
  );
};

export default NotFound; 