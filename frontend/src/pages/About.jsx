import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10 px-4">
      {/* Header Section */}
      <header className="w-full max-w-5xl text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg">
          Welcome to The Restaurant, where we serve passion on every plate.
        </p>
      </header>

      {/* About Section */}
      <section className="w-full max-w-5xl flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden">
        {/* Image */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto">
          <img
            src="https://studioasa.in/wp-content/uploads/2022/01/0_jVseNFhhSAn_id5a.jpg"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Since our opening, [Restaurant Name] has been dedicated to offering
            the finest dishes made from fresh, locally sourced ingredients. Our
            cozy atmosphere and friendly service make every meal memorable.
          </p>
          <p className="text-gray-600">
            Whether you're joining us for a quick bite or a special occasion, we
            promise an experience that tantalizes your taste buds and warms your
            heart.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full max-w-5xl mt-10">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To deliver unforgettable dining experiences through our dedication
            to quality, sustainability, and community.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full max-w-5xl mt-10">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/002/703/297/non_2x/restaurant-food-and-cuisine-chef-avatar-profile-character-icon-cartoons-illustration-graphic-design-free-vector.jpg"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">John Doe</h3>
            <p className="text-gray-600">Head Chef</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQEacRMoUs6aBA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705422583640?e=2147483647&v=beta&t=5pP4b4vB46MiXTNgPTj91_0w9KjmC5Cp0b-Q0OJVLx4"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">Jane Smith</h3>
            <p className="text-gray-600">Restaurant Manager</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/026/782/003/small_2x/professional-restaurant-chef-label-logo-smiling-male-chef-illustration-for-food-industry-chef-character-vector.jpg"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">Mike Johnson</h3>
            <p className="text-gray-600">Sous Chef</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full max-w-5xl text-center mt-10">
        <p className="text-gray-600 text-sm">
          &copy; 2024 The Restaurant. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;
