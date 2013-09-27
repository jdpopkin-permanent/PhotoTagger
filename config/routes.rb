NewAuthDemo::Application.routes.draw do
  resource :session, :only => [:create, :destroy, :new]

  resources :users, :only => [:create, :new, :show]

  namespace "api", defaults: {format: :json} do
    resources :users, :only => [:create, :new, :show] do
      resources :photos, only: [:index]
    end

    resources :photos, only: [:create] do
      resources :photo_taggings, only: [:index]
    end

    resources :photo_taggings, only: [:new, :create]
  end





  root :to => "static_pages#root"
end
