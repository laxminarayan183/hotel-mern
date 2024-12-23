import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback:
      "The food was absolutely amazing! The flavors were perfect, and the service was outstanding.",
    image:
      "https://www.shutterstock.com/image-photo/happy-mid-aged-business-man-260nw-2306689121.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback:
      "A delightful dining experience. The ambiance is cozy, and the staff is very welcoming.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmVtYWxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Sam Wilson",
    feedback:
      "Loved the desserts! The presentation and taste were both exceptional. Highly recommend.",
    image:
      "https://www.shutterstock.com/image-photo/positive-confident-company-director-formal-600w-2451794051.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-yellow-600 mb-8">
          Customer Review
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-bold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 mt-2 italic">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
