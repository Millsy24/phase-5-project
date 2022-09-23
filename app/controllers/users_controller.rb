class UsersController < ApplicationController


  def index
    render json: User.all
  end

  def show
    if current_user
      render json: current_user, status: :ok
    else
      render json: "No current session stored", status: :unauthorized
    end
  end




    def create
        user = User.create(user_params)
        if user.valid?
          session[:user_id] = user.id 
          render json: user, status: :ok
        else
          render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end






    private 


    def user_params
        params.permit(:name, :email, :password, :password_confirmation, :dob, :phone)

    end




end
