import Image from "next/image";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Vishal Rya",
      initials: "VR",
      date: "6 months ago",
      review: "Very good treatment with outstanding standard of care. Dr. Gurkeerat explains the treatment in detail and I had a pain free experience."
    },
    {
      name: "Rahul Raj",
      initials: "RR",
      date: "1 months ago",
      review: "I had a wonderful experience with Dr. Gurkeerat Singh. He is extremely professional, knowledgeable, and patient. He explained the entire treatment plan clearly and made me feel completely at ease. My dental implant procedure was smooth and painless. Highly recommended for anyone looking for expert dental care!."
    },
    {
      name: "diwakar kumar",
      initials: "DK",
      date: "8 months ago",
      review: "Dr. Gurkeerat Singh is truly an expert in his field! I had a complex dental issue, and he explained everything clearly and made me feel completely at ease. The treatment was smooth, painless, and the results were amazing. Highly recommend him for anyone looking for quality dental care!"
    },
    {
      name: "Rahul Ravidas",
      initials: "RR",
      date: "6 months ago",
      review: "Highly satisfied with the dental care provided by Dr. Gurkeerat Singh. He listens carefully, gives honest advice, and performs the treatment with precision. My smile has never looked better! Truly the best dentist I’ve ever visited."
    }
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <Image
            src="/images/google.png"
            alt="Google Logo"
            width={128}
            height={48}
            className="mx-auto mb-4 object-contain"
          />
          <h2 className="text-xl md:text-3xl font-bold">What Our Patients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white border rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold md:text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.date}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm md:text-base">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}