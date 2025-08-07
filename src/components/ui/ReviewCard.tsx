import { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fas fa-star ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex mb-4">{renderStars(review.rating)}</div>
      <p className="text-gray-600 mb-4 italic">
        &ldquo;{review.comment}&rdquo;
      </p>
      <div className="flex items-center">
        <div
          className={`w-10 h-10 ${review.avatarColor} rounded-full flex items-center justify-center text-white font-semibold`}
        >
          {review.initial}
        </div>
        <div className="ml-3">
          <p className="font-semibold text-gray-800">{review.name}</p>
          {/* <p className="text-sm text-gray-600">Verified Client</p> */}
        </div>
      </div>
    </div>
  );
}
