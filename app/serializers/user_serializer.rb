class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :dob, :phone
  has_many :reviews
end
