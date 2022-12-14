class ReviewsController < ApplicationController
    skip_before_action :authenticate_user, only: [:index, :show] 
    def index 
        reviews = Review.all
        render json: reviews
    end


    def show
        review = Review.find(params[:id])
        render json: review, status: :ok
    end


    def create
        review = Review.create(review_params)
        render json: review, status: :created
    end

    def update
        review = Review.find(params[:id])
        if current_user == review.user
        review.update!(review_params)
        end
        render json: review, status: :accepted
    end 

    def destroy 
        review = Review.find(params[:id])
        if current_user == review.user
            review.destroy
        end
    end









    private

    def review_params
        params.permit(:rating, :content, :user_id, :shoe_id)
    end



end
