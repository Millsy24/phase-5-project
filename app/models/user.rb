class User < ApplicationRecord
    has_secure_password
    validates_presence_of :name, :email, :password, :dob, :phone
    validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP
    validates :phone, length: {is: 10}
    validates :password, length: {in: 6..20}
    has_many :reviews
    has_many :shoes, through: :reviews




    
end
