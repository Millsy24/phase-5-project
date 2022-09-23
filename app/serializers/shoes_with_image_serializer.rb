class ShoesWithImageSerializer
  include JSONAPI::Serializer

  attributes :id, :name, :brand, :price, :size, :color, :image, :image_url, :reviews
  
  
end
