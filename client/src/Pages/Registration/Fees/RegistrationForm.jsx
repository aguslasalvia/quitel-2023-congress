import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fileReceipts, registration, sendRegistration } from "../../../services/FormsService";
import { validateData } from "../../../hooks/validateData";
import { motion } from "framer-motion";
import Footer from "../../../components/Footer/Footer";
import { Mail, User, Heart, GraduationCap, Briefcase, Building, MapPin, Globe, Hash, Presentation, UtensilsCrossed, Languages, Upload, ChevronRight, Check, X, File } from "lucide-react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState(registration);
  const [receipts, setReceipts] = useState(fileReceipts);
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
    if (!formData.position) newErrors.position = true;
    if (!formData.mainInstitution) newErrors.mainInstitution = true;
    if (!formData.institutionalAddress) newErrors.institutionalAddress = true;
    if (!formData.country) newErrors.country = true;
    if (!formData.region) newErrors.region = true;
    if (!formData.city) newErrors.city = true;
    if (!formData.zipCode) newErrors.zipCode = true;
    if (!formData.modality) newErrors.modality = true;
    if (!formData.firstTime) newErrors.firstTime = true;
    if (!formData.specialMealReqs) newErrors.specialMealReqs = true;
    if (!formData.motherLanguage) newErrors.motherLanguage = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      if (validateData(formData)) {
        setIsDisabled(true);
        setErrorMessage("");
        sendRegistration(formData, receipts, () => navigate("/success"), setErrorMessage, setIsDisabled);
      } else {
        setErrorMessage("Please fill in all required fields.");
      }
    } else {
      setErrorMessage("Please fill in all required fields.");
    }
  };

  const educationOptions = [
    { value: "postdocs", label: "Postdocs / Researchers / Professors" },
    { value: "phdstudents", label: "Masters / PhD Students" },
    { value: "undergraduates", label: "Undergraduate Student" },
  ];

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
        <p className="eyebrow">QUITEL / CHITEL 2023</p>
        <h1 className="page-header-title">
          Registration <em>form.</em>
        </h1>
      </motion.header>

      <div className="page-info form">
        <motion.div
          className="form-modern"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="form-card">
            <div className="form-card-header">
              <h2><span className="form-card-num">01</span> Personal Information</h2>
              <span className="badge">Required</span>
            </div>
            <div className="form-card-body">
              <div className={`form-field ${errors.email ? 'error' : ''}`}>
                <label><Mail size={16} /> Email <span className="required">*</span></label>
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
                  <label><User size={16} /> First Name <span className="required">*</span></label>
                  <input
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                  />
                  {errors.firstName && <span className="error-text">Required</span>}
                </div>

                <div className={`form-field ${errors.lastName ? 'error' : ''}`}>
                  <label><User size={16} /> Last Name <span className="required">*</span></label>
                  <input
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                  />
                  {errors.lastName && <span className="error-text">Required</span>}
                </div>
              </div>

              <div className={`form-field ${errors.gender ? 'error' : ''}`}>
                <label><Heart size={16} /> Gender <span className="required">*</span></label>
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
            </div>
          </div>

          <div className="form-card">
            <div className="form-card-header">
              <h2><span className="form-card-num">02</span> Academic Background</h2>
            </div>
            <div className="form-card-body">
              <div className={`form-field ${errors.educationLevel ? 'error' : ''}`}>
                <label><GraduationCap size={16} /> Level of Education <span className="required">*</span></label>
                <div className="radio-buttons">
                  {educationOptions.map(opt => (
                    <label key={opt.value} className={`radio-btn ${formData.educationLevel === opt.value ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name="educationLevel"
                        value={opt.value}
                        checked={formData.educationLevel === opt.value}
                        onChange={(e) => handleChange("educationLevel", e.target.value)}
                      />
                      <span className="radio-indicator"></span>
                      <span className="radio-text">{opt.label}</span>
                    </label>
                  ))}
                </div>
                {errors.educationLevel && <span className="error-text">Required</span>}
              </div>

              <div className={`form-field ${errors.position ? 'error' : ''}`}>
                <label><Briefcase size={16} /> Position <span className="required">*</span></label>
                <input
                  type="text"
                  placeholder="Professor, Researcher, Student..."
                  value={formData.position}
                  onChange={(e) => handleChange("position", e.target.value)}
                />
                {errors.position && <span className="error-text">Required</span>}
              </div>

              <div className={`form-field ${errors.mainInstitution ? 'error' : ''}`}>
                <label><Building size={16} /> Main Institution <span className="required">*</span></label>
                <input
                  type="text"
                  placeholder="University of..."
                  value={formData.mainInstitution}
                  onChange={(e) => handleChange("mainInstitution", e.target.value)}
                />
                {errors.mainInstitution && <span className="error-text">Required</span>}
              </div>

              <div className={`form-field ${errors.institutionalAddress ? 'error' : ''}`}>
                <label><MapPin size={16} /> Institutional Address <span className="required">*</span></label>
                <input
                  type="text"
                  placeholder="Street, Number, Building..."
                  value={formData.institutionalAddress}
                  onChange={(e) => handleChange("institutionalAddress", e.target.value)}
                />
                {errors.institutionalAddress && <span className="error-text">Required</span>}
              </div>
            </div>
          </div>

          <div className="form-card">
            <div className="form-card-header">
              <h2><span className="form-card-num">03</span> Location</h2>
            </div>
            <div className="form-card-body">
              <div className="form-row-2">
                <div className={`form-field ${errors.country ? 'error' : ''}`}>
                  <label><Globe size={16} /> Country <span className="required">*</span></label>
                  <input
                    type="text"
                    placeholder="Uruguay"
                    value={formData.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                  />
                  {errors.country && <span className="error-text">Required</span>}
                </div>

                <div className={`form-field ${errors.region ? 'error' : ''}`}>
                  <label><MapPin size={16} /> Region/State/Province <span className="required">*</span></label>
                  <input
                    type="text"
                    placeholder="Montevideo"
                    value={formData.region}
                    onChange={(e) => handleChange("region", e.target.value)}
                  />
                  {errors.region && <span className="error-text">Required</span>}
                </div>
              </div>

              <div className="form-row-2">
                <div className={`form-field ${errors.city ? 'error' : ''}`}>
                  <label><MapPin size={16} /> City <span className="required">*</span></label>
                  <input
                    type="text"
                    placeholder="Montevideo"
                    value={formData.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                  />
                  {errors.city && <span className="error-text">Required</span>}
                </div>

                <div className={`form-field ${errors.zipCode ? 'error' : ''}`}>
                  <label><Hash size={16} /> Postal/Zip Code <span className="required">*</span></label>
                  <input
                    type="text"
                    placeholder="11000"
                    value={formData.zipCode}
                    onChange={(e) => handleChange("zipCode", e.target.value)}
                  />
                  {errors.zipCode && <span className="error-text">Required</span>}
                </div>
              </div>
            </div>
          </div>

          <div className="form-card">
            <div className="form-card-header">
              <h2><span className="form-card-num">04</span> Participation Details</h2>
            </div>
            <div className="form-card-body">
              <div className={`form-field ${errors.modality ? 'error' : ''}`}>
                <label><Presentation size={16} /> Modality <span className="required">*</span></label>
                <div className="radio-buttons">
                  <label className={`radio-btn ${formData.modality === 'presentation' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="modality"
                      value="presentation"
                      checked={formData.modality === "presentation"}
                      onChange={(e) => handleChange("modality", e.target.value)}
                    />
                    <span className="radio-indicator"></span>
                    <span className="radio-text">Oral Presentation</span>
                  </label>
                  <label className={`radio-btn ${formData.modality === 'poster' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="modality"
                      value="poster"
                      checked={formData.modality === "poster"}
                      onChange={(e) => handleChange("modality", e.target.value)}
                    />
                    <span className="radio-indicator"></span>
                    <span className="radio-text">Poster</span>
                  </label>
                </div>
                {errors.modality && <span className="error-text">Required</span>}
              </div>

              <div className={`form-field ${errors.firstTime ? 'error' : ''}`}>
                <label><User size={16} /> First time registering? <span className="required">*</span></label>
                <div className="radio-buttons">
                  <label className={`radio-btn ${formData.firstTime === 'yes' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="firstTime"
                      value="yes"
                      checked={formData.firstTime === "yes"}
                      onChange={(e) => handleChange("firstTime", e.target.value)}
                    />
                    <span className="radio-indicator"></span>
                    <span className="radio-text">Yes</span>
                  </label>
                  <label className={`radio-btn ${formData.firstTime === 'no' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="firstTime"
                      value="no"
                      checked={formData.firstTime === "no"}
                      onChange={(e) => handleChange("firstTime", e.target.value)}
                    />
                    <span className="radio-indicator"></span>
                    <span className="radio-text">No</span>
                  </label>
                </div>
                {errors.firstTime && <span className="error-text">Required</span>}
              </div>

              <div className={`form-field ${errors.specialMealReqs ? 'error' : ''}`}>
                <label><UtensilsCrossed size={16} /> Special Meal Requirements <span className="required">*</span></label>
                <input
                  type="text"
                  placeholder="Vegetarian, Vegan, Gluten-free..."
                  value={formData.specialMealReqs}
                  onChange={(e) => handleChange("specialMealReqs", e.target.value)}
                />
                {errors.specialMealReqs && <span className="error-text">Required</span>}
              </div>

              <div className={`form-field ${errors.motherLanguage ? 'error' : ''}`}>
                <label><Languages size={16} /> Mother Language <span className="required">*</span></label>
                <input
                  type="text"
                  placeholder="English, Spanish, Portuguese..."
                  value={formData.motherLanguage}
                  onChange={(e) => handleChange("motherLanguage", e.target.value)}
                />
                {errors.motherLanguage && <span className="error-text">Required</span>}
              </div>
            </div>
          </div>

          <div className="form-card">
            <div className="form-card-header">
              <h2><span className="form-card-num">05</span> Payment Receipts</h2>
              <span className="badge">Optional</span>
            </div>
            <div className="form-card-body">
              <div className="form-note">
                <p>You can submit your registration before payment. If you don&apos;t attach receipts here, send them later to: <a href="mailto:quitel2023@gmail.com">quitel2023@gmail.com</a></p>
              </div>

              <div className="form-upload">
                <label><File size={16} /> Registration Payment Receipt</label>
                {receipts.registrationPaymentReceipt && (
                  <div className="file-selected">
                    <Check size={14} />
                    <span>{receipts.registrationPaymentReceipt.name}</span>
                    <button type="button" onClick={() => setReceipts({ ...receipts, registrationPaymentReceipt: null })}>
                      <X size={14} />
                    </button>
                  </div>
                )}
                <label className="upload-btn">
                  <Upload size={16} />
                  Choose File
                  <input
                    type="file"
                    accept="image/png, image/jpeg, .pdf, .odt, .docx, .doc"
                    onChange={(e) => setReceipts({ ...receipts, registrationPaymentReceipt: e.target.files[0] })}
                  />
                </label>
              </div>

              <div className="form-upload">
                <label><File size={16} /> Dinner Payment Receipt</label>
                {receipts.dinnerPaymentReceipt && (
                  <div className="file-selected">
                    <Check size={14} />
                    <span>{receipts.dinnerPaymentReceipt.name}</span>
                    <button type="button" onClick={() => setReceipts({ ...receipts, dinnerPaymentReceipt: null })}>
                      <X size={14} />
                    </button>
                  </div>
                )}
                <label className="upload-btn">
                  <Upload size={16} />
                  Choose File
                  <input
                    type="file"
                    accept="image/png, image/jpeg, .pdf, .odt, .docx, .doc"
                    onChange={(e) => setReceipts({ ...receipts, dinnerPaymentReceipt: e.target.files[0] })}
                  />
                </label>
              </div>

              <div className="form-upload">
                <label><File size={16} /> Accompanying Payment Receipt</label>
                {receipts.accompanyingPaymentReceipt && (
                  <div className="file-selected">
                    <Check size={14} />
                    <span>{receipts.accompanyingPaymentReceipt.name}</span>
                    <button type="button" onClick={() => setReceipts({ ...receipts, accompanyingPaymentReceipt: null })}>
                      <X size={14} />
                    </button>
                  </div>
                )}
                <label className="upload-btn">
                  <Upload size={16} />
                  Choose File
                  <input
                    type="file"
                    accept="image/png, image/jpeg, .pdf, .odt, .docx, .doc"
                    onChange={(e) => setReceipts({ ...receipts, accompanyingPaymentReceipt: e.target.files[0] })}
                  />
                </label>
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
                  Submit Registration
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
