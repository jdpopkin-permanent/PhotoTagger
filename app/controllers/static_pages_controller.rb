class StaticPagesController < ApplicationController
  def root
    @current_user_id = current_user.id unless current_user.nil?
    render :root
  end
end
