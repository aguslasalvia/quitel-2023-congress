import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import { preRegistration, sendPreRegistration } from "../../../services/FormsService";
import { validateData } from "../../../hooks/validateData";
import { motion } from "framer-motion";
import { Mail, User, Heart, GraduationCap, Building, Globe, Users, Bell, ChevronRight } from "lucide-react";

export default function PreRegistration() {
  const [formData, setFormData] = useState(preRegistration);
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: false });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = true;
    if (!formData.firstName) newErrors.firstName = true;
    if (!formData.lastName) newErrors.lastName = true;
    if (!formData.gender) newErrors.gender = true;
    if (!formData.educationLevel) newErrors.educationLevel = true;
    if (!formData.country) newErrors.country = true;
    if (!formData.mainInstitution) newErrors.mainInstitution = true;
    if (!formData.hasAttended) newErrors.hasAttended = true;
    if (!formData.mail) newErrors.mail = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      if (validateData(formData)) {
        setIsDisabled(true);
        setErrorMessage("");
        sendPreRegistration(formData, () => navigate("/success"), setErrorMessage, setIsDisabled);
      } else {
        setErrorMessage("Please fill in all required fields.");
      }
    } else {
      setErrorMessage("Please fill in all required fields.");
    }
  };

  const educationOptions = [
    { value: "undergraduates", label: "Undergraduate Student" },
    { value: "phdstudents", label: "Masters / PhD Student" },
    { value: "postdocs", label: "Postdoc / Researcher / Professor" },
  ];

  return (
    <motion.div 
      className="page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1 
        className="page-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <p className="page-title-p">Pre-registration</p>
        <p className="page-title-p">QUITEL 2023</p>
      </motion.h1>

      <div className="page-info form">
        <motion.div 
          className="form-modern"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="form-card">
            <div className="form-card-header">
              <h2>Personal Information</h2>
              <span className="badge">Step 1 of 1</span>
            </div>

            <div className="form-card-body">
              <div className={`form-field ${errors.email ? 'error' : ''}`}>
                <label>
                  <Mail size={16} />
                  Email <span className="required">*</span>
                </label>
                <input 
                  type="email" 
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                {errors.email && <span className="error-text">Email is required</span>}
              </div>

              <div className="form-row-2">
                <div className={`form-field ${errors.firstName ? 'error' : ''}`}>
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

                <div className={`form-field ${errors.lastName ? 'error' : ''}`}>
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

              <div className="form-row-2">
                <div className={`form-field ${errors.gender ? 'error' : ''}`}>
                  <label>
                    <Heart size={16} />
                    Gender <span className="required">*</span>
                  </label>
                  <select 
                    value={formData.gender}
                    onChange={(e) => handleChange("gender", e.target.value)}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="nonbinary">Non-binary</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && <span className="error-text">Required</span>}
                </div>

                <div className={`form-field ${errors.educationLevel ? 'error' : ''}`}>
                  <label>
                    <GraduationCap size={16} />
                    Education Level <span className="required">*</span>
                  </label>
                  <select 
                    value={formData.educationLevel}
                    onChange={(e) => handleChange("educationLevel", e.target.value)}
                  >
                    <option value="">Select level</option>
                    {educationOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  {errors.educationLevel && <span className="error-text">Required</span>}
                </div>
              </div>
            </div>
          </div>

          <div className="form-card">
            <div className="form-card-header">
              <h2>Institution</h2>
            </div>

            <div className="form-card-body">
              <div className="form-row-2">
                <div className={`form-field ${errors.country ? 'error' : ''}`}>
                  <label>
                    <Globe size={16} />
                    Country <span className="required">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Uruguay"
                    value={formData.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                  />
                  {errors.country && <span className="error-text">Required</span>}
                </div>

                <div className={`form-field ${errors.mainInstitution ? 'error' : ''}`}>
                  <label>
                    <Building size={16} />
                    Institution <span className="required">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="University of..."
                    value={formData.mainInstitution}
                    onChange={(e) => handleChange("mainInstitution", e.target.value)}
                  />
                  {errors.mainInstitution && <span className="error-text">Required</span>}
                </div>
              </div>
            </div>
          </div>

          <div className="form-card">
            <div className="form-card-header">
              <h2>Experience</h2>
            </div>

            <div className="form-card-body">
              <div className={`form-field ${errors.hasAttended ? 'error' : ''}`}>
                <label>
                  <Users size={16} />
                  Have you attended QUITEL before? <span className="required">*</span>
                </label>
                <div className="radio-buttons">
                  <label className={`radio-btn ${formData.hasAttended === 'yes' ? 'selected' : ''}`}>
                    <input 
                      type="radio" 
                      name="hasAttended" 
                      value="yes"
                      checked={formData.hasAttended === "yes"}
                      onChange={(e) => handleChange("hasAttended", e.target.value)}
                    />
                    <span className="radio-indicator"></span>
                    <span className="radio-text">Yes</span>
                  </label>
                  <label className={`radio-btn ${formData.hasAttended === 'no' ? 'selected' : ''}`}>
                    <input 
                      type="radio" 
                      name="hasAttended" 
                      value="no"
                      checked={formData.hasAttended === "no"}
                      onChange={(e) => handleChange("hasAttended", e.target.value)}
                    />
                    <span className="radio-indicator"></span>
                    <span className="radio-text">No</span>
                  </label>
                </div>
                {errors.hasAttended && <span className="error-text">Required</span>}
              </div>

              <div className={`form-field ${errors.mail ? 'error' : ''}`}>
                <label>
                  <Bell size={16} />
                  Would you like to receive congress updates? <span className="required">*</span>
                </label>
                <div className="radio-buttons">
                  <label className={`radio-btn ${formData.mail === 'yes' ? 'selected' : ''}`}>
                    <input 
                      type="radio" 
                      name="mail" 
                      value="yes"
                      checked={formData.mail === "yes"}
                      onChange={(e) => handleChange("mail", e.target.value)}
                    />
                    <span className="radio-indicator"></span>
                    <span className="radio-text">Yes</span>
                  </label>
                  <label className={`radio-btn ${formData.mail === 'no' ? 'selected' : ''}`}>
                    <input 
                      type="radio" 
                      name="mail" 
                      value="no"
                      checked={formData.mail === "no"}
                      onChange={(e) => handleChange("mail", e.target.value)}
                    />
                    <span className="radio-indicator"></span>
                    <span className="radio-text">No</span>
                  </label>
                </div>
                {errors.mail && <span className="error-text">Required</span>}
              </div>
            </div>
          </div>

          {errorMessage && (
            <div className="form-alert">
              {errorMessage}
            </div>
          )}

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
                  Submit Pre-registration
                  <ChevronRight size={18} />
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  )
}
