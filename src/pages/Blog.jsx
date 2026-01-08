import React from "react";

const blogPosts = [
  {
    title: "5 Tips for Healthy Pets",
    excerpt: "Learn how to keep your furry friends happy and healthy with these simple tips.",
    date: "Jan 1, 2026",
    image: "https://dta0yqvfnusiq.cloudfront.net/911vets/2020/08/Artboard-1-5f5a9960c0f15.jpg", // dog
  },
  {
    title: "Choosing the Right Pet Food",
    excerpt: "A complete guide to selecting nutritious food for your pets.",
    date: "Feb 12, 2026",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_m8Fd3Ffc9c4Pim_UF3cVzG1VG2caNOIOQ&s", // cat
  },
  {
    title: "Pet Training Basics",
    excerpt: "Effective techniques for training your pets and improving behavior.",
    date: "Mar 5, 2026",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5nJDYA1wF5wd-uCABxt-4wFw2zPqzxffcGA&s", // puppy training
  },
  {
    title: "Grooming Your Pet at Home",
    excerpt: "Step-by-step guide to keeping your pets clean and happy.",
    date: "Apr 20, 2026",
    image: "https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/cadab6ed-c380-4151-ac27-26355e96d2eb/istock-1220737701_unrestricted_1110x800.jpg?w=3840&q=75&auto=format", // dog grooming
  },
  {
    title: "Traveling with Pets",
    excerpt: "Tips to ensure safe and comfortable travel for you and your pets.",
    date: "May 15, 2026",
    image: "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2024/May/air-safety-hero.jpg",
  },
  {
    title: "Pet-Friendly Home Design",
    excerpt: "Design your home to be safe and comfortable for your furry friends.",
    date: "Jun 2, 2026",
    image: "https://www.petfoodinstitute.org/wp-content/uploads/2020/12/pet-food-types.jpg",
  },
  {
    title: "Understanding Pet Behavior",
    excerpt: "Learn to decode your pet’s actions and emotions effectively.",
    date: "Jun 18, 2026",
    image: "https://www.thesprucepets.com/thmb/dRSUmdaZQ3ZyZ2bkupxxr_XKy1o=/1500x0/filters:no_upscale():strip_icc()/common-dog-behavior-problems-1118278-FINAL-ded95d80436a49cebd5261298dd593c0.png",
  },
  {
    title: "Pet Vaccination Guide",
    excerpt: "Everything you need to know about keeping your pets vaccinated.",
    date: "Jul 5, 2026",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQis5MdFF_QkR43FT24wvQWY1djyEUa2UBV5w&s",
  },
  {
    title: "DIY Pet Toys",
    excerpt: "Fun and safe toys you can make at home for your pets.",
    date: "Jul 20, 2026",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0E-T0B6Y4Y_QKe8AoSQNW8JzLugpVzNvoRQ&s",
  },
  {
    title: "Pet Nutrition Myths Debunked",
    excerpt: "Common misconceptions about pet food and nutrition explained.",
    date: "Aug 8, 2026",
    image: "https://openfarmpet.com/cdn/shop/articles/Open-Farm-Blog-Post-Photo-Pet-Nutrition-Myths-Debunked.jpg?v=1731388835&width=1100",
  },
  {
    title: "Exercising Your Pet",
    excerpt: "Creative ways to keep your pets active and healthy.",
    date: "Aug 25, 2026",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMIfIr7Ob34Zcfgz6Jg_T8KaTA4fvkSXpExg&s",
  },
  {
    title: "Pet Dental Care",
    excerpt: "Tips to maintain your pet’s dental health and prevent problems.",
    date: "Sep 10, 2026",
    image: "https://www.vets4pets.com/contentassets/224473fbdf994330afebae80432fb815/dental-care-for-your-pet.jpg",
  },
  {
    title: "Adopting a Rescue Pet",
    excerpt: "Things to consider and how to prepare for a rescue pet adoption.",
    date: "Sep 28, 2026",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgkMQpEJvfSREwx3M728457NIJ2vLQhxIpQ&s",
  },
  {
    title: "Seasonal Pet Care",
    excerpt: "How to take care of your pets during different seasons.",
    date: "Oct 12, 2026",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUFPa4iB4x7b7o1oah2UgCAMpx5anOMT5Fig&s",
  },
  {
    title: "Pet First Aid Basics",
    excerpt: "Essential first aid knowledge every pet owner should have.",
    date: "Oct 30, 2026",
    image: "https://www.americanhumane.org/wp-content/uploads/2025/04/dog-holding-first-aid-bag-1440x900.png",
  },
  {
    title: "Socializing Your Pet",
    excerpt: "Why and how to socialize your pets with others.",
    date: "Nov 15, 2026",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzxgiiXDGLEp1pEvbCc6UC2Y3uCjjNxz5Dvg&s",
  },
  {
    title: "Understanding Senior Pets",
    excerpt: "Caring for your older pets and addressing their special needs.",
    date: "Nov 30, 2026",
    image: "https://cdn.prod.website-files.com/631f9b86c3ddc94efce98b69/64f7e132956c303e96345866_AdobeStock_136579225.webp",
  },
  {
    title: "Pet Photography Tips",
    excerpt: "Capture amazing photos of your pets with these simple tips.",
    date: "Dec 10, 2026",
    image: "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2024/July-August/take-better-photos-of-pets-hero.jpg",
  },
  {
    title: "Common Pet Health Problems",
    excerpt: "Learn to identify and prevent frequent health issues in pets.",
    date: "Dec 22, 2026",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdFEq4S6My2dUvTVfdoi7wPmA45k_7go7hnA&s",
  },
  {
    title: "Creating a Pet Routine",
    excerpt: "How to establish a daily routine for your pet’s wellbeing.",
    date: "Dec 28, 2026",
    image: "https://pupford.b-cdn.net/assets%2Fpages%2Fpup-parent-101%2F1652465831293-5%20reasons%20you%20need%20a%20daily%20dog%20routine.png?alt=media&token=9eb39d7d-877e-451b-83f0-2d6e3d38103a",
  },
  {
    title: "Eco-Friendly Pet Products",
    excerpt: "Sustainable and safe products for your pets and the environment.",
    date: "Dec 31, 2026",
    image: "https://www.farmerpetes.com.au/cdn/shop/articles/eco-friendly_dog_products.png?v=1736184725",
  },
  {
  title: "Pet Mental Health",
  excerpt: "Learn how to keep your pets mentally stimulated and emotionally happy.",
  date: "Jan 5, 2027",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCfuNjM3iI9KNuXN_R83N3n2FpySZIqrqU5g&s",
},
{
  title: "Homemade Pet Treats",
  excerpt: "Simple and healthy recipes to make delicious treats for your pets at home.",
  date: "Jan 12, 2027",
  image: "https://www.tasteofhome.com/wp-content/uploads/2018/12/Peanut-Butter-Dog-Treats.-Coconut-Oil-Dog-Treats.-Live-Laugh-Rowe.jpg",
},
{
  title: "Pet Safety at Home",
  excerpt: "Important tips to make your home a safe environment for your pets.",
  date: "Jan 20, 2027",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjIyBoYMpT1N9vGNK0hPQNfYOa79wKUGI1kw&s",
},

];


const BlogPage = () => {
  return (
    <div className="min-h-screen  py-16 px-4">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
          Our Blog
        </h1>
        <p className="mt-2 text-gray-400 text-lg md:text-xl">
          Latest tips, guides, and stories for your pets 🐾
        </p>
      </div>

      {/* Blog Posts */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col border border-blue-500 border-l-0 border-r-0 border-b-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-48">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6 gap-3">
              <p className="text-sm text-blue-500">{post.date}</p>
              <h2 className="text-xl font-bold ">{post.title}</h2>
              <p className="flex-1">{post.excerpt}</p>
              <button className="mt-auto self-start bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-xl hover:scale-105 transition-transform">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
