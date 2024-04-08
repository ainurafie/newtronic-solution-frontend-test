import React from 'react';

interface ModalProps {
    content: any;
    isOpen: boolean;
    onClose: () => void;
    onDownload: (url: string, fileName: string) => void;
}

const Modal: React.FC<ModalProps> = ({ content, isOpen, onClose, onDownload }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 px-10 w-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded-lg">
                <h2 className="text-2xl text-center font-bold mb-2">{content.title}</h2>
                <div className='flex gap-5 items-center py-10'>
                    {content.playlist.map((item: any, index: number) => (
                        <div key={index}>
                            {item.type === 'video' ? (
                                <>
                                    <iframe src={item.url} title={`video-${index}`} aria-label={`video-${index}`}></iframe>
                                    <h1 className='font-semibold mb-1 mt-3'>{item.title}</h1>
                                    <h1>{item.description}</h1>
                                    <button
                                        className='bg-blue-500 text-white px-2 py-1 rounded'
                                        onClick={() => onDownload(item.url, item.title)}
                                    >
                                        Download
                                    </button>
                                </>
                            ) : item.type === 'image' ? (
                                <>
                                    <img src={item.url} width={500} height={500} alt={`image-${index}`} aria-label={`image-${index}`} />
                                    <h1 className='font-semibold mb-1 mt-3'>{item.title}</h1>
                                    <h1>{item.description}</h1>
                                    <button
                                        className='bg-blue-500 text-white px-2 py-1 rounded'
                                        onClick={() => onDownload(item.url, item.title)}
                                    >
                                        Download
                                    </button>
                                </>
                            ) : null}
                        </div>
                    ))}
                </div>
                <div className="flex justify-end">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={onClose} tabIndex={0} aria-label="Close Modal">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
