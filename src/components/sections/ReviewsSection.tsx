import ReviewCard from "@/components/ui/ReviewCard";
import { reviews } from "@/data/reviews";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Happy Pet Parents
          </h2>
          <p className="text-xl text-primary-foreground/80">
            See what our clients say about our services
          </p>
          <div className="flex justify-center items-center mt-4">
            <div className="flex text-yellow-400 text-2xl">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <span className="ml-2 text-primary-foreground/80">
              5 star reviews • {reviews.length} reviews written
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* First 3 reviews - always visible */}
          {reviews.slice(0, 3).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Additional reviews - hidden on mobile, smaller on desktop */}
        <div className="hidden md:grid md:grid-cols-4 gap-6 mt-8">
          {reviews.slice(3).map((review) => (
            <div
              key={review.id}
              className="bg-primary-foreground/10 rounded-lg p-4"
            >
              <div className="flex items-center mb-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${review.avatarColor}`}
                >
                  <span className="text-primary-foreground font-semibold text-sm">
                    {review.initial}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground text-sm">
                    {review.name}
                  </h4>
                  <div className="flex text-yellow-400 text-xs">
                    {[...Array(review.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-primary-foreground/80 text-sm line-clamp-3">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
