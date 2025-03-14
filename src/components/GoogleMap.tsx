'use client';

const GoogleMap = () => {
  return (
    <div className="w-full h-[400px] rounded-diagonal-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2475.497963240939!2d5.127833776687611!3d51.6858716891697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c68f8b8e7d0001%3A0x7c6d0c5cc1c67dd5!2sPrins%20Hendrikstraat%205%2C%205151%20GA%20Drunen!5e0!3m2!1sen!2snl!4v1710425847744!5m2!1sen!2snl"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GoogleMap; 