Rails.application.routes.draw do
  #root to: 'posts#index'
  #resources :post
  namespace 'api' do
    namespace 'v1' do
      resources :posts
      resources :pictures
    end
  end
end
