import React from "react";
import Button from "./Button"; // Import the reusable Button component

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subTitle?: string;
  children: React.ReactNode;
  showFooter?: boolean;
  footerContent?: React.ReactNode;
  hideCloseButton?: boolean; // 
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subTitle,
  children,
  showFooter = false,
  footerContent,
  hideCloseButton = false, 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        {/* Modal Title and Subtitle */}
        {title && <h1 className="text-3xl font-semibold text-center mb-4">{title}</h1>}
        {subTitle && <h3 className="text-xl font-semibold text-center mb-4">{subTitle}</h3>}

        {/* Modal Content */}
        <div>{children}</div>

        {/* Footer */}
        {showFooter && (
          <div className="flex justify-end gap-2 mt-6">
            {footerContent || (
              <>
                <Button
                  label="Cancel"
                  onClick={onClose}
                  bgcolor="gray"
                  color="white"
                  width="auto"
                />
                <Button
                  label="Confirm"
                  onClick={onClose}
                  bgcolor="blue-500"
                  color="white"
                  width="auto"
                />
              </>
            )}
          </div>
        )}

        {/* Conditionally render close button using the Button component */}
        {!hideCloseButton && (
          <Button
            label="&times;"
            onClick={onClose}
            bgcolor="transparent"
            color="gray-400"
            width="auto"
            className="absolute top-3 right-4 text-xl"
            style={{ fontSize: '1.5rem', padding: '0' }}
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
