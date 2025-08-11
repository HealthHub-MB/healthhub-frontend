import React from "react";
import Modal from "./Modal";
import Button from "./Button";

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Confirm Deletion"
      showFooter={true}
      hideCloseButton={true}
      footerContent={
        <>
          <Button
            label="Cancel"
            onClick={onClose}
            color="gray"
            bgcolor="#E5E7EB"
            className="hover:bg-gray-300"
            textSize="1rem"
          />
          <Button
            label="Confirm"
            onClick={onConfirm}
            color="white"
            bgcolor="#F87171"
            className="hover:bg-red-700"
            textSize="1rem"
          />
        </>
      }
    >
      <p className="text-gray-600 text-sm text-center mt-2">
        Are you sure you want to delete this task? This action is permanent and cannot be undone.
      </p>
    </Modal>
  );
};

export default ConfirmDeleteModal;
