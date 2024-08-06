"use client"
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgb(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  color:#1a1a1a;
  width: 90%;
  text-align: center;
`;

const ModalButton = styled.button`
  background-color: ${(props) => (props.confirm ? '#1a1a1a' : '#1a1a1a')};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.confirm ? '#005bb5' : '#aaa')};
  }
`;

const Model = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Are you sure you want to delete your account?</h2>
        <div>
          <ModalButton confirm onClick={onConfirm}>Confirm</ModalButton>
          <ModalButton onClick={onClose}>Cancel</ModalButton>
        </div>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Model;
