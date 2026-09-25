import Link from 'next/link';
function Logo() {
  return (
    <Link href='/' className='flex items-center gap-4 z-10'>
      <img src='/logo.png' height='60' width='60' alt='The Wild Oasis logo' />
      {/* u src navodimo samo ime slike ako je u public foldru cak moze i bez / */}
      <span className='text-xl font-semibold text-primary-100'>
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
