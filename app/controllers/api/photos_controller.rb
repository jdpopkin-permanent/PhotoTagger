class Api::PhotosController < ApplicationController

  def create
    params[:photo] ||= {title: params[:title], url: params[:url]}
    @photo = Photo.new(params[:photo])
    @photo.owner_id = current_user.id

    if @photo.save
      render json: @photo
    else
      render json: @photo, status: :unprocessable_entity
    end
  end

  def index
    @user_id = params[:user_id]
    @photos = Photo.where(owner_id: params[:user_id]) # check
    respond_to do |format|
      format.html # check
      format.json { render json: @photos }
    end
  end
end
