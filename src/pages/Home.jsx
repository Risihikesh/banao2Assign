import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { Box, Typography } from '@mui/material';
import UserCard from '../components/UserCard';
import CircularProgress from '@mui/material/CircularProgress';
import ViewUser from '../components/ViewUser';
import Modal from '@mui/material/Modal';
import '../App.css';
import MobileView from '../components/MobileView';

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const init = async () => {
    try {
      const res = await axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users');
      setUser(res.data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const [view, setView] = useState(null);

  useEffect(() => {
    if (window.innerWidth < 550) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [view]);

  const handleClick = (data) => {
    setView(data);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <div className='homediv' style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100vh' }}>
        <div style={{}} className='leftdiv'>
          <h1 style={{ textAlign: 'center' }}>Users Info</h1>
          <div>
            {loading ? (
              <div style={{ textAlign: 'center', alignContent: 'center' }}>
                <CircularProgress />
              </div>
            ) : user && user.length > 0 ? (
              user.map((data, index) => (
                <div onClick={() => handleClick(data)} key={index}>
                  <UserCard props={data} />
                </div>
              ))
            ) : (
              <div style={{ textAlign: 'center' }}>
                <Typography variant="subtitle1">No data to show Please try again!!</Typography>
              </div>
            )}
          </div>
        </div>
        <div className='mobileview'>
          {view && (
            <div onClick={() => setOpen(false)} className='mobileview'>
              <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box className='mobileview'>
                  <MobileView props={view} />
                </Box>
              </Modal>
            </div>
          )}
        </div>
        <div style={{}} className='rightdiv'>
          {view && (
            <div>
              <ViewUser props={view} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
