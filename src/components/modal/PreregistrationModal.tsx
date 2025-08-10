"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { submitPreregistration } from "@/utils/api";
import styles from "./styles/modal.module.css";

interface PreregistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PreregistrationModal = ({
  isOpen,
  onClose,
}: PreregistrationModalProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await submitPreregistration(email);
      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setEmail("");
      }, 2000);
    } catch (_error) {
      console.log(_error);
      setError("Failed to submit. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    if (!isLoading) {
      onClose();
      setEmail("");
      setError(null);
      setSuccess(false);
    }
  };

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Close modal"
          disabled={isLoading}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className={styles.content}>
          {success ? (
            <div className={styles.success}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="#4CAF50"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2>Success!</h2>
              <p>
                {`You've been added to our early access list. We'll notify you when it's ready!`}
              </p>
            </div>
          ) : (
            <>
              <h2 className={styles.title}>Get Early Access</h2>
              <p className={styles.description}>
                Be among the first to experience AI-powered messaging for
                OnlyFans & Fansly creators.
              </p>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                    placeholder="Enter your email"
                    disabled={isLoading}
                    required
                  />
                </div>

                {error && <div className={styles.error}>{error}</div>}

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className={styles.spinner}></div>
                      Submitting...
                    </>
                  ) : (
                    "Join Early Access"
                  )}
                </button>
              </form>

              <p className={styles.disclaimer}>
                {`We'll only use your email to notify you about early access availability.`}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
