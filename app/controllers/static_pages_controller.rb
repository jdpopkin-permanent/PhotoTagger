class StaticPagesController < ApplicationController
  def root
    @current_user_id = current_user.id
    render :root
  end
end
