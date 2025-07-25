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
              5 star reviews • 28 reviews written
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
