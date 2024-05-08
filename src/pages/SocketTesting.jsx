import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client'; // Socket.IO client library

const CashPayment = () => {
  const [socket, setSocket] = useState(null);
  const [eventData, setEventData] = useState({ // Pre-populate eventData state
    userId: "$2b$10$NuxzhSQLyvYpxgbardvIDeYaeHkkMjlYHTd9588Z.q3oluE7d",
    rideId: "00450d0e-6e05-4e22-8eb4-5e053dd56e87",
    riderId: "$2b$10$ASOWmbAIa1oefF4zRGNbQ.S53qtw9gQ.W9YyFilg5KbC1LYvU.00e"
  }); // Replace with your actual data

  const socketRef = useRef(null);

  useEffect(() => {
    // Create socket connection on component mount
    socketRef.current = io('http://localhost:8001'); // Replace with your server URL
    setSocket(socketRef.current);

    // Cleanup function to disconnect socket on unmount
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  const handleCashPayment = () => {
    if (!socket) {
      console.error('Socket not connected');
      return;
    }

    socket.emit('CASH_PAYMENT', eventData); // Emit event with pre-defined data
  };

  return (
    <div>
      {/* Display UI elements for cash payment selection (optional) */}
      <button onClick={handleCashPayment}>Confirm Cash Payment</button>
    </div>
  );
};

export default CashPayment;
