class ShoesWithImageSerializer
  include JSONAPI::Serializer
  attributes :name, :brand, :price, :size, :color, :image, :image_url
end
