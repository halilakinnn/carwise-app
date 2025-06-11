import { Avatar, Box, IconButton, Menu, MenuItem, Stack } from '@mui/material';
import React, { useState } from 'react';
import LoginAccount from './LoginAccount';
import { useNavigate } from 'react-router-dom';


export default function AppBar({onOpenClick, isLoggedIn, user, onLogout, setIsLoggedIn}) {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
  if (searchValue.trim() !== '') {
    navigate(`/arac-satin-al?q=${encodeURIComponent(searchValue.trim())}`);
    setSearchValue('');
  }
};

  const handleGoToAracAl = () => (
    navigate('/arac-satin-al')
  );
  const handleGoToFiyatOgren = () => (
    navigate('/fiyat-ogren')
  );
  const handleGoToHome = () => (
    navigate('/')
  );
  const handleGoToAracSat = () => (
    navigate('/fiyat-ogren')
  ) //İlan ver sayfası yapılınca navigate değiştirelecek.

  return (
    <>
    <Box className='bg-[#FDFDFD] w-full h-18 shadow-md flex items-center justify-around'>
      <Box className='flex gap-28'>
        <p className='text-[32px] text-black  font-serif font-black cursor-pointer tracking-wide' onClick={handleGoToHome}>CARWISE</p>
        <Box className='flex w-90  rounded bg-gray-200'>
          <input 
            type="search" 
            id='search' 
            name='search'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
            placeholder='Kelime, ilan numarası veya satıcı adı ara' 
            className='w-full border-none bg-transparent px-4 py-2 text-black outline-none focus:outline-none text-sm'
            />
            <button className='rounded bg-[#dc143c] px-6 py-2 text-white cursor-pointer' onClick={handleSearch}>
              Ara
            </button>
        </Box>
      </Box>
      <Box className='flex gap-8 items-center text-lg cursor-pointer '>
            <span className="relative group " onClick={handleGoToAracAl}>
              Araç Al
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#dc143c] transition-all duration-300 group-hover:w-full"></span>
            </span>
            <span className="relative group " onClick={isLoggedIn ? (handleGoToAracSat) : () => onOpenClick("login")}>
              Araç Sat
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#dc143c] transition-all duration-300 group-hover:w-full"></span>
            </span>
            <span className="relative group" onClick={isLoggedIn ? (handleGoToFiyatOgren) : () => onOpenClick("login")}>
              Fiyat Öğren
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#dc143c] transition-all duration-300 group-hover:w-full"></span>
            </span>
            {isLoggedIn ? (
              <LoginAccount onLogout={onLogout} fullName="Batuhan Gözüpek"/>
            ): (
              <button className='bg-[#dc143c] px-4 py-2 rounded-xl text-white cursor-pointer' onClick={() => onOpenClick("login","login-bton")}>
                Giriş Yap
              </button>           
            )}
      </Box>
    </Box>
    </>
  );
}