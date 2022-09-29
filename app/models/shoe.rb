class Shoe < ApplicationRecord
    has_one_attached :image
    has_many :reviews
    has_many :users, through: :reviews
    validates_presence_of :name, :brand, :price, :size, :color

    def image_url
        Rails.application.routes.url_helpers.url_for(image) if image.attached?


    end




end
