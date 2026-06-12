import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import { abstract, abstractFiles, sendAbstract } from "../../services/FormsService";
import { validateData } from "../../hooks/validateData";
import { useEffect, useState } from "react";
import { Mail, User, FileText, Upload, Check, X, ChevronRight } from "lucide-react";

export default function AbstractForm() {
  const [formData, setFormData] = useState(abstract);
  const [files, setFiles] = useState(abstractFiles);
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: false });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = true;
    if (!formData.firstName) newErrors.firstName = true;
    if (!formData.lastName) newErrors.lastName = true;
    if (!formData.title) newErrors.title = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }
    if (!validateData(formData) || (!files.editableFormat && !files.pdfFormat)) {
      setErrorMessage(
        files.editableFormat || files.pdfFormat
          ? "Please fill in all required fields."
          : "Please upload your abstract in at least one format."
      );
      return;
    }
    setIsDisabled(true);
    setErrorMessage("");
    sendAbstract(
      formData,
      { ...files, email: formData.email },
      () => navigate("/success"),
      setErrorMessage,
      setIsDisabled
    );
  };

  return (
    <motion.div
      className="page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.header
        className="page-header"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="eyebrow">XLVI QUITEL 2023</p>
        <h1 className="page-header-title">
          Abstract <em>submission.</em>
        </h1>
      </motion.header>

      <div className="page-info form">
        <motion.div
          className="form-modern"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Personal info */}
          <div className="form-card">
            <div className="form-card-header">
              <h2><span className="form-card-num">01</span> Personal Information</h2>
            </div>
            <div className="form-card-body">
              <div className={`form-field ${errors.email ? "error" : ""}`}>
                <label>
                  <Mail size={16} />
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={(e) => {
                    handleChange("email", e.target.value);
                    setFiles({ ...files, email: e.target.value });
                  }}
                />
                {errors.email && <span className="error-text">Email is required</span>}
              </div>

              <div className="form-row-2">
                <div className={`form-field ${errors.firstName ? "error" : ""}`}>
                  <label>
                    <User size={16} />
                    First Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                  />
                  {errors.firstName && <span className="error-text">Required</span>}
                </div>

                <div className={`form-field ${errors.lastName ? "error" : ""}`}>
                  <label>
                    <User size={16} />
                    Last Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                  />
                  {errors.lastName && <span className="error-text">Required</span>}
                </div>
              </div>
            </div>
          </div>

          {/* Abstract title */}
          <div className="form-card">
            <div className="form-card-header">
              <h2><span className="form-card-num">02</span> Abstract Details</h2>
            </div>
            <div className="form-card-body">
              <div className={`form-field ${errors.title ? "error" : ""}`}>
                <label>
                  <FileText size={16} />
                  Abstract Title <span className="required">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Title of your abstract"
                  value={formData.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                />
                {errors.title && <span className="error-text">Required</span>}
              </div>
            </div>
          </div>

          {/* File uploads */}
          <div className="form-card">
            <div className="form-card-header">
              <h2><span className="form-card-num">03</span> Upload Abstract</h2>
            </div>
            <div className="form-card-body">
              <div className="form-note">
                <p>
                  Upload your abstract in at least one format. Both DOC/ODT and PDF are
                  accepted. At least one file is required.
                </p>
              </div>

              {/* Editable format */}
              <div className="form-upload">
                <label>
                  <Upload size={16} />
                  Editable format <span style={{ color: "var(--black-light)", fontWeight: 400 }}>(DOC / ODT)</span>
                </label>
                {files.editableFormat ? (
                  <div className="file-selected">
                    <Check size={14} />
                    <span>{files.editableFormat.name}</span>
                    <button
                      type="button"
                      onClick={() => setFiles({ ...files, editableFormat: null })}
                    >
                      <X size={14} />
                    </button>
                  </div>
                ) : null}
                <label className="upload-btn">
                  <Upload size={15} />
                  Choose file
                  <input
                    type="file"
                    accept=".odt, .docx, .doc"
                    onChange={(e) => setFiles({ ...files, editableFormat: e.target.files[0] })}
                  />
                </label>
              </div>

              {/* PDF format */}
              <div className="form-upload">
                <label>
                  <Upload size={16} />
                  PDF format
                </label>
                {files.pdfFormat ? (
                  <div className="file-selected">
                    <Check size={14} />
                    <span>{files.pdfFormat.name}</span>
                    <button
                      type="button"
                      onClick={() => setFiles({ ...files, pdfFormat: null })}
                    >
                      <X size={14} />
                    </button>
                  </div>
                ) : null}
                <label className="upload-btn">
                  <Upload size={15} />
                  Choose file
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setFiles({ ...files, pdfFormat: e.target.files[0] })}
                  />
                </label>
              </div>
            </div>
          </div>

          {errorMessage && <div className="form-alert">{errorMessage}</div>}

          <div className="form-actions">
            <button
              className="btn btn-secondary"
              onClick={() => navigate("/registration")}
            >
              Back
            </button>
            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={isDisabled}
            >
              {isDisabled ? (
                "Sending..."
              ) : (
                <>
                  Submit Abstract
                  <ChevronRight size={18} />
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
}
