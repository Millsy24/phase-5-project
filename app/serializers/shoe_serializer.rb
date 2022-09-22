class ShoeSerializer < ActiveModel::Serializer
include JSONAPI::Serializer
  attributes :id, :name, :brand, :price, :size, :color, :image_url
end
