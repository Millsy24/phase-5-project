Rails.application.routes.draw do
  get 'sessions/create'
  get 'sessions/destroy'
  resources :reviews
  resources :shoes
  resources :users
  get 'latest', to: 'shoes#latest'
  get '/me', to: "users#show"
  get '/signup', to: "users#create"
  post '/login', to: 'sessions#create'
  delete 'logout', to: "sessions#destroy"
  get "/auth", to: "users#show"
  post '/shoes-with-images/:id', to: 'reviews#create'
  get '/shoes-with-images/:id', to: 'shoes#single_shoe_with_image'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
