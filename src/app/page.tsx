'use client'
import React, { useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import MainCard from './component/Card/MainCard';
import Modal from './component/Modal';

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<any>({});

  const handleOpenModal = (content: any) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const downloadFile = async (url: string, fileName: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();

      const blobUrl = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();

      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://103.183.75.112/api/directory/dataList');
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='p-10'>
        <h1 className='text-center font-bold text-2xl mb-5'>List content</h1>
        <div className='w-full flex gap-20 items-center flex-wrap'>
          {data.map((item) => (
            <MainCard
              key={item.id}
              imageUrl={item.banner}
              title={item.title}
              description={item.description}
              onClick={() => handleOpenModal(item)}
            />
          ))}
        </div>
      </div>
      <Modal
        content={modalContent}
        isOpen={showModal}
        onClose={handleCloseModal}
        onDownload={downloadFile}
      />
      <Footer />
    </div>
  );
};

export default App;
