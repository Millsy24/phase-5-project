class ShoesController < ApplicationController

  def index 
    shoes = Shoe.all
    renderShoes = shoes.map{|shoe| ShoesWithImageSerializer.new(shoe).serializable_hash[:data][:attributes]}
    render json: renderShoes

  end 

  def show
    shoe = Shoe.find(params[:id])
    render json: shoe, status: :ok
  end

  def create
    shoe = Shoe.create(shoe_params)
    render json: shoe, status: :created
  end

  def update 
      shoe = Shoe.find(params[:id])
      shoe.update!(shoe_params)
      render json: shoe, status: :accepted
  end

  def latest
    shoe = Shoe.last 
    render json: ShoesWithImageSerializer.new(shoe).serializable_hash[:data][:attributes]

  end



  def destroy 
    shoe = Shoe.find(params[:id])
    shoe.destroy!

  end










private


def shoe_params
  params.require(:shoe).permit(:name, :brand, :size, :price, :color, :image)

end


end
