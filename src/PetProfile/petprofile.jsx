// PetProfile.jsx
import React, { useState } from 'react';
import pawImage from "../assets/paw.jpg";

const PetProfile = () => {
  const [pet, setPet] = useState({
    name: "OLumide",
    breed: "Golden Retriever",
    age: "3 years",
    weight: "28 kg",
    color: "Golden",
    microchip: "123456789012345",
    owner: "Sarah Johnson",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, Cityville, State 12345",
    notes: "Allergic to chicken. Needs annual vaccination.",
    image: pawImage
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(pet);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSaveChanges = () => {
    setPet(formData);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setFormData(pet);
    setIsEditing(false);
  };

  return (
    <div className="pet-profile-card bg-gray-800 shadow-lg rounded-xl p-8 border border-green-400/20 mt-16">
      <div className="card-header flex justify-between items-center mb-8">
        <h2 className="card-title text-xl font-semibold text-white">Pet Profile</h2>
        <button onClick={() => setIsEditing(true)} className="edit-button px-4 py-2 text-sm bg-green-400 text-gray-900 rounded-lg hover:bg-green-500 transition-colors">
          Edit Profile
        </button>
      </div>

      <div className="profile-content flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="pet-image-section flex flex-col items-center md:w-1/3">
          <img src={pet.image} alt={pet.name} className="pet-image w-32 h-32 rounded-full object-cover shadow-lg border-4 border-green-400/30" />
          <h3 className="pet-name mt-4 text-xl font-bold text-white">{pet.name}</h3>
          <p className="pet-breed text-gray-300">{pet.breed}</p>
        </div>

        <div className="pet-details flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="info-group">
            <h4 className="info-label font-semibold text-green-400 mb-2">Basic Information</h4>
            <p className="info-item text-gray-300 mb-1"><span className="font-medium">Age:</span> {pet.age}</p>
            <p className="info-item text-gray-300 mb-1"><span className="font-medium">Weight:</span> {pet.weight}</p>
            <p className="info-item text-gray-300 mb-1"><span className="font-medium">Color:</span> {pet.color}</p>
            <p className="info-item text-gray-300"><span className="font-medium">Microchip ID:</span> {pet.microchip}</p>
          </div>

          <div className="info-group">
            <h4 className="info-label font-semibold text-green-400 mb-2">Owner Information</h4>
            <p className="info-item text-gray-300 mb-1">{pet.owner}</p>
            <p className="info-item text-gray-300 mb-1">{pet.phone}</p>
            <p className="info-item text-gray-300">{pet.address}</p>
          </div>

          <div className="medical-notes md:col-span-2 mt-4">
            <h4 className="info-label font-semibold text-green-400 mb-2">Medical Notes</h4>
            <p className="info-item text-gray-300 bg-gray-700 p-4 rounded-lg">{pet.notes}</p>
          </div>
        </div>
      </div>

      {isEditing && (
        <div className="edit-modal fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="modal-content bg-gray-800 rounded-xl shadow-2xl p-6 w-full max-w-2xl border border-green-400/30">
            <h3 className="modal-title text-lg font-bold text-white mb-6">Edit Pet Profile</h3>
            
            <div className="form-grid grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "name", placeholder: "Pet Name" },
                { name: "breed", placeholder: "Breed" },
                { name: "age", placeholder: "Age" },
                { name: "weight", placeholder: "Weight" },
                { name: "color", placeholder: "Color" },
                { name: "microchip", placeholder: "Microchip ID" },
                { name: "owner", placeholder: "Owner Name" },
                { name: "phone", placeholder: "Phone" }
              ].map((field) => (
                <input key={field.name} type="text" name={field.name} value={formData[field.name]} onChange={handleInputChange} placeholder={field.placeholder} className="form-input bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:border-green-400" />
              ))}
              
              <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Address" className="form-input bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:border-green-400 md:col-span-2" />
              <textarea name="notes" value={formData.notes} onChange={handleInputChange} placeholder="Medical Notes" rows="3" className="form-textarea bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:border-green-400 md:col-span-2" />
            </div>

            <div className="modal-actions flex justify-end gap-3 mt-6">
              <button onClick={handleCancelEdit} className="cancel-button px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors">Cancel</button>
              <button onClick={handleSaveChanges} className="save-button px-6 py-2 bg-green-400 text-gray-900 rounded-lg hover:bg-green-500 transition-colors">Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PetProfile;