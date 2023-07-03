import React, { useState, useRef, useEffect } from "react";
import { Button } from '../button/Button';
import './dropdown.css'

interface Props {
    label:string
}
const Dropdown:React.FC<Props> = ({label}) => {
    const [open, setOpen] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null);

    const onClose = ()=> setOpen(false);


    useEffect(() => {
      const handleClickOutside = (event: any) => {
        if (
          modalRef.current &&
          !modalRef.current.contains(event.target as Node)
        ) {
          onClose();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [onClose]);
  return (
    <div className="dropdown-container" ref={modalRef}>
      <div className="dropdown-header" onClick={() => setOpen(!open)}>
        <label>{label}</label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>

      {open ? (
        <div className="dropdown-content">
          <h4>{label}</h4>
          <div>
            <div className="form-control">
              <label>Mean</label>
              <input />
            </div>
            <div className="form-control">
              <label>Min</label>
              <input />
            </div>
            <div className="form-control">
              <label>Max</label>
              <input />
            </div>
            <div className="form-control">
              <label>Standard Devaition</label>
              <input />
            </div>
          </div>
          <div className="dropdown-footer">
            <Button label="Done" primary={true} size="small" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Dropdown