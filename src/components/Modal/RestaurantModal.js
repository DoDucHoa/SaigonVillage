import { useState, useEffect } from 'react';
import RestaurantImage from '../../assets/images/restaurant/IMG_1771.jpg'

const RestaurantModal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    // Modal content - easily customizable
    const modalContent = {
        title: 'Mittagspause',
        description: '7.–8. & 11.–15. August mittags geschlossen',
        imageUrl: RestaurantImage,
        imageAlt: 'Delicious pasta dish',
        buttonText: 'Claim Discount',
        description2: 'Wir bitten um Ihr Verständnis und freuen uns auf Ihren Besuch am Abend!',
        showConfirmButton: false,
    };

    useEffect(() => {
        // Auto-popup after 1 second when component mounts
        const timer = setTimeout(() => {
            if (!isDismissed) {
                setIsVisible(true);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [isDismissed]);

    const closeModal = () => {
        setIsVisible(false);
        setIsDismissed(true);
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const handleAction = () => {
        // Handle the main action (claim discount, reserve table, etc.)
        alert(`${modalContent.buttonText} clicked! Redirect to your booking/ordering system here.`);
        closeModal();
    };

    if (!isVisible) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
                padding: '20px',
                boxSizing: 'border-box'
            }}
            onClick={handleOverlayClick}
        >
            <div
                style={{
                    backgroundColor: 'black',
                    borderRadius: '12px',
                    maxWidth: '500px',
                    width: '100%',
                    maxHeight: '90vh',
                    overflow: 'auto',
                    position: 'relative',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                    animation: 'modalSlideIn 0.3s ease-out'
                }}
            >
                {/* Close button */}
                <button
                    onClick={closeModal}
                    style={{
                        position: 'absolute',
                        top: '15px',
                        right: '15px',
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                        cursor: 'pointer',
                        fontSize: '18px',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1,
                        transition: 'background-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'}
                >
                    ×
                </button>

                {/* Image section */}
                {modalContent.imageUrl && (
                    <div style={{ position: 'relative' }}>
                        <img
                            src={modalContent.imageUrl}
                            alt={modalContent.imageAlt}
                            style={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover',
                                borderRadius: '12px 12px 0 0'
                            }}
                        />
                    </div>
                )}

                {/* Content section */}
                <div style={{ padding: '25px' }}>
                    <h2 style={{
                        margin: '0 0 15px 0',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: 'rgb(255, 215, 0)',
                        textAlign: 'center'
                    }}>
                        {modalContent.title}
                    </h2>

                    <p style={{
                        margin: '0 0 20px 0',
                        fontSize: '16px',
                        lineHeight: '1.5',
                        color: 'white',
                        textAlign: 'center'
                    }}>
                        {modalContent.description}
                    </p>

                    {modalContent.description2 && (
                        <p style={{
                            margin: '0 0 25px 0',
                            fontSize: '14px',
                            color: '#949494',
                            textAlign: 'center',
                            fontStyle: 'italic'
                        }}>
                            {modalContent.description2}
                        </p>
                    )}

                    {/* Action buttons */}
                    <div style={{
                        display: 'flex',
                        gap: '10px',
                        flexDirection: window.innerWidth < 480 ? 'column' : 'row'
                    }}>
                        {modalContent.showConfirmButton && (
                            <button
                                onClick={handleAction}
                                style={{
                                    flex: 1,
                                    backgroundColor: '#ff6b35',
                                    color: 'white',
                                    border: 'none',
                                    padding: '12px 20px',
                                    borderRadius: '6px',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.2s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#e55a2b'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#ff6b35'}
                            >
                                {modalContent.buttonText}
                            </button>
                        )}

                        <button
                            onClick={closeModal}
                            style={{
                                flex: 1,
                                backgroundColor: 'rgb(255, 215, 0)',
                                color: 'black',
                                border: '2px solid #ddd',
                                padding: '12px 20px',
                                borderRadius: '6px',
                                fontSize: '16px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.borderColor = '#bbb';
                                e.target.style.color = '#333';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.borderColor = '#ddd';
                                e.target.style.color = '#666';
                            }}
                        >
                            Schließen
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
        </div>
    );
};

export default RestaurantModal;