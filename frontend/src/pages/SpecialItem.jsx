import React from "react";

const SpecialItem = () => {
  const item = [
    {
      id: 1,
      name: "Pasta Alfredo",
      price: "150",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ab rerum obcaecati mollitia dolores neque libero assumenda esse dolore autem? Magnam, tenetur aliquid. Maxime, quos.",
      taste: "Creamy and cheesy with a garlic kick.",
      image:
        "https://www.maggi.ng/sites/default/files/styles/home_stage_944_531/public/srh_recipes/615369b5451bcc10bd28c6b608620b68.jpg?h=10d202d3&itok=V34x8d8C",
    },
    {
      id: 2,
      name: "Signature Dish: Truffle Pasta",
      description:
        "A luxurious blend of creamy truffle sauce, freshly made pasta, and a sprinkle of Parmesan cheese. Perfectly balanced for an unforgettable taste.",
      price: "200",
      image:
        "https://www.createwithnestle.ph/sites/default/files/srh_recipes/04cac32dfe4fd75e56928b74df71544c.png", // Replace with your actual image URL
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center text-yellow-600 mb-8">
        Special In Our Restaurent
      </h2>
      {item.map((item) => (
        <div
          key={item.id}
          className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 mt-4"
        >
          {/* Image */}
          <div className="flex-1">
            <img
              src={item.image}
              alt={item.name}
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-yellow-600 mb-4">
              {item.name}
            </h2>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <p className="text-2xl font-semibold text-yellow-500 mb-6">
              Rs.
              {item.price}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SpecialItem;
